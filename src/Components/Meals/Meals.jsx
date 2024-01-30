import PropTypes from 'prop-types';
import Meal from '../Meal/meal';
const Meals = ({meal}) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 md:mt-20 w-full lg:mx-auto lg:w-5/6'>
            
            {meal.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal>)}
        </div>
    );
};
Meals.propTypes={
    meal:PropTypes.array,
    category:PropTypes.string
}
export default Meals;