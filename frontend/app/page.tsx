import Head from "next/head";
import MealCard from "./components/MealCard";
import Search from "./components/Search";
import Meal from "./types/Meal.type";
import Title from "./components/Title";

const fetchMeals = async (s: string, filterBy?: string) => {
  const searchParams = new URLSearchParams();

  searchParams.append(filterBy ? "value" : "s", s);
  if (filterBy) searchParams.append("filterBy", filterBy);

  const response = await fetch(
    `http://localhost:3000/api/${filterBy ? "filter?" : "search?"}` +
      searchParams.toString()
  );
  const data = await response.json();
  return data as Meal[];
};

type Props = {
  searchParams: Promise<{
    s: string | undefined;
    filterBy: string | undefined;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const meals = await fetchMeals(params.s || "", params.filterBy);

  return (
    <div className="pb-12">
      <Title
        value={["Search", params.s, params.filterBy]
          .filter(Boolean)
          .join(" - ")}
      />

      <h1 className="text-center pt-48 text-3xl mb-4 ">Search</h1>
      <Search />

      <div className="flex gap-4 mt-12 max-w-[1300px] mx-auto flex-wrap">
        {meals.map((i) => (
          <MealCard key={i.idMeal} {...i} />
        ))}
      </div>
    </div>
  );
}
