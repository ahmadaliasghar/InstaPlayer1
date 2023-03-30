import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./drawer.css";
import { FormattedMessage } from "react-intl";

const drawerWidth = 240;

export default function CustomDrawer(props) {
  //----------------------pages objects
  let pages = [
    {
      label: "Clubs",
      route: "/clubs",
    },
    {
      label: "Utilties",
      route: "/utilities",
    },
    {
      label: "Agenda",
      route: "/agenda",
    },
    {
      label: "Sponsors",
      route: "/sponsors",
    },
    {
      label: "Parameters",
      route: "/parameters",
    },
  ];
  const [title, settitle] = useState("Clubs");

  const handleLinkClick = (text) => {
    settitle(text);
    props.setIsUpdate(false);
  };
  
  const handleLanguageChange = (e) => {
    props.setlang(e.target.value);
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          height: `100px`,
          backgroundColor: "#0054A6ff",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
            paddingLeft: "5%",
            paddingRight: "1%",
            fontSize: "12px",
          }}
        >
          <div className="toolbar-left" style={{ display: "flex" }}>
            <HomeOutlinedIcon style={{ marginRight: "10px" }} />
            <span style={{ marginTop: "5px" }}> Account - {props.isUpdate.length > 0 ? props.isUpdate : title}</span>
          </div>
          <div className="toolbar-right">
            <Link to = "/" style={{ marginTop: "5px", color: "white" }}><FormattedMessage id='Logout'/></Link>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar
          style={{ paddingLeft: "30px", paddingTop: "30px", fontSize: "20px" }}
        >
          InstaPlayer 
          <select name="" id="" style={{marginLeft: "5px"}} onChange={handleLanguageChange}>
            <option value="en-US">ENGLISH</option>
            <option value="fr-ca">FRENCH</option>
          </select>
        </Toolbar>
        <List style={{ marginTop: "60px" }}>
          {pages.map((text, index) => (
            <ListItem
              key={index}
              disablePadding
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft:"18px",
                paddingBottom:"15px"
              }}
            >
                <Link
                  to={text.route}
                  className="links"
                  onClick={() => handleLinkClick(text.label)}
                  style={{ color: "black", fontSize: "14px" }}
                >
                  {text.label}
                </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
