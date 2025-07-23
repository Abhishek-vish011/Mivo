import React, { useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom";
import "../App.css"

export default function LandingPage() {

  const router = useNavigate();

useEffect(() => {
  const animatedText = document.querySelector(".landing-text");
  const animatedImage = document.querySelector(".image-container");

  if (animatedText) {
    animatedText.classList.add("animate-entry"); // from left
  }

  if (animatedImage) {
    animatedImage.classList.add("animate-image"); // from right
  }
}, []);


useEffect(() => {
  const ad = document.querySelector('.video-call-ad');
  const onScroll = () => {
    const rect = ad.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      ad.style.opacity = "1";
      ad.style.transform = "translateX(0)";
      window.removeEventListener("scroll", onScroll);
    }
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);




  return (
    <div className='landingPageContainer'>
         <nav>
          <div className='navHeader'>
            <h2>Mivo Video Call</h2>
          </div>
          <div className='navList'>
            <p onClick={()=>{
            router("/ds3hj2")
            }}>Join as Guest</p>
            <p onClick={()=>{
              router("/auth")
            }}>Register</p>
            <div onClick={()=>{
              router("/auth")
            }} role='button'>
              <p>Login</p>
            </div>
          </div>
         </nav>
         <div className="landingMainContainer">
            <div className='landing-text'>
            <h1> <span style={{color: "#FF9839"}}>Connect</span>  with your loved Ones</h1>
          <p className='typing-text'>Cover a distance by Apna Video call</p>
          <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
          </div>
          </div>
          <div className="animate-image">
            <img src="/Viddeo-call.png" alt="load" />
          </div>
         </div>

    </div>
  )
}
