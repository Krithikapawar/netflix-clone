import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data.js";
import { Link } from "react-router-dom";

const TitleCards = ({title,category}) => {
  const [apiData, setApiData]=useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTkyYmM3ODZiM2ZlOTdjNGZiMWJjOTgyYzYyMDc4YSIsIm5iZiI6MTczMTc2MTQ2OS4xNjUwMDE2LCJzdWIiOiI2NzM4OTQ5NWExODFhNzE3ZWFjODk5YjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.48-aVcQzck6rFVi72c0yOtYYd-tzTKhKeEbOQQS95oc'
    }
  };
  
  
  
  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="TitleCards">
      <h2>{title?title:"popular on netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
