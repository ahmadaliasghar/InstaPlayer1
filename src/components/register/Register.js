import * as React from "react";
import Box from "@mui/material/Box";
import "./register.css";
import { Button } from "@mui/material";
import { FormattedMessage } from "react-intl";

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
            <FormattedMessage id="Name">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required />
              )}
            </FormattedMessage>
            <FormattedMessage id="City">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required />
              )}
            </FormattedMessage>
            <FormattedMessage id="Leader name">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required />
              )}
            </FormattedMessage>
            <FormattedMessage id="Leader e-mail">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required />
              )}
            </FormattedMessage>
            <FormattedMessage id="Leader Telephone">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required />
              )}
            </FormattedMessage>
            <FormattedMessage id="Disabled">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required />
              )}
            </FormattedMessage>
          </div>
          <div className="field-right">
          <FormattedMessage id="ID">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required />
              )}
            </FormattedMessage>
            <FormattedMessage id="Password">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required />
              )}
            </FormattedMessage>
            <FormattedMessage id="Address 1">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required style={{marginTop:"45px"}}/>
              )}
            </FormattedMessage>
            <FormattedMessage id="Address 2">
              {(placeholder) => (
                <input type="text" placeholder={placeholder} required />
              )}
            </FormattedMessage>
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
          <FormattedMessage id='Register'/>
        </Button>
      </div>
    </>
  );
}
