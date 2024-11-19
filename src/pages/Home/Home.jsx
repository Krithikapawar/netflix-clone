import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
          A young fighter (Tony Jaa) travels to Australia to retrieve stolen elephants that 
          were promised originally to the king of Thailand. Once there, he enlists the aid 
          of a Thai-born Aussie detective to help him achieve his goal, and he uses his fierce
           Muay Thai moves to battle an evil woman's gang of deadly bodyguards.</p>
           <div className="hero-btns">
            <button className="btn"><img src={play_icon} alt="" />play</button>
            <button className="btn dark-btn"><img src={info_icon} alt="" />more info</button>
           </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"blockbuster movies"} category={"top_rated"}/>
      <TitleCards title={"only on netflix"} category={"popular"}/>
      <TitleCards title={"upcoming"} category={"upcoming"}/>
      <TitleCards title={"top pics for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
