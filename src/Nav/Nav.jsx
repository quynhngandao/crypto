import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import styled from 'styled-components';

// Styled component for responsive navbar
const ResponsiveNav = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 1200px) {
    top: 5px;
    gap: 10px;
  }

  @media (max-width: 768px) {
    top: 2px;
    gap: 5px;
  }
`;

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#0B0D0E"}}
      >
        <Toolbar>
          <div
            className="VENDX"
            style={{
              top: "17px",
              left: "50px",
              marginLeft:"0%",
              position: "absolute",
              textAlign: "center",
              color: "#C2C2C2",
              fontSize: 16,
  
              fontWeight: 300,
              wordWrap: "break-word",
            }}
          >
            <Link to="/vendx" className="nav-links">
              VENDX
            </Link>
          </div>
          
          <div sx={{ minWidth: "100%", textAlign:"spaceEvenly" }}>
  <div
    className="Intro"
    style={{
      top: "17px",
      marginLeft: "calc(40% - 150px)", // Adjust the 110px value as needed
      position: "absolute",
      textAlign: "center",
      fontSize: 16,
      fontWeight: 300,
      wordWrap: "break-word",
    }}
  >
    <NavLink to="/intro" className="nav-links" activeClassName="active-link">
      INTRO
    </NavLink>
  </div>

  <div
    className="ROADMAP"
    style={{
      top: "17px",
      marginLeft: "calc(50% - 150px)", // Adjust the 110px value as needed
      position: "absolute",
      textAlign: "center",
      color: "#C2C2C2",
      fontSize: 16,

      fontWeight: 300,
      wordWrap: "break-word",
    }}
  >
    <NavLink to="/roadmap" className="nav-links" activeClassName="active-link">
      ROADMAP
    </NavLink>
  </div>
  <div
    className="Gallery"
    style={{
      top: "17px",
      marginLeft: "calc(60% - 150px)", // Adjust the 110px value as needed
      position: "absolute",
      textAlign: "center",
      color: "#C2C2C2",
      fontSize: 16,

      fontWeight: 300,
      wordWrap: "break-word",
    }}
  >
    <NavLink to="/gallery" className="nav-links" activeClassName="active-link">
      GALLERY
    </NavLink>
  </div>
  <div
    className="Faq"
    style={{
      top: "17px",
      marginLeft: "calc(70% - 150px)", // Adjust the 110px value as needed
      position: "absolute",

      textAlign: "center",
      color: "#C2C2C2",
      fontSize: 16,

      fontWeight: 300,
      wordWrap: "break-word",
    }}
  >
    <NavLink to="/faq" className="nav-links" activeClassName="active-link">
      FAQ
    </NavLink>
  </div>
</div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

