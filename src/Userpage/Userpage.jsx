import React, { useEffect, useState } from 'react'
import { AiOutlineClockCircle} from 'react-icons/ai';
import { BiHomeAlt2} from 'react-icons/bi'
import Home from './Home/Home';
import Sidebar from './Home/Sidebar';
import Search from './Home/Search';
import Profile from './Home/Profile';
import Explo from './Home/Explo';
import Message from './Home/Message';
import Reels from './Home/Reels';
import Create from './Home/Create';
import Notification from './Home/Notification';


function Userpage() {
  const [activecomponent, setactivecomponent] = useState('home')
    
  const Handleclickside =(componentname)=>{
      setactivecomponent(componentname)
  }
 
 

  return (
    <div className='flex dark:bg-black '>
      <Sidebar Handleclickside={Handleclickside} activecomponent={activecomponent}></Sidebar>
     
      {activecomponent==='home'&&  <Home></Home>  } 
        {activecomponent==='search'&& <Search></Search>}
        {activecomponent==='explore'&& <Explo></Explo>}
        {activecomponent==='profile'&& <Profile></Profile>}
        {activecomponent==='messages'&& <Message></Message>}
        {activecomponent==='reels'&& <Reels></Reels>}
        {activecomponent==='create'&& <Create></Create>}
        {activecomponent==='notification'&& <Notification></Notification>}
        
    </div>
  )
}

export default Userpage