import React from "react";
import "./Roadmap.css";

export default function Roadmap() {

  const copyrightStyle = {
    position: "absolute",
    top: "15%", // Relative position from top
    left: "-5%", // Relative position from left
    padding: "2px",
    borderRadius: "500px",
    fontSize: "2vw",
    color: "#FAFF00",
  };

  return (
    <div className="ROADMAP responsive">
      <div className="title">
        <h1 className="roadmap-title">
          {" "}
          <span style={copyrightStyle}>&copy;</span> {"//VENMAP"}
        </h1>
        <div className="roadmap-paragraph" >
          OUR BUSINESSS MODEL CONSISTS OF
          <br /> THREE DIFFERENT BRANCHES.
        </div>
        {/* MACHINES */}
        <div
          className="vendingMachineContainer"
          style={{  left: "10%" }}
        >
          <img
            className="vendingMachineImage"
            src="/IMG-1.png"
            alt="Vending Machine"
          />
          <div className="vendingMachineHeading">Vending</div>
          <div className="vendingMachineSubheading">MACHINES</div>
        </div>
        <div
          className="vendingMachineContainer"
          style={{ marginLeft: "22%" }}
        >
          <img
            className="vendingMachineImage"
            src="/IMG-2.png"
            alt="Vending Machine"
          />
          <div className="vendingMachineHeading">Affiliate</div>
          <div className="vendingMachineSubheading">PARTNERSHIPS</div>
        </div>
        <div
          className="vendingMachineContainer"
          style={{  marginLeft: "34%" }}
        >
          <img
            className="vendingMachineImage"
            src="/IMG-3.png"
            alt="Vending Machine"
          />
          <div className="vendingMachineHeading">Advertising</div>
          <div className="vendingMachineSubheading">MARKETING</div>
        </div>
      {/* VENDING TEXT */}
      <div style={{textAlign:"center"}}>
<div className="percentageText ten">
  10%
</div>
<div className="percentageSubtext team" >
  TEAM
</div>

<div className="percentageText forty">
  40%
</div>
<div className="percentageSubtext holders" >
  HOLDERS
</div>

<div className="percentageText fifty" >
  50%
</div>
<div className="percentageSubtext expansion">
  EXPANSION
</div>
</div>

        {/* VENDING IMAGE */}
        <div className="vendingContainer" style={{ top: "15%", left: "60%" }}>
          <img className="vendingImage" src="/vending.png" alt="New Item" />
        </div>

        {/* arrow */}
        <div style={{ position: "absolute", top: "90%", left: "50%" }}>
          <svg
            width="27"
            height="40"
            viewBox="0 0 27 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 26L13.5 38.5L26 26"
              stroke="#FAFF00"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 13.5L13.5 26L26 13.5"
              stroke="#FAFF00"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L13.5 13.5L26 1"
              stroke="#FAFF00"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/* CIRCLE */}
        <div style={{ position: "absolute", top: "35%", left: "95%" }}>
          <svg
            width="23"
            height="188"
            viewBox="0 0 23 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="55" width="23" height="23" rx="11.5" fill="#FAFF00" />
            <rect
              x="4.5"
              y="59.5"
              width="14"
              height="14"
              rx="7"
              fill="#FAFF00"
            />
            <rect
              x="4.5"
              y="59.5"
              width="14"
              height="14"
              rx="7"
              stroke="#0B0D0E"
              stroke-width="3"
            />
            <rect
              x="0.5"
              y="0.5"
              width="22"
              height="22"
              rx="11"
              fill="#0B0D0E"
            />
            <rect
              x="0.5"
              y="0.5"
              width="22"
              height="22"
              rx="11"
              stroke="#FAFF00"
            />
            <rect
              x="0.5"
              y="110.5"
              width="22"
              height="22"
              rx="11"
              fill="#0B0D0E"
            />
            <rect
              x="0.5"
              y="110.5"
              width="22"
              height="22"
              rx="11"
              stroke="#FAFF00"
            />
            <rect
              x="0.5"
              y="155.5"
              width="22"
              height="22"
              rx="11"
              fill="#0B0D0E"
            />
            <rect
              x="0.5"
              y="155.5"
              width="22"
              height="22"
              rx="11"
              stroke="#FAFF00"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
