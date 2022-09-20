
import './App.css';
import  { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/user/Login';
import Register from './components/user/Register';
import HeaderWithNav from './components/HeaderWithNav';
import Home from './components/screens/Home';
import AllDataset from './components/datasets/AllDataset';
import { Toaster } from 'react-hot-toast';
import DatasetManager from './components/datasets/DatasetManager';
import DatasetDetails from './components/datasets/DatasetDetails';
import AddDataset from './components/datasets/AddDataset';
import DatumWithAddBtn from './components/screens/DatumWithAddBtn';
import Authorize from './components/Authorize';
import AllDatasetWithoutUser from './components/datasets/AllDatasetWithoutUser';


function App() {
  return (
    <BrowserRouter>
    <Toaster position='top-center' />
      <Routes>
        <Route element={ <> <HeaderWithNav/> <DatumWithAddBtn/> </>} path='/' />
        <Route element={<Login/>} path="login" />
        <Route element={<Register/>} path="userregister"/>
        <Route element={<Home/>} path='home' />
        <Route element={<Authorize><AddDataset/></Authorize> } path='adddataset'/>
        <Route element={<Authorize><AllDataset/></Authorize>} path='dataset' />
        <Route element={<DatasetManager/> } path='datasetmanager'/>
        <Route element={<Authorize><DatasetDetails/></Authorize> } path='details/:id'/>
        <Route element={<AllDatasetWithoutUser/>}  path='datasets' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
