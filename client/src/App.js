import './App.css';
import { Routes, Route } from 'react-router-dom';

import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import ForgetPwd from './Components/ForgetPwd/ForgetPwd';

function App() {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="register" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path='/forgetPwd' element={<ForgetPwd />}></Route>
      </Routes>

    </div>
  );
}

export default App;
