import React from "react";

export default function Faq() {
  const textStyle = {
    position: "absolute",
    top: "200px",

    left: "197px",
    width: "904px",
    color: "#FAFF00",
    fontSize: "128px",
    fontWeight: "700",
    lineHeight: "150px",
    letterSpacing: "0em",
    textAlign: "left",
    wordWrap: "break-word",
  };

  const businessInfoStyle = {
    position: "absolute",
    top: "482px",
    left: "197px",
    width: "482px",
    height: "141px",
    color: "#EEEEE5",
    fontSize: "36px",
    fontWeight: 300,
    lineHeight: "47px",

    wordSpacing: "0.2em",
    textAlign: "left",
    wordWrap: "break-word",
  };

  const copyrightStyle = {
    position: "absolute",
    top: "-30px",
    left: "-25px",
    padding: "2px",
    borderRadius: "500px",
    fontSize: "23px",
    color: "#FAFF00",
  };

  const mintPriceContainerStyle = {
    height: "294px",
    top: "626px",
    left: "197px",
    padding: "0px 96px",
    borderRadius: "10px",
    border: "1px solid #454545",
    background: "#0B0D0E",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  };

  const mintPriceTextStyle = {
    color: "#454545",
    fontSize: "64px",
    fontWeight: "700",
    wordWrap: "break-word",
  };

  const rebirthContainerStyle = {
    height: "294px",
    top: "626px",
    left: "841px",
    padding: "0px 281px 0px 281px",
    borderRadius: "10px",
    border: "1px solid #454545",
    background: "#0B0D0E",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  };

  const rebirthTextStyle = {
    color: "#454545",
    fontSize: "64px",
    fontWeight: "700",
    wordWrap: "break-word",
  };

  const supplyContainerStyle = {
    top: "204px",
    left: "1010px",
    padding: "63px 185px 62px 185px",
    borderRadius: "10px",
    border: "1px solid #FAFF00",
    background: "#0B0D0E",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    overflow: "hidden",
    position: "absolute",
    letterSpacing: "0.1em",
    wordSpacing: "0.2em",
  };

  const supplyTextStyle = {
    color: "#EEEEE5",
    fontSize: "64px",

    fontWeight: "700",
    wordWrap: "break-word",
  };

  const cyborgsTextStyle = {
    textAlign: "center",
    color: "#FAFF00",
    fontSize: "36px",

    fontWeight: "300",
    wordWrap: "break-word",
  };

  return (
    <div className="Faq responsive">
    <div className="title" style={{ width: "100%" }}>
      <h1 style={textStyle}>
        <span style={copyrightStyle}>&copy;</span> {'// FAQ.'}
      </h1>
      <div className="paragraph" style={businessInfoStyle}>
        GOT QUESTIONS? WE GOT ANSWERS.
      </div>
      <div className="mint-price" style={mintPriceContainerStyle}>
        <div style={mintPriceTextStyle}>{'//MINT PRICE'}</div>
      </div>
      <div style={rebirthContainerStyle}>
        <div style={rebirthTextStyle}>{'//REBIRTH'}</div>
      </div>
      <div style={supplyContainerStyle}>
          <div style={supplyTextStyle}>{'//SUPPLY'}</div>
        <div style={cyborgsTextStyle}>
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

