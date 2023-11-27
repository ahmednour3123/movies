import {combineReducers} from 'redux'
import PopularMoviesReducer from "./popular"
import favReducer from './favorite'


export default combineReducers({
    movies: PopularMoviesReducer,
    fav: favReducer
})