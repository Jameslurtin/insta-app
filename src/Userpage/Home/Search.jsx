import React from 'react'
import { FiSearch } from 'react-icons/fi'

function Search() {
    return (
        <div>

            <div className='flex  p-2  gap-2  ml-48 py-3'>

                <input className='h-8 w-96 border-4 border-black dark:text-black' placeholder='search'></input>
                <button className='flex p-1'><FiSearch></FiSearch></button>

            </div>
            <div className='flex justify-around items-center'>
            <h className='font-bold flex justify-evenly ml-20 mt-5'>Recent</h>
            <h className='text-blue-400 mt-5'>Clear all</h>
            </div>
         <div className='flex items-center gap-2 relative ml-36 p-4 '>
         <img className='rounded-full w-16  h-16 ' src='https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg'></img>
            <h className='font-bold text-lg'>vignesh_14</h>
            
         </div>
         <div className='flex  absolute right-[1135px] top-42 '>
            <h className='ml-10 text-lg'>vignesh</h>
            <h className='text-lg ml-5'><span className='font-bold  '>.</span>Following </h>
         </div>




        </div>
    )
}

export default Search