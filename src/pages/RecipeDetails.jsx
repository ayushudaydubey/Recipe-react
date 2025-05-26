import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'

const RecipeDetails = () => {
  const { id } = useParams()
  const { data } = useContext(recipecontext)

  const recipe = data.find(item => item.id === id)

  if (!recipe) return <h1 className='text-center mt-10'>Recipe not found!</h1>

  return (
    <div className='p-5 max-w-xl mx-auto'>
      <img className='w-full h-80 object-cover rounded' src={recipe.image} alt={recipe.title} />
      <h1 className='text-3xl mt-5 font-bold'>{recipe.title}</h1>
      <h3 className='text-xl mt-2 text-red-400'>By {recipe.chef}</h3>
      <p className='mt-4'>{recipe.desc}</p>
      <h4 className='mt-5 font-semibold'>Ingredients:</h4>
      <p>{recipe.ingr}</p>
      <h4 className='mt-5 font-semibold'>Instructions:</h4>
      <p>{recipe.inst}</p>
      <h4 className='mt-5 font-semibold'>Category:</h4>
      <p>{recipe.category}</p>
    </div>
  )
}

export default RecipeDetails
