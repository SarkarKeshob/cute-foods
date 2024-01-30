import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/meal";

const MealsByIngredients = () => {
    const mealsByIngredients=useLoaderData();
    const meals=mealsByIngredients.meals;
    return (
        <div>
            {meals.length===0 ?<div className="text-center mt-32"> <span className="loading loading-spinner loading-lg"></span> </div> : <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 md:mt-20 w-full lg:mx-auto lg:w-5/6'>{meals.map((meal) => <Meal key={meal.idMeal} meal={meal}></Meal>)}</div>}
        </div>
    );
};

export default MealsByIngredients;