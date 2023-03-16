import React from "react";
import Box from "@mui/material/Box";
import Register from "./../../components/register/Register.js";

const Utilities = ({props})  => {
  return (
    <Box>
      <Register headerValue="00001" data={props} />
    </Box>
  );
};

export default Utilities;
