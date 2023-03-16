import React from "react";
import Box from "@mui/material/Box";
import Table from "./../../components/table/Table.js";

const Clubs = (props) => {
  return (
    <Box
      style={{
        borderRadius: "15px",
        boxShadow:
          "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
        height: "515px",
        marginTop: "120px",
        overflow:"hidden"
      }}
    >
      <Table headerValue="Clubs" setIsUpdate = {props.setIsUpdate } />
    </Box>
  );
};

export default Clubs;
