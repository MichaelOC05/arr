import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from "./MainPage"
import LoginForm from "./LoginFrom2"
import ReviewForm from './ReviewForm'
import { AuthProvider } from "./TokenContext"

function App(props) {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage /> } />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/review" element={<ReviewForm />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
