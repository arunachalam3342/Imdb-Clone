import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Home from './pages/home/Home';
import Movie from './pages/movieDetail/Movie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Imdb-Clone" element={<Home />}></Route>
          <Route path="/Imdb-Clone/movie/:id" element={<Movie />}></Route>
          <Route path="/Imdb-Clone/movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1 className='text-center'><br />ERROR PAGE. CHECK THE URL.</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
