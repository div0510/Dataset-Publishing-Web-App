
import './App.css';
import  { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/user/Login';
import Register from './components/user/Register';
import HeaderWithNav from './components/HeaderWithNav';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderWithNav/>} path='/' />
        <Route element={<Login/>} path="login" />
        <Route element={<Register/>} path="userregister"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
