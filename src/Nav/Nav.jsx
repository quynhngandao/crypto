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
      <AppBar className="Nav" sx={{ backgroundColor: "#0B0D0E" }}>
        <Toolbar>
          <div className="VENDX" style={{}}>
            <div to="/vendx" className="nav-links">
              VENDX
            </div>
          </div>

          <div className="nav" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <div className="Intro intro">
              <NavLink
                to="/intro"
                className="nav-links"
                activeClassName="active-link"
              >
                INTRO
              </NavLink>
            </div>

            <div className="Roadmap roadmap" style={{}}>
              <NavLink
                to="/roadmap"
                className="nav-links"
                activeClassName="active-link"
              >
                ROADMAP
              </NavLink>
            </div>
            <div className="Gallery gallery" style={{}}>
              <NavLink
                to="/gallery"
                className="nav-links"
                activeClassName="active-link"
              >
                GALLERY
              </NavLink>
            </div>
            <div className="Faq faq" style={{}}>
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
