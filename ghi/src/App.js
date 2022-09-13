import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from "./MainPage"
import LoginForm from "./LoginSignupForm"
import HowToReview from './DescriptionPage'
import { AuthProvider } from "./TokenContext"
import Nav from './Nav'
import MovieList from './MovieList'
import MovieDetailPage from './MovieDetailPage'
import APISearch from './APISearch'
import UserPage from './UserPage'

function App(props) {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<MainPage /> } />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/APISearch" element={<APISearch />} />
            <Route path="/how_to_review" element={<HowToReview />} />
            <Route path="/movie/:movie_id" element={<MovieDetailPage />}/>
            <Route path="/list_of_movies" element={<MovieList />}/>
            <Route path="/user/:id" element={<UserPage />}/>
          </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
