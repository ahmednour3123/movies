import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axioxsConfig/instance';
import { useNavigate } from 'react-router-dom';
import './movie_details.css'
const MovieDetails =()=>{


    const params = useParams()
    const [movie,setMovie] = useState({})

    useEffect(()=>{
     axiosInstance.get(`/movie/${params.id}`).then((res)=>{
            console.log(res.data);
            console.log(res.data.genres[1]
				);

      setMovie(res.data)
     }).catch((err)=>{
             console.log(err);
     })
    },[]) 

	const navigate = useNavigate()


    const goToMovies=()=>{
   navigate('/movies')
    }
	
    const rate= movie.vote_average*10
	var rateD = Math.trunc(rate)
	 

	function toHoursAndMinutes(totalMinutes) {
		const hours = Math.floor(totalMinutes / 60);
		console.log(totalMinutes);
		const minutes = totalMinutes % 60;
		return  hours +'h '+ minutes + 'm'  ;
	  }
    return(
        <>
        <div className="product-content product-wrap clearfix">
		<div className="row">
				<div className="col-md-3 col-sm-12 col-xs-12">
					<div className="product-image">
						<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
						alt="194x228" className="img-fluid "/>
	
  
						<span class="tag2 hot">
						{rateD}%
						</span>
					</div>
				</div>
				<div className="col-md-8 col-sm-12 col-xs-12">
				<div className="product-deatil">
						<h3 className="name mb-3">
							{movie.title}
						</h3>
                   <h6>{toHoursAndMinutes(movie.runtime)}</h6>
			{movie.genres && movie.genres.map((item) => {
          return <h className="m-2" >{item.name}</h>
        })}
                    <h5 className="mt-3"> Overview</h5>
						<p className="price-container">
							{movie.overview}
						</p>
						<span className="tag1">{movie.vote_average}</span>
			
				</div>
				
				<div className="product-info smart-form m-auto">
					<div className="row">
						<div className="col-md-6 col-sm-6 col-xs-6">
							<div className="rating">
								<label for="stars-rating-5"><i className="fa fa-star"></i></label>
								<label for="stars-rating-4"><i class="fa fa-star"></i></label>
								<label for="stars-rating-3"><i class="fa fa-star text-primary"></i></label>
								<label for="stars-rating-2"><i class="fa fa-star text-primary"></i></label>
								<label for="stars-rating-1"><i class="fa fa-star text-primary"></i></label>
							</div>
						</div>
					</div>
          <div className="col-md-6 col-sm-6 col-xs-6 mt-5 d-flex justify-content-end">
            <button  className="btn btn-warning" onClick={()=>{goToMovies()}} >Back</button>
          </div>
				</div>
			</div>
		</div>
	</div>
    </>
    )
}

export default MovieDetails



