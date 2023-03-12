import React from "react";
import Box from "@mui/material/Box";
import "./agenda.css";
import { Button } from "@mui/material";

const Agenda = (props) => {
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
          </div>
        </Box>
        <Button
          variant="text"
          style={{
            textTransform: "capitalize",
            color: "black",
            marginTop: "280px",
            marginLeft: "30px",
          }}
        >
          Enregister
        </Button>
      </div>
    </>
  );
};

export default Agenda;
