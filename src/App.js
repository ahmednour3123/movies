import Movies from "./Component/movies/movies";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route , Routes} from "react-router-dom"
 import MovieDetails from "./Component/movie_details/movie_details";
 import Navebar from'./Component/navebar/navebar';
 import Favorite from './Component/favorite/favorite.js'


 function App() {

  return (
    
    <div className="container-fluid">

      <Navebar/>

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/fav" element={<Favorite />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    
    </div>
  );
}

export default App;
