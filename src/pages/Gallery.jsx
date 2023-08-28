import React from "react";
import '../pages/Gallery.css'

export default function Gallery() {

  
    const copyrightStyle = {
      position: "absolute",
      top: "17%", // Relative position from top
      left: "-5%", // Relative position from left
      padding: "2px",
      borderRadius: "500px",
      fontSize: "2vw",
      color: "#FAFF00",
    };

  return (
    <div className="Gallery responsive">
    <div className="title" >
      <h1 className="gallery-title">
        <span style={copyrightStyle}>&copy;</span>
        {"//ARTWORK"}
      </h1>
      <div className="gallery-paragraph">
        THE CHAMBERS HAVE ASCENDED TO EARTH,
        <br />
        THEY ARE DRAWN TO THE INNOVATORS WITH 
        <br/> 
        THE MOST CURIOUS HEARTS , EACH CHAMBER
        <br/>
        WILL DRAW OUT ITS DESTINED MATCH AND 
        <br/> ATTACH ITSELF TO THE HOST
        CREATING THE <br/> 
        ORIGINAL CYBORGS. THE 
        ORIGINALS WILL <br/>
        THEN TRAVEL FROM TRIBE TO TRIBE, LEAVING
        <br />
        A LANDMARK IN CITIES THAT HOLD THE
        <br />
        FINEST INNOVATORS.
      </div>
      <div className="imageContainerStyle3" >
        <img className="imageStyle3" src="/image3.png" alt="Artwork" />
      </div>
      <div  className="imageContainerStyle2" >
        <img className="imageStyle2" src="/image2.png" alt="Artwork" />
      </div>
      <div className="imageContainerStyle1"  >
        <img className="imageStyle1" src="/image1.png" alt="Artwork" />
      </div>
      {/* arrow */}
      <div style={{ position: "absolute", top: "90%", left: "50%" }}>
      <svg width="27" height="40" viewBox="0 0 27 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 26L13.5 38.5L26 26" stroke="#FAFF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 13.5L13.5 26L26 13.5" stroke="#FAFF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 1L13.5 13.5L26 1" stroke="#FAFF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </div>
       {/* CIRCLE */}
       <div style={{ position: "absolute", top: "35%", left: "95%" }}>
       <svg width="23" height="188" viewBox="0 0 23 188" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="110" width="23" height="23" rx="11.5" fill="#FAFF00"/>
<rect x="4.5" y="114.5" width="14" height="14" rx="7" fill="#FAFF00"/>
<rect x="4.5" y="114.5" width="14" height="14" rx="7" stroke="#0B0D0E" stroke-width="3"/>
<rect x="0.5" y="0.5" width="22" height="22" rx="11" fill="#0B0D0E"/>
<rect x="0.5" y="0.5" width="22" height="22" rx="11" stroke="#FAFF00"/>
<rect x="0.5" y="55.5" width="22" height="22" rx="11" fill="#0B0D0E"/>
<rect x="0.5" y="55.5" width="22" height="22" rx="11" stroke="#FAFF00"/>
<rect x="0.5" y="165.5" width="22" height="22" rx="11" fill="#0B0D0E"/>
<rect x="0.5" y="165.5" width="22" height="22" rx="11" stroke="#FAFF00"/>
</svg>
</div>
    </div>
    </div>
  );
}
