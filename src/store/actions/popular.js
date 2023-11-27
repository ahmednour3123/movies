import axiosInstance from "../../axioxsConfig/instance";
export default function PopularMovies(page) {
    

    return (dispatch)=>{
        axiosInstance
        .get(`/movie/popular?page=${page}`)
        .then((res) => {
          console.log(res.data.results);
          dispatch({type:'SET_POPULAR',payload:res.data.results})
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
}
