import React from 'react'

function Create() {
  return (
    <div className=''>
        <div className=' py-5 flex  dark:bg-white dark:text-black dark:border-white   justify-center mt-20 ml-36 w-[700px] rounded-lg h-[550px] border-4 border-black'>
            <h1 className='ml-7 text-2xl font-bold'>Create New post</h1> 
    
        <div className='flex items-center flex-col justify-center -ml-52 '>
            <span className=''>Drag photos here</span>
            <button className='bg-blue-400 rounded-md text-white py-1 w-[250px] mt-3'>Select from computer</button>
            <input type="file" name="" id="" />
        </div>
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec" alt="" />
        
        </div>
      
    </div>
  )
}

export default Create