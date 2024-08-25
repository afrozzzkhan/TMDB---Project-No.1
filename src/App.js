import './App.css';
import DetailsPage from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes, json, render } from "react-router-dom";
import NotFoundPage from './Pages/NotFoundPage';
import { useState,lazy } from 'react';
import MovieContext from './components/Context/MovieContext';
import WatchListPage from './Pages/WatchListPage';
import NavBar from './components/NavBar';

function App() {

  const [watchlist, setWatchList] = useState(JSON.parse(localStorage.getItem('movies')));

  function handleAddToWatchList (movieObj) {
    let updatedWatchList = [...watchlist, movieObj];
    setWatchList(updatedWatchList);
    localStorage.setItem('movies',JSON.stringify(updatedWatchList));
  }

  function deleteFromWatchList(movieObj){

    let filteredMovies = watchlist.filter((movie)=>{

      return movie.id != movieObj.id;
    })

    setWatchList(filteredMovies);

    localStorage.setItem('movies', JSON.stringify(filteredMovies));
  }
  return (
    <div className="App">
      
      <BrowserRouter>
       <MovieContext.Provider value={{watchlist,setWatchList, handleAddToWatchList, deleteFromWatchList}}>
        <NavBar />
        <Routes>
       
                <Route
                  path="/"
                  exact={true}
                  element={<HomePage />}                  
                />
                <Route
                  path="/details/:id"
                  exact={true}
                  element={<DetailsPage/>}
                />
                <Route
                  path="/watchlist"
                  exact={true}
                  element={<WatchListPage />}                  
                />

                <Route element = {<NotFoundPage/>} />
                
               
          </Routes>       
             
        </MovieContext.Provider>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;
