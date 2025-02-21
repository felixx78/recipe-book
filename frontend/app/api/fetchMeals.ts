import Meal from "../types/Meal.type";

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

export default fetchMeals;
