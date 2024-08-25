import {createStore} from "redux";

let watchlist = JSON.parse(localStorage.getItem('movies')) ? JSON.parse(localStorage.getItem('movies')) : [];


function watchlistReducer(state = {watchlist: watchlist}, action){

    switch(action.type){

        case 'SET_WATCHLIST' : {

            return {...state, watchlist:[...action.payload]}
        }

       

        case 'ADD_TO_WATCHLIST': {

            let newState = {...state, watchlist:[...state.watchlist, action.payload]}

            localStorage.setItem('movies', JSON.stringify(newState.watchlist))

            return newState;
        }

        case 'REMOVE_FROM_WATCHLIST':{

            const filteredMovies = state.watchlist.filter(movie => movie.id !== action.payload.id);

            localStorage.setItem('movie', JSON.stringify(filteredMovies));

            let newState = {...state, watchlist:[...filteredMovies]}

            return newState;
        }

        default:
            return state;
    }
}

const store = createStore(watchlistReducer);
export default store;