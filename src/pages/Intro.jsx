import React from "react";
import styled from 'styled-components';

const ResponsiveIntro = styled.div`
  position: absolute;
  top: "15%", // Relative position from top
  left: "10%", // Relative position from left
  width: "80%", // Relative width
  font-size: 24px;

  @media (max-width: 768px) {
    top: 30px;
    font-size: 18px;
  }
`;

function Intro() {
  const textStyle = {
    position: "absolute",
    top: "10%", // Relative position from top
    left: "10%", // Relative position from left
    width: "70%", // Relative width
    color: "#FAFF00",
    fontSize: "7vw", // Relative font size
    fontWeight: "700",
    letterSpacing: "0em",
    textAlign: "left",
    wordWrap: "break-word",
  };

  const businessInfoStyle = {
    position: "absolute",
    top: "55%", // Relative position from top
    left: "10%", // Relative position from left
    width: "70%", // Relative width
    height: "141px",
    color: "#EEEEE5",
    fontSize: "2vw", // Relative font size
    fontWeight: 300,
    lineHeight: "47px",
    textAlign: "left",
    wordWrap: "break-word",
  };

  const copyrightStyle = {
    position: "absolute",
    top: "10%", // Relative position from top
    left: "-2%", // Relative position from left
    padding: "2px",
    borderRadius: "500px",
    fontSize: "23px",
    color: "#FAFF00",
  };

  return (
    <div className="Intro responsive">
    <div className="title" style={{ width: "100%" }}>
      <h1 style={textStyle}>
        {" "}
        <span style={copyrightStyle}>&copy;</span> //A NEW ERA <br/> BEGINS.
      </h1>
      <div className="paragraph" style={businessInfoStyle}>
        VENDX IS THE FIRST OFFICIAL LICENSED SOLANA BASED VENDING & ARCADE
        BUSINESS, AND WE AIM TO EXPAND ACROSS GERMANY AND NEIGHBORING COUNTRIES.
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
<rect y="0" width="23" height="23" rx="11.5" fill="#FAFF00"/>
<rect x="4.5" y="4.5" width="14" height="14" rx="7" fill="#FAFF00"/>
<rect x="4.5" y="4.5" width="14" height="14" rx="7" stroke="#0B0D0E" stroke-width="3"/>
<rect x="0.5" y="55.5" width="22" height="22" rx="11" fill="#0B0D0E"/>
<rect x="0.5" y="55.5" width="22" height="22" rx="11" stroke="#FAFF00"/>
<rect x="0.5" y="110.5" width="22" height="22" rx="11" fill="#0B0D0E"/>
<rect x="0.5" y="110.5" width="22" height="22" rx="11" stroke="#FAFF00"/>
<rect x="0.5" y="165.5" width="22" height="22" rx="11" fill="#0B0D0E"/>
<rect x="0.5" y="165.5" width="22" height="22" rx="11" stroke="#FAFF00"/>
</svg>
</div>
    </div>
    </div>
  );
}

export default Intro;

