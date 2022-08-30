import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from "./MainPage"
import LoginForm from "./LoginFrom2"
import { AuthProvider } from "./TokenContext"
import Nav from './Nav'

function App(props) {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<MainPage /> } />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
