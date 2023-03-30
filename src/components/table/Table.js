import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function createData(nom, reference, ville, status, detail) {
  return { nom, reference, ville, status, detail };
}

const rows = [
  createData("TCA", "00001", "Toulose", "Desactive", "Detail/Modifier"),
  createData("ATC", "00002", "Toulose", "Active", "Detail/Modifier"),
  createData("TCT", "00003", "Albi", "Desactive", "Detail/Modifier"),
];

export default function BasicTable(props) {
  return (
    <>
      <TableContainer component={Paper} className="" style={{paddingTop:"20px"}} >
        <div
          className="header"
          style={{ width: `calc(100% - ${250}px)`, ml: `${250}px`, mt:"20px"}}
        >
          {props.headerValue}
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#F1F3F9ff", color: "grey" }}>
              <TableCell align="left"><FormattedMessage id='Name' /></TableCell>
              <TableCell align="left">Reference</TableCell>
              <TableCell align="left"><FormattedMessage id='City' />&nbsp;</TableCell>
              <TableCell align="left">Status&nbsp;</TableCell>
              <TableCell align="left">Detail/Modifier&nbsp;</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ minWidth: 650, width: 800 }}>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ height: "70px", width: "100px" }}
                >
                  <strong>{row.nom}</strong>
                </TableCell>
                <TableCell
                  align="left"
                  style={{ height: "70px", width: "100px" }}
                >
                  <strong>{row.reference}</strong>
                </TableCell>
                <TableCell
                  align="left"
                  style={{ height: "70px", width: "200px" }}
                >
                  <strong>{row.ville}</strong>
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    display: "flex",
                    height: "70px",
                    alignItems: "center",
                  }}
                >
                  {row.status === "Active" ? (
                    <div className="status-deactive"></div>
                  ) : (
                    <div className="status-active"></div>
                  )}
                  <FormattedMessage id={row.status}/>
                </TableCell>
                <TableCell align="left" style={{ height: "70px" }} onClick={()=> props.setIsUpdate(true)}>
                 <Link to="/clubs/details" className="detail-link">{row.detail}</Link>
                </TableCell>
                <TableCell align="left" style={{ height: "70px",width:"250px" }}>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
