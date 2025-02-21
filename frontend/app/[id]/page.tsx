import { notFound } from "next/navigation";
import Meal from "../types/Meal.type";
import Image from "next/image";
import Link from "next/link";
import fetchMealById from "../api/fetchMealById";
import fetchMeals from "../api/fetchMeals";
import MealCard from "../components/MealCard";

type Props = {
  params: Promise<{ id: string }>;
};

const ingredientKeys = Array.from(
  { length: 20 },
  (_, i) => `strIngredient${i + 1}`
) as Array<keyof Meal>;

async function Page({ params }: Props) {
  const { id } = await params;
  const data = await fetchMealById(id);
  const mealsByCategory = await fetchMeals(data.strCategory, "category");

  if (!data) notFound();

  return (
    <div className="flex gap-10">
      <div className="flex-1 flex items-start pt-24 pl-10 gap-20">
        <Image
          className="flex-shrink-0"
          width={300}
          height={300}
          src={data.strMealThumb}
          alt=""
        />
        <div>
          <h1 className="text-4xl mb-2">{data.strMeal}</h1>

          <Link
            className="mb-4 underline inline-block text-xl"
            href={`/?s=${data.strArea}&filterBy=country`}
          >
            {data.strArea}
          </Link>
          <p className="text-gray-300 max-w-[1000px] mb-4">
            {data.strInstructions}
          </p>

          <p className="mb-2 text-xl">Ingredients:</p>
          <ul className="space-y-1 pl-2">
            {ingredientKeys.map(
              (i) =>
                data[i] && (
                  <li key={i}>
                    <Link
                      className="block underline w-fit"
                      href={`/?s=${data[i]}&filterBy=ingredient`}
                    >
                      {data[i]}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>

      <aside className="w-[360px] scrollbar overflow-auto max-h-svh border-l border-gray-400 pt-4 px-4">
        <p className="text-xl mb-4">You also might like</p>

        <div className="space-y-4 w-fit mx-auto">
          {mealsByCategory.map((i) => (
            <MealCard key={i.idMeal} {...i} />
          ))}
        </div>
      </aside>
    </div>
  );
}
export default Page;
