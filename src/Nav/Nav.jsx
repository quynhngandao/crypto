import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="Nav"
        sx={{ backgroundColor: "#0B0D0E" }}
      >
        <Toolbar>
          <div
            className="VENDX"
            style={{
              top: "17px",
              left: "50px",
              marginLeft: "0%",
              position: "absolute",
              textAlign: "center",
              color: "#C2C2C2",
              fontSize: 16,
              fontWeight: 300,
            }}
          >
            <div to="/vendx" className="nav-links">
              VENDX
            </div>
          </div>

          <div sx={{ minWidth: "100%", textAlign: "spaceEvenly" }}>
            <div
              className="Intro"
              style={{
                top: "17px",
                marginLeft: "30vw", // Adjust the 110px value as needed
                position: "absolute",
                textAlign: "center",
                fontSize: 16,
                fontWeight: 300,
              }}
            >
              <NavLink
                to="/intro"
                className="nav-links"
                activeClassName="active-link"
              >
                INTRO
              </NavLink>
            </div>

            <div
              className="Roadmap"
              style={{
                top: "17px",
                marginLeft: "40vw", // Adjust the 110px value as needed
                position: "absolute",
                textAlign: "center",
                color: "#C2C2C2",
                fontSize: 16,
                fontWeight: 300,

              }}
            >
              <NavLink
                to="/roadmap"
                className="nav-links"
                activeClassName="active-link"
              >
                ROADMAP
              </NavLink>
            </div>
            <div
              className="Gallery"
              style={{
                top: "17px",
                marginLeft: "50vw", // Adjust the 110px value as needed
                position: "absolute",
                textAlign: "center",
                color: "#C2C2C2",
                fontSize: 16,
                fontWeight: 300,
    
              }}
            >
              <NavLink
                to="/gallery"
                className="nav-links"
                activeClassName="active-link"
              >
                GALLERY
              </NavLink>
            </div>
            <div
              className="Faq"
              style={{
                top: "17px",
                marginLeft: "60vw", // Adjust the 110px value as needed
                position: "absolute",
                textAlign: "center",
                color: "#C2C2C2",
                fontSize: 16,
                fontWeight: 300,
             
              }}
            >
              <NavLink
                to="/faq"
                className="nav-links"
                activeClassName="active-link"
              >
                FAQ
              </NavLink>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
