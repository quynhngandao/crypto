import React from "react";
import '../pages/Faq.css'

export default function Faq() {

  const copyrightStyle = {
    position: "absolute",
    top: "15%", // Relative position from top
    left: "-10%", // Relative position from left
    padding: "2px",
    borderRadius: "500px",
    fontSize: "2vw",
    color: "#FAFF00",
  };



  return (
    <div className="Faq responsive">
    <div className="title" >
      <h1 className="faq-title">
        <span style={copyrightStyle}>&copy;</span> {'// FAQ.'}
      </h1>
      <div className="faq-paragraph">
        GOT QUESTIONS? WE GOT <br/> ANSWERS.
      </div>
      <div className="mintPriceContainer">
        <div className="mintPriceText">{'//MINT PRICE'}</div>
      </div>
      <div className="rebirthContainerStyle">
        <div className="rebirthTextStyle">{'//REBIRTH'}</div>
      </div>
      <div className="supplyContainerStyle">
          <div className="supplyTextStyle">{'//SUPPLY'}</div>
        <div className="cyborgsTextStyle">
          9999 CYBORGS
          <br />
          630 OG-CYBORGS
          <br />
          70 XX-CYBORGS
        </div>
      </div>
      {/* CIRCLE */}
      <div style={{ position: "absolute", top: "35%", left: "95%" }}>
      <svg width="23" height="188" viewBox="0 0 23 188" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="165" width="23" height="23" rx="11.5" fill="#FAFF00"/>
<rect x="4.5" y="169.5" width="14" height="14" rx="7" fill="#FAFF00"/>
<rect x="4.5" y="169.5" width="14" height="14" rx="7" stroke="#0B0D0E" stroke-width="3"/>
<rect x="0.5" y="0.5" width="22" height="22" rx="11" fill="#0B0D0E"/>
<rect x="0.5" y="0.5" width="22" height="22" rx="11" stroke="#FAFF00"/>
<rect x="0.5" y="55.5" width="22" height="22" rx="11" fill="#0B0D0E"/>
<rect x="0.5" y="55.5" width="22" height="22" rx="11" stroke="#FAFF00"/>
<rect x="0.5" y="110.5" width="22" height="22" rx="11" fill="#0B0D0E"/>
<rect x="0.5" y="110.5" width="22" height="22" rx="11" stroke="#FAFF00"/>
</svg>
</div>
    </div>
    </div>
  );
}

