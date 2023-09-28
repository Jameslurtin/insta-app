import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './Login/Loginpage';
import Userpage from './Userpage/Userpage';
import { useEffect, useState } from 'react';

function App() {
  const [theme, settheme] = useState('light')
  const Darktoggle = () => {
    settheme(theme === 'dark' ? 'light' : 'dark')  
  }
  useEffect(() => {
    if(theme==='dark'){
      document.documentElement.classList.add('dark')
    } 
    else{
      document.documentElement.classList.remove('dark')
    }

  
  
   
  }, [theme])
  
  return (
    <div className="App dark:bg-black dark:text-white">
      <button  className='cursor-pointer bg-black text-white w-36 rounded-md dark:bg-white dark:text-black 'onClick={Darktoggle}>Dark mode</button>
      <Router>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/userpage" element={< Userpage />} />

        </Routes>
      </Router>


    </div>
  );
}

export default App;
