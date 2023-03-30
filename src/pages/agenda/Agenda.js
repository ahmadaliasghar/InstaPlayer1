import React from "react";
import Box from "@mui/material/Box";
import "./agenda.css";
import { Button } from "@mui/material";
import { FormattedMessage } from "react-intl";

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
            <FormattedMessage id="Name">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required />
              )}
            </FormattedMessage>

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
          <FormattedMessage id="Register" />
        </Button>
      </div>
    </>
  );
};

export default Agenda;
