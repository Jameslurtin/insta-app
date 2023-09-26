import React, { useState } from 'react'
import instalogo from '../../Login/Images/instalogin.png';
import { GoHomeFill } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi'
import { FaRegCompass } from 'react-icons/fa'
import { TfiVideoClapper } from 'react-icons/tfi'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlinePlusSquare } from 'react-icons/ai'

function Sidebar({ Handleclickside, activecomponent }) {



    return (
        <div className='w-3/12 bg-white dark:bg-black p-5  h-[1000px]  border-r-4 border-gray-200'>
            <div>

                <img src={instalogo} className='mix-blend-multiply'></img>
            </div>
            <div className=' flex justify-start px-8 py-7 gap-3 '>
                <ul className='flex  flex-col  items-start  gap-4 '>
                    <li onClick={() => { Handleclickside("home") }} className={activecomponent === 'home' ? "flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer bg-gray-900 text-white rounded-lg " : 'flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer hover:bg-gray-900 hover:text-white rounded-lg '}>
                        <GoHomeFill /><span>Home</span>
                    </li>


                    <li onClick={() => { Handleclickside("search") }} className={activecomponent === 'search' ? "flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer bg-gray-900 text-white rounded-lg " : 'flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer hover:bg-gray-900 hover:text-white rounded-lg '}>
                        <FiSearch /><span>Search</span>
                    </li>
                    <li onClick={() => { Handleclickside("explore") }} className={activecomponent === 'explore' ? "flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer bg-gray-900 text-white rounded-lg " : 'flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer hover:bg-gray-900 hover:text-white rounded-lg '}>
                        <FaRegCompass /><span>Explore</span>
                    </li>
                    <li onClick={() => { Handleclickside("reels") }} className={activecomponent === 'reels' ? "flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer bg-gray-900 text-white rounded-lg " : 'flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer hover:bg-gray-900 hover:text-white rounded-lg '}>
                        <TfiVideoClapper /><span>Reels</span>
                    </li>
                    <li onClick={() => { Handleclickside("messages") }} className={activecomponent === 'messages' ? "flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer bg-gray-900 text-white rounded-lg " : 'flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer hover:bg-gray-900 hover:text-white rounded-lg '}>
                        <BiSolidMessageSquareDetail /><span>Messages</span>
                    </li>
                    <li onClick={() => { Handleclickside("notification") }} className={activecomponent === 'notification' ? "flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer bg-gray-900 text-white rounded-lg " : 'flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer hover:bg-gray-900 hover:text-white rounded-lg '}>
                        <AiOutlineHeart /><span>Notification</span>
                    </li>
                    <li onClick={() => { Handleclickside("create") }} className={activecomponent === 'create' ? "flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer bg-gray-900 text-white rounded-lg " : 'flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer hover:bg-gray-900 hover:text-white rounded-lg '}>
                        <AiOutlinePlusSquare /><span>Create</span>
                    </li>
                    <li onClick={() => { Handleclickside("profile") }} className={activecomponent === 'profile' ? "flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer bg-gray-900 text-white rounded-lg " : 'flex justify-center items-center p-3 gap-2 text-2xl font-semibold cursor-pointer hover:bg-gray-900 hover:text-white rounded-lg '}>
                        <img className='rounded-full w-7 mix-blend-multiply' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU'></img><span>profile
                        </span>
                    </li>


                </ul>
            </div>

        </div>
    )
}

export default Sidebar