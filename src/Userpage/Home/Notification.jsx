import React from 'react'

function Notification() {
  return (
    <div className='ml-60 flex flex-col gap-2 '>
        <div className='font-bold'>Today</div>
        <div className='flex items-center gap-2'>

        <img className='rounded-full  w-14 h-14'src='https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'></img>
        <h className='font-semibold '>Praveen_07</h>
        <p>Liked your photo</p>
        </div>
        <div className='font-bold '>Yesterday</div>
        <div className='flex items-center gap-2'>
        <img className='rounded-full  w-14 h-14'src='https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'></img>
        <h className='font-semibold '>Ravi Varman_14</h>
        <p>who you might know on instagram</p>
        <button className='bg-blue-500 text-white w-28 rounded-md ml-7 py-1'>Follow</button>
        </div>
       
    </div>
  )
}

export default Notification