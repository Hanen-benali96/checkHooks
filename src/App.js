import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import MoviesList from './components/MovieList';
import { MoviesData } from './components/MoviesData';
const App = () => {
	const [movies, setMovies] = useState(MoviesData);
	const [films,setfilms]=useState(movies);
	const [name,setName]=useState("");
	const [ratingSearch,setRatingSearch]=useState(0);

     return (
		<div className="App">

		<NavBar setfilms={setfilms} films={films} name={name} setName={setName} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch}/>
		
		<MoviesList ratingSearch={ratingSearch} films={films} name={name}/>
		
	   </div>
	
		
	);
};

export default App;
	