import React from "react";
import Box from "@mui/material/Box";
import "./parameters.css";
import { FormattedMessage } from "react-intl";

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
            <FormattedMessage id="Import Players">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required />
              )}
            </FormattedMessage>
            <input type="text" placeholder="Export Clubs" required />
            <FormattedMessage id="Export Players">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required />
              )}
            </FormattedMessage>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Parameters;
