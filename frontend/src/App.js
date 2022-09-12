
import './App.css';
import  { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/user/Login';
import Register from './components/user/Register';
import HeaderWithNav from './components/HeaderWithNav';
import Home from './components/screens/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderWithNav/>} path='/' />
        <Route element={<Login/>} path="login" />
        <Route element={<Register/>} path="userregister"/>
        <Route element={<Home/>} path='home' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
