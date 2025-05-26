import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'

import { toast } from 'react-toastify'

const Create = () => {
  const navigate = useNavigate()
  const { data, setData } = useContext(recipecontext)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe])
    toast.success("New Recipe Created")
    reset()
    navigate(-1)
  }


  return (
    <div className='flex items-center justify-center text-5xl mt-10 font-bold text-black'>
      <form className='text-xl mb-5 p-5'   onSubmit={handleSubmit(SubmitHandler)} >
        <input className='mb-5 bg-blue-200 border-2 border-zinc-800 rounded-xl ' type="url" {...register("image")}
          placeholder='Image Url' />
        <input className='mb-5 bg-blue-200 border-2 border-zinc-800 rounded-xl ' type="text" {...register("title")}
          placeholder='Titel' />
        <input className='mb-5 bg-blue-200 border-2 border-zinc-800 rounded-xl ' type="text" {...register("chef")}
          placeholder='Chef' />
         <textarea  className='bg-blue-200 border-2 border-zinc-800 rounded-xl' {...register("desc")}
          placeholder='recipe description' >
          
         </textarea>
         <textarea  className='bg-blue-200 border-2 border-zinc-800 rounded-xl' {...register("ingr")}
          placeholder='recipe Ingredients'></textarea>

             <textarea  className='bg-blue-200 border-2 border-zinc-800 rounded-xl' {...register("inst")}
          placeholder='recipe Instructions'></textarea>

          <select  className='bg-blue-200 border-2 border-zinc-800 rounded-xl' {...register("category")} >

            <option value="breakfast">BreakFast</option>
             <option value="lunch">Lunch</option>
              <option value="supper">Supper</option>
               <option value="dinner">Dinner</option>

          </select>
          <button className='px-4 py-2 bg-zinc-900 border-2 border-blue-200 rounded-xl'>
            Create Recipe
          </button>
      </form>

    </div>
  )
}

export default Create