import { legacy_createStore as createStore} from 'redux'
import combineReducers from './reducers/combine';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
const store=  createStore(combineReducers,applyMiddleware(thunk))

 export default store