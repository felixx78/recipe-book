import MealCard from "./components/MealCard";
import Search from "./components/Search";
import Title from "./components/Title";
import fetchMeals from "./api/fetchMeals";

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
