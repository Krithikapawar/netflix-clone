import React, { useEffect ,useState} from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTkyYmM3ODZiM2ZlOTdjNGZiMWJjOTgyYzYyMDc4YSIsIm5iZiI6MTczMTc2MTQ2OS4xNjUwMDE2LCJzdWIiOiI2NzM4OTQ5NWExODFhNzE3ZWFjODk5YjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.48-aVcQzck6rFVi72c0yOtYYd-tzTKhKeEbOQQS95oc'
    }
  };
  
  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="Player">
      <img src={back_arrow_icon} alt="" onAbort={()=>{navigate(-2)}}/>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      >
        {" "}
      </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  );
};

export default Player;
