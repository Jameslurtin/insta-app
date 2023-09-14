import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './Login/Loginpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          {/* {<Route path="/userpage" element={< Chat />} /> */} */}
        
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
