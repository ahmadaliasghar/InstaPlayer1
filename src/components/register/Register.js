import * as React from "react";
import Box from "@mui/material/Box";
import "./register.css";
import { Button } from "@mui/material";

export default function HelperTextAligned(props) {
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
            <input type="text" placeholder="Ville" required />
            <input type="text" placeholder="Nom Dirigeant" required />
            <input type="text" placeholder="E-mail Dirigeant" required />
            <input type="text" placeholder="Telephone Dirigent" required />
            <input type="text" placeholder="Desactive" required />
          </div>
          <div className="field-right">
            <input type="text" placeholder="Identifiant" required />
            <input type="text" placeholder="Mot de passe" required />
            <input type="text" placeholder="Couler 1" required style={{marginTop:"45px"}} />
            <input type="text" placeholder="Couler 2" required />
            <input type="text" placeholder="Logo" required />
            <input type="text" placeholder="image1.png" required />
          </div>
        </Box>
        <Button
          variant="text"
          style={{
            textTransform: "capitalize",
            color: "black",
            marginTop: "60px",
            marginLeft: "30px",
          }}
        >
          Enregister
        </Button>
      </div>
    </>
  );
}
