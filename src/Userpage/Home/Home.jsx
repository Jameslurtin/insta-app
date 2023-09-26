import React from 'react'
import Storycontainer from './Story/Storycontainer'
import Postcontainer from './Post/Postcontainer'


function Home() {
    return (
        <div className='bg-white flex-1 dark:bg-black '>
            <Storycontainer></Storycontainer>
            <Postcontainer></Postcontainer>
            
        
               
            

            
        </div>
    )
}

export default Home