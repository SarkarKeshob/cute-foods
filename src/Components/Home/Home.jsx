import { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";
import Meals from "../Meals/Meals";

const Home = () => {
    const categoriesObj = useLoaderData();
    const categories = categoriesObj.meals.map(category => category.strCategory);
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const getMeals = async () => {
                const newMeals = [];
            for (let i = 0; i < categories.length; i++) {

                const mealStr = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories[i]}`);
                const meal = await mealStr.json();
                newMeals.push(meal.meals);

            }
            setMeals(newMeals);
        };
        getMeals();
    }, [categories]);


    return (
        <div>
            {meals.length===0 ?<div className="text-center mt-32"> <span className="loading loading-spinner loading-lg"></span> </div> : meals.map((meal, index) => <Meals key={index} meal={meal}></Meals>)}

        </div>
    );
};

export default Home;