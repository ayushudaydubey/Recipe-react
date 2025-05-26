import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import {Link} from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'


const Recipes = () => {
  const {data , setData  } = useContext(recipecontext)
  const recipeRender  = data.map((recipe)=>{
    return <RecipeCard key ={recipe.id} recipe ={recipe}/>
  })
  return (
    <>
  <Link className='absolute right-44 bg-red-400 text-white font-bold  px-4 py-2  rounded-xl ' to="/recipes/create-recipe"> Create Recipe
   </Link>

   <div className='p-5 mt-10 flex flex-wrap'>
   {data.length>0?recipeRender:"No Recipes Found!"}
   </div>


 
    </>
  )
}

export default Recipes