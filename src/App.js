import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>   
      <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/home' element= {<Navigate to ="/"/>}/>
        <Route path='signup' element ={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
