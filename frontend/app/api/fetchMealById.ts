import Meal from "../types/Meal.type";

const fetchMealById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/${id}`);
  const data = await response.json();
  return data[0] as Meal;
};

export default fetchMealById;
