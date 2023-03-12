import React from "react";
import Box from "@mui/material/Box";
import "./parameters.css";
import { Button } from "@mui/material";

const Parameters = (props) => {
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
            <input type="text" placeholder="Import Clubs" required />
            <input type="text" placeholder="Import Joeuers" required />
            <input type="text" placeholder="Export Clubs" required />
            <input type="text" placeholder="Export Joeuers" required />
          </div>
        </Box>
      </div>
    </>
  );
};

export default Parameters;
