import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from "./MainPage"
import LoginForm from "./LoginFrom2"
import ReviewForm from './ReviewForm'
import HowToReview from './DescriptionPage'
import { AuthProvider } from "./TokenContext"
import Nav from './Nav'
import MovieList from './MovieList'

function App(props) {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<MainPage /> } />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/create_review" element={<ReviewForm />} />
            <Route path="/how_to_review" element={<HowToReview />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
