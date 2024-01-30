import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MealDetails = () => {
    const id = useParams().idMeal;
    const navigate= useNavigate();

    const [details, setDetails] = useState({});
    // const handleIngredients=()=>{
    //     const ingredient=document.getElementById
    // }

    useEffect(() => {
        const getMealDetails = async () => {
            const strDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

            const mealDetailsJson = await strDetails.json();
            setDetails(mealDetailsJson.meals[0])
        };
        getMealDetails();
    }, [id]);
    const properties = Object.values(details);
    const giveValues = (range1, range2) => {
        const values = []
        for (let i = range1; i <= range2 && properties[i] !== "" && properties[i] !== null; i++) {
            values.push(properties[i]);
        }
        return values;
    }

    const ingredients = giveValues(9, 28);
    const measures = giveValues(29, 48);
    const ingredientsDetail = [];
    for (let i = 0; i < ingredients.length; i++) {
        ingredientsDetail.push('' + ingredients[i] + ':- ' + measures[i]);
    }
    return (
        <div>
            {details.strMealThumb===undefined ? <div className="text-center mt-32"> <span className="loading loading-spinner loading-lg"></span> </div>  : <div className="grid grid-cols-2 gap-10 mt-10 w-5/6 mx-auto">
                <div>
                    <div className="flex mb-10 justify-around">
                        <h1 className="text-2xl">Name:{details.strMeal}</h1>
                        <h2 className="text-2xl">Origin:{details.strArea}</h2>
                    </div>
                    <img src={details.strMealThumb} alt={details.strMeal} />

                </div>

                <div >
                    <div>
                        <h4 className="text-3xl underline mb-4">Ingredients Needed: </h4>
                        <ul className="grid grid-cols-3 gap-x-4 gap-y-2">

                            {ingredientsDetail.map((ingredient, index) => <li key={index} className="font-bold hover:underline hover:cursor-pointer" onClick={(event)=>{
                                const ingredient=event.target.innerText;
                                const ingredientName=ingredient.substring(2,ingredient.indexOf(':'));
                                navigate(`/meal/meals-by-ingredients/${ingredientName}`);
                                
                            }}>{index + 1}.{ingredient}</li>)}

                        </ul>
                    </div>
                    <h5> <span className="text-xl font-bold">Instruction:</span> {details.strInstructions}</h5>
                </div>
            </div>}
        </div>
    );
};

export default MealDetails;