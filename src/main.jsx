import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './Components/Index/Index';
import Home from './Components/Home/Home';
import MealDetails from './Components/MealDetails/MealDetails';
import SearchedProducts from './Components/SearchedProducts/SearchedProducts';
import MealsByIngredients from './Components/MealsByIngredients/MealsByIngredients';


const router=createBrowserRouter([
  {
    path:'/',
    element:<Index></Index>,
    children:[
      {
        path:'',
        loader:async()=>await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list'),
        element:<Home></Home>,
        
      },
      {
        path:'/meal/:idMeal',
        loader:async({params})=>await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`) ,
        element:<MealDetails></MealDetails>
      },
      {
        path:'/meal/searchedProducts/:searchKey',
        loader:async({params})=>await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.searchKey}`),
        element:<SearchedProducts></SearchedProducts>
      },
      {
        path:'/meal/meals-by-ingredients/:mealByIngredients',
        loader:async({params})=>await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.mealByIngredients}`),
        element:<MealsByIngredients></MealsByIngredients>
      }
    ]
  
}]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
