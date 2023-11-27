import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import favoritechange from '../../store/actions/favorit'
const MovieItem=({item})=>{
  const dispatch= useDispatch()
  const fav= useSelector((state)=>state.fav.fav)
  const favId = useSelector((state)=>state.fav.fav.map((f)=>f.id))
     const navigate = useNavigate()

    const goToDetails=(id)=>{
        navigate(`/details/${id}`)
     }
      
    function addfav (obj) {
      dispatch(favoritechange([ ...fav, obj]))
      localStorage.setItem("fav",JSON.stringify([...fav,obj]))

     }

     const deleteFav2 =(id)=>{
      const list = fav.filter(f => f.id !== id)
      dispatch(favoritechange(list))
      
     }
     function hanedlAddDelete(item){
    
      //console.log("mlist",mlist)
  
       //mlist.map((e)=>{ 
       var x = favId.includes(item.id)
       if(x){
         deleteFav2(item.id)
       }else{
         addfav(item)
       }
     }

    return(
      
    <div className="col-3 cart" >
        
      <div style={{cursor:"pointer"}} onClick={()=>{goToDetails(item.id)}}>
      <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="p"
      className='img-fluid rounded'
      />
      
      <h4>{item.title}</h4>
    
      
      </div>
      <i class="bi bi-heart"></i>
      <p className='mb-0'>{item.release_date}</p>
     <div className='text-end mb-2'>
       <a onClick={()=>hanedlAddDelete(item)} style={{cursor:"pointer"}} > 
         <i className={favId.includes(item.id)?"fa-solid fa-star" :"fa-regular fa-star"} style={favId.includes(item.id)?{fontSize:"25px",transition:".2s"}:{transition:".2s"}}></i></a>
         </div>
      

       </div>
       
    
    
    )
}
export default MovieItem