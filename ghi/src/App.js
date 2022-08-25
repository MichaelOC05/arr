import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Login"
import MainPage from "./MainPage"
function App(props) {
  return (

    <BrowserRouter>
      <div>
         <Routes>
           <Route path="/" element={<MainPage /> } />
           <Route path="/login" element={<Login />}/>
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
