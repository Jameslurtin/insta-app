import React, { useEffect, useState } from 'react'
import InstaImage from './Images/insta1.png';
import Loginimage from './Images/login.png';
import Instalogimage from './Images/instalogin.png';
import screen1 from './Images/screen1.jpg'
import screen2 from './Images/screen2.jpg'
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const [username1, setusername1] = useState('')
  const [password1, setpassword1] = useState('')
  const [current, setcurrent] = useState(0)
  const [errormessage, seterrormessage] = useState(false)
  const [signup, setsignup] = useState(true)
  const [login, setLogin] = useState(false)
  const images = [screen1, screen2]
  useEffect(() => {
    const Imagechange = setTimeout(() => {
      const Nextimage = (current + 1) % images.length;
      setcurrent(Nextimage);

    }, 3000)



  }, [current, images])
  const currentimage = images[current]
  const username = 'james3@'
  const password = 'james'
  const redirect = useNavigate();
  function Handellogin() {
    console.log('click')
    if (

      username1 == username, password1 == password

    ) {
      redirect("/userpage")
    }
    else {
      // alert("wrong password")
      seterrormessage(true)
    }
  }
  return (
    <div className='flex justify-center h-screen items-center '>

      <div className='flex items-center max-md:hidden relative' >
        <img className='' src={Loginimage}></img>
        <img className='absolute left-[200px]  w-[160px] z-0' src={currentimage}></img>
        <img className='absolute left-[150px]  w-[250px]' src={InstaImage}></img>


      </div>
      {
        signup ? <div>
          <div className='  w-[500px] h-[500px] -mt-36  flex  flex-col items-center  justify-evenly  bg-white border-b-4 border-t-4 border-l-4 border-r-4 ml-24'>
            <img className='mt-44 cursor-pointer' src={Instalogimage}></img>
            <input placeholder='phone number , username or email' className='w-80 h-24 border-b-4 border-t-4 border-l-4 border-r-4   py-3' onChange={(e) => { setusername1(e.target.value) }}></input>
            <input placeholder='password' className='w-80 h-24  border-b-4 border-t-4 border-l-4 border-r-4 mt-4 py-3' onChange={(e) => { setpassword1(e.target.value) }}></input>

            <div className='bg-[#4CB5F9] w-80 h-10 rounded-lg text-white mt-4 py-3 flex justify-center items-center' onClick={Handellogin}> Log in</div>
            {
              errormessage && <div className='text-red-500'>you entered wrong password  </div>
            }

            <h className='mt-4 pt-2 flex items-center'>_______________________ OR ________________________        </h>
            <div className='  relative mt-11 bottom-1 flex gap-2 '>
              <img className='w-5 cursor-pointer ' src='https://cdn-icons-png.flaticon.com/512/124/124010.png' alt=''></img>
              <h1 className='text-[#3851A5] font-bold   text-[18px] cursor-pointer '>Log in with Facebook</h1>
            </div>

            <h className='mt-4'>Forgot password?</h>
            <div className=' w-[500px] h-[300px]  mt-28 flex  flex-col items-center  bg-white border-b-4 border-t-4 border-l-4 border-r-4 px-3 pt-3 pb-3 '>
              <h className='relative -ml-24'>Don't have an account?</h>
              <h1 className='text-[#3851A5] absolute ml-36 cursor-pointer' onClick={() => { setsignup(!signup) }}>Sign up</h1>

            </div>

          </div>
        </div> : <div className='  w-[470px] h-[800px]  flex  flex-col items-center  justify-evenly  bg-white border-b-4 border-t-4 border-l-4 border-r-4 ml-24' >
          <img className='flex justify-center items-center mt-40 cursor-pointer' src={Instalogimage}></img>
          <h className='text-[#A98B77] font-serif font-semibold text-lg flex items-center justify-evenly mt-4'>Sign up to see photos and videos <br></br>from your friends.</h>
          <div className='  relative  bottom-1 flex gap-2  mt-7'>
            <button className='bg-[#0095F6]  flex justify-center items-center px-10 py-2 gap-3 rounded-lg'>
              <img className='w-5 bg-white' src='https://cdn-icons-png.flaticon.com/512/124/124010.png' alt=''></img>
              <h1 className='text-white font-bold   text-[18px] cursor-pointer '>Log in with Facebook</h1>

            </button>


          </div>
          <h className='mt-6 pt-2 flex items-center'>_______________________ OR ________________________        </h>
          <div className='flex  flex-col items-center justify-center gap-2 -mt-10'>
            <input placeholder='Mobile number or email' className='w-80 h-10 border-b-4 border-t-4 border-l-4 border-r-4  mt-16' ></input>
            <input placeholder='Full Name' className='w-80 h-10 border-b-4 border-t-4 border-l-4 border-r-4  ' ></input>
            <input placeholder='User Name' className='w-80 h-10 border-b-4 border-t-4 border-l-4 border-r-4  ' ></input>
            <input placeholder='password' className='w-80 h-10  border-b-4 border-t-4 border-l-4 border-r-4 '></input>
          </div>
          <p className='flex justify-center items-center ml-10 mt-5 '>People who use our service may have uploaded your contact information to Instagram. Learn More
          </p>
          <p className='ml-10 mt-5'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .

          </p>

          <div className='bg-[#4CB5F9] w-80 h-10 rounded-lg text-white mt-10 flex justify-center items-center py-3'> Signup </div>


          <div className=' w-[470px] h-[300px]  px-10 py-8 mt-10 flex  flex-col items-center  justify-evenly  bg-white border-b-4 border-t-4 border-l-4 border-r-4 '>
            Have an account? <h className='text-blue-400 ml-48 -mt-6' onClick={() => { setLogin(!login) }}>Log in</h>
          </div>




        </div>


      }



    </div>
  )
}

export default Loginpage