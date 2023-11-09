import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Register from './Component/Register';
import Edit from './Component/Edit';
import Details from './Component/Details';
import Home from './Component/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/edit/:id" element={<Edit/>} />
      <Route path="/view/:id" element={<Details/>} />
    </Routes>
    </>
  );
}

export default App;
