import './App.css';
import 'leaflet/dist/leaflet.css'
import HomePage from './pages/HomePage';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import DashBoard from './pages/DashBoard';


function App() {
  return (
    <>   
      <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/home' element= {<Navigate to ="/"/>}/>
        <Route path='signup' element ={<SignUp/>}/>
        <Route path='signin' element ={<SignIn/>}/>
        <Route path='dashboard' element ={<DashBoard/>}/>
      </Routes>
    </>
  );
}

export default App;
