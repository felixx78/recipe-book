import Image from "next/image";
import Meal from "../types/Meal.type";
import Link from "next/link";

function MealCard(props: Meal) {
  return (
    <Link href={`/${props.idMeal}`}>
      {props.strMealThumb ? (
        <Image width={300} height={300} src={props.strMealThumb} alt="" />
      ) : (
        <div className="border-white border flex justify-center items-center w-[300px] h-[300px]">
          No Image
        </div>
      )}

      <p className="mt-2">{props.strMeal}</p>
    </Link>
  );
}
export default MealCard;
