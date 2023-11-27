const INTIAL_STATE={
    movies:[]
};
export default function PopularMoviesReducer(state=INTIAL_STATE,action){
    switch(action.type){
        case "SET_POPULAR":
            return {...state,movies: action.payload}
          
              
        default:
            return state;
    }
}