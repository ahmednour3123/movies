import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../movies/movie_item";

const Favorite = () => {
  const favorite = useSelector((state) => state.fav.fav);
  return (
    <>
      <div className="row mt-3">
        {favorite.map((item, index) => {
          return <MovieItem key={index} item={item} />;
        })}
      </div>
    </>
  );
};
export default Favorite;
