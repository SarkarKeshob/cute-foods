import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Meal = ({meal}) => {
    const {strMeal,strMealThumb}=meal;

    return (
        <div className='bg-[#7F675B] p-12 rounded-lg text-black flex flex-col shadow-xl' id='show-meals'>
            <figure className='my-2'>
                <img src={strMealThumb} alt={strMeal} />
            </figure>
            <h2 className='text-2xl text-center grow my-2'>{strMeal}</h2>
            <Link to={`/meal/${meal.idMeal}`}><button className='w-full btn btn-warning my-2'>Show Details</button></Link>
           
           
        </div>
    );
};
Meal.propTypes={
    meal:PropTypes.object,
}
export default Meal;