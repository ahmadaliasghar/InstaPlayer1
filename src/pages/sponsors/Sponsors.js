import React from "react";
import Box from "@mui/material/Box";
import "./sponsors.css";
const Sponsors = (props) => {
  return (
    <>
      <div className="table-container">
        <div className="header">{props.headerValue}</div>
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": { m: 0 },
            pl: 2,
          }}
        >
          <div className="field-left">
            <input type="text" placeholder="Nom" required />
            <input type="text" placeholder="Description" required />
            <input type="text" placeholder="Logo" required />
          </div>
        </Box>
      </div>
    </>
  );
};

export default Sponsors;
