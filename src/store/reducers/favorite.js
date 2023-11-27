
const INTIAL_STATE = {

    fav: localStorage.getItem("fav")
    ? JSON.parse(localStorage.getItem("fav"))
    :[],
};

export default function favReducer(state=INTIAL_STATE , action){
    switch(action.type){
        case "SET_Fav":

  
        return {...state,fav:action.payload }
          
       default:
        return state 
    
    }
    
}
