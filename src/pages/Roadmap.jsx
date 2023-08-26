import React from "react";

export default function Roadmap() {
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
    top: "37%", // Relative position from top
    left: "10%", // Relative position from left
    width: "70%", // Relative width
    height: "141px",
    color: "#EEEEE5",
    fontSize: "2vw", // Relative font size
    fontWeight: 300,
    textAlign: "left",
    wordWrap: "break-word",
  };

  const copyrightStyle = {
    position: "absolute",
    top: "17%", // Relative position from top
    left: "-2%", // Relative position from left
    padding: "2px",
    borderRadius: "500px",
    fontSize: "23px",
    color: "#FAFF00",
  };

  const vendingMachineContainerStyle1 = {
    width: 206,
    height: 272,
    top: "50%",
    left: "10%",
    position: "absolute",
    borderRadius: 10,
    border: "1px solid #454545",
    overflow: "hidden",
    background: "#0B0D0E",
  };
  const vendingMachineImageStyle1 = {
    width: 180,
    height: 180.96,
    left: 13,
    top: 16,
    position: "absolute",
  };
  const vendingMachineHeadingStyle1 = {
    left: 65,
    top: 195,
    position: "absolute",
    textAlign: "center",
    color: "#C2C2C2",
    fontSize: 20,
    fontWeight: "700",
    wordWrap: "break-word",
  };
  const vendingMachineSubheadingStyle1 = {
    left: 67,
    top: 222,
    position: "absolute",
    textAlign: "center",
    color: "#FAFF00",
    fontSize: 14,
    fontWeight: "400",
    wordWrap: "break-word",
  };

  const vendingMachineContainerStyle2 = {
    width: 207,
    height: 272,
    top: "50%",
    marginLeft: "27%",
    position: "absolute",
    borderRadius: 10,
    border: "1px solid #454545",
    overflow: "hidden",
    background: "#0B0D0E",
  };
  const vendingMachineImageStyle2 = {
    width: 180,
    height: 180.96,
    left: 13,
    top: 16,
    position: "absolute",
  };
  const vendingMachineHeadingStyle2 = {
    left: 65,
    top: 195,
    position: "absolute",
    textAlign: "center",
    color: "#C2C2C2",
    fontSize: 20,
    fontWeight: "700",
    wordWrap: "break-word",
  };
  const vendingMachineSubheadingStyle2 = {
    left: 67,
    top: 222,
    position: "absolute",
    textAlign: "center",
    color: "#FAFF00",
    fontSize: 14,
    fontWeight: "400",
    wordWrap: "break-word",
  };

  const vendingMachineContainerStyle3 = {
    width: 206,
    height: 272,
    top: "50%",
    marginLeft: "44%",
    position: "absolute",
    borderRadius: 10,
    border: "1px solid #454545",
    overflow: "hidden",
    background: "#0B0D0E",
  };
  const vendingMachineImageStyle3 = {
    width: 180,
    height: 180.96,
    left: 13,
    top: 16,
    position: "absolute",
  };
  const vendingMachineHeadingStyle3 = {
    left: 65,
    top: 195,
    position: "absolute",
    textAlign: "center",
    color: "#C2C2C2",
    fontSize: 20,
    fontWeight: "700",
    wordWrap: "break-word",
  };
  const vendingMachineSubheadingStyle3 = {
    left: 67,
    top: 222,
    position: "absolute",
    textAlign: "center",
    color: "#FAFF00",
    fontSize: 14,
    fontWeight: "400",
    wordWrap: "break-word",
  };

  const percentageTextStyle1 = {
    textAlign: "center",
    color: "#C2C2C2",
    width: "38px",
    height: "23px",
    fontWeight: "700",
    top: "15%",
    left: "65%",
    position: "absolute",
  };
  const percentageSubtextStyle1 = {
    textAlign: "center",
    color: "#FAFF00",
    width: "34px",
    height: "18px",
    fontWeight: "400",
    top: "18%",
    left: "65%",
    position: "absolute",
  };
  
  const percentageTextStyle2 = {
    textAlign: "center",
    color: "#C2C2C2",
    width: "38px",
    height: "23px",
    fontWeight: "700",
    top: "32%",
    left: "65%",
    position: "absolute",
  };
  const percentageSubtextStyle2 = {
    textAlign: "center",
    color: "#FAFF00",
    width: "34px",
    height: "18px",
    fontWeight: "400",
    top: "35%",
    left: "64%",
    position: "absolute",
  };

  const percentageTextStyle3 = {
    textAlign: "center",
    color: "#C2C2C2",
    width: "38px",
    height: "23px",
    fontWeight: "700",
    top: "63%",
    left: "65%",
    position: "absolute",
  };
  const percentageSubtextStyle3 = {
    textAlign: "center",
    color: "#FAFF00",
    width: "34px",
    height: "18px",
    fontWeight: "400",
    top: "66%",
    left: "63%",
    position: "absolute",
  };

  const vendingContainerStyle = {
    width: 306,
    height: 528,
    top: "10%",
    marginLeft: "70%",
    position: "absolute",
    borderRadius: 10,
    overflow: "hidden",
    background: "#0B0D0E",
  };
  const vendingImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    left: 0,
    top: 0,
  };

  return (
    <div className="ROADMAP responsive">
    <div className="title" style={{ width: "100%" }}>
      <h1 style={textStyle}>
        {" "}
        <span style={copyrightStyle}>&copy;</span> {"//VENMAP"}
      </h1>
      <div className="paragraph" style={businessInfoStyle}>
        OUR BUSINESSS MODEL CONSISTS OF 
        <br/> THREE DIFFERENT BRANCHES.
      </div>
      <div style={vendingMachineContainerStyle1}>
        <img
          style={vendingMachineImageStyle1}
          src="/IMG-1.png"
          alt="Vending Machine"
        />
        <div style={vendingMachineHeadingStyle1}>Vending</div>
        <div style={vendingMachineSubheadingStyle1}>MACHINES</div>
      </div>
      <div style={vendingMachineContainerStyle2}>
        <img
          style={vendingMachineImageStyle2}
          src="/IMG-2.png"
          alt="Vending Machine"
        />
        <div style={vendingMachineHeadingStyle2}>Affiliate</div>
        <div style={vendingMachineSubheadingStyle2}>PARTNERSHIPS</div>
      </div>
      <div style={vendingMachineContainerStyle3}>
        <img
          style={vendingMachineImageStyle3}
          src="/IMG-3.png"
          alt="Vending Machine"
        />
        <div style={vendingMachineHeadingStyle3}>Advertising</div>
        <div style={vendingMachineSubheadingStyle3}>MARKETING</div>
      </div>
      {/* TEXT */}

      <div>
        <div style={percentageTextStyle1}>10%</div>
        <div style={percentageSubtextStyle1}>TEAM</div>

        <div style={percentageTextStyle2}>40%</div>
        <div style={percentageSubtextStyle2}>HOLDERS</div>

        <div style={percentageTextStyle3}>50%</div>
        <div style={percentageSubtextStyle3}>EXPANSION</div>
      </div>
      {/* Vending */}
      <div style={vendingContainerStyle}>
        <img style={vendingImageStyle} src="/vending.png" alt="New Item" />
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
<rect y="55" width="23" height="23" rx="11.5" fill="#FAFF00"/>
<rect x="4.5" y="59.5" width="14" height="14" rx="7" fill="#FAFF00"/>
<rect x="4.5" y="59.5" width="14" height="14" rx="7" stroke="#0B0D0E" stroke-width="3"/>
<rect x="0.5" y="0.5" width="22" height="22" rx="11" fill="#0B0D0E"/>
<rect x="0.5" y="0.5" width="22" height="22" rx="11" stroke="#FAFF00"/>
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

