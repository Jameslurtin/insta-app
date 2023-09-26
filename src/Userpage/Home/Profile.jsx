import React from 'react'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { TbSettingsFilled } from 'react-icons/tb'
import { MdOutlineContacts } from 'react-icons/md'

function Profile() {
    return (
        <div className=' p-3 w-[100%]'>
            <div className='flex justify-center items-center gap-14 mt-10 border-b-4 border-gray-200 pb-7   '>
                <div>

                    <img className='rounded-full w-44 h-44' src='https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'></img>
                </div>
                <div className='flex gap-7 flex-col'>
                    <div className='flex gap-14 '>
                        <h className='text-2xl font-semibold'>Antony_11</h>
                        <button className='border-4 border-gray-200 bg-gray-200  rounded-md font-semibold w-28 h-10' >Edit profile</button>
                        <span className='text-3xl '> <TbSettingsFilled></TbSettingsFilled></span>

                    </div>

                    <div className='flex justify- items-center gap-9'>
                        <h> <span className='font-bold text-xl'>4</span> posts</h>
                        <h>120 followers</h>
                        <h>127 following</h>
                    </div>
                    <div className='font-semibold flex  flex-col'>
                        <h>Antony Das</h>
                        <h>Computer Engineer</h>

                    </div>




                </div>


            </div>
            <div className='flex justify-center items-center gap-7 p-5'>
                <span className='text-xl'><AiOutlinePlusSquare></AiOutlinePlusSquare></span>
                <h className='font-semibold'>POSTS</h>
                <span><BsBookmark></BsBookmark></span>
                <h>SAVED</h>
                <span> <MdOutlineContacts></MdOutlineContacts></span>
                <h>TAGGED</h>
            </div>
            <div className='flex pt-7 px-14 gap-3 '>
                <div className='w-[360px] h-[400px] object-cover  overflow-hidden'>
                    <img className='' src='https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg'></img>
                </div>
                <div className='w-[360px] h-[400px] object-cover  overflow-hidden'>

                    <img className=' ' src='https://i.pinimg.com/originals/d8/45/41/d84541b5f68bf144543b4e9a7f1cfe4a.jpg'></img>
                </div>
                <div className='w-[360px] h-[400px] object-cover  overflow-hidden'>
                    <img className='' src='https://e0.pxfuel.com/wallpapers/898/129/desktop-wallpaper-cool-boy-boy-pic.jpg'></img>
                </div>
                <div className='w-[360px] h-[400px] object-cover  overflow-hidden'>
                 <img className='' src='https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'></img>
                </div>


            </div>

        </div>
    )
}

export default Profile