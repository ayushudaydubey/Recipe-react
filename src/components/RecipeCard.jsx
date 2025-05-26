import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
  const { id, image, title, chef, desc } = props.recipe

  return (
    <Link to={`/recipes/details/${id}`} className='mr-3 mb-3 block w-52 shadow rounded overflow-hidden'>
      <img className='w-full h-52 object-cover' src={image} alt={title} />
      <h1 className='p-1 mt-3 text-2xl font-black'>{title}</h1>
      <small className='p-1 text-red-200'>
        {chef}
      </small>
      <p className='mt-2 p-1'>
        {desc ? desc.slice(0, 100) : ""}...
        <small className='text-blue-400'>more</small>
      </p>
    </Link>
  )
}

export default RecipeCard
