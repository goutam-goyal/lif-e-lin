import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import "./accept.scss";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import CancelPresentationFilledIcon from "@mui/icons-material/CancelPresentationTwoTone";
import Button from "@mui/material/Button";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Header from "../Header";
import { fetchHospitals } from "../../services/index";

const Input = styled("input")({
  display: "none",
});

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, age, prescription, bloodgroup, acceptreject) {
  return { name, age, prescription, bloodgroup, acceptreject };
}

const rows = [
  createData(
    "Fortis",
    56,
    <div>
      <label htmlFor="contained-button-file1">
        <Input id="contained-button-file1" multiple type="file" />
        <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
      </label>
    </div>,
    "B+",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ fill: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    65,
    <div>
      <label htmlFor="contained-button-file2">
        <Input id="contained-button-file2" multiple type="file" />
        <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
      </label>
    </div>,
    "O-",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ fill: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    80,
    <div>
      <label htmlFor="contained-button-file3">
        <Input id="contained-button-file3" multiple type="file" />
        <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
      </label>
    </div>,
    "AB+",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ fill: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    28,
    <div>
      <label htmlFor="contained-button-file4">
        <Input id="contained-button-file4" multiple type="file" />
        <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
      </label>
    </div>,
    "A+",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ fill: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    25,
    <div>
      <label htmlFor="contained-button-file5">
        <Input id="contained-button-file5" multiple type="file" />
        <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
      </label>
    </div>,
    "O+",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ fill: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
];

export default function BasicTable() {
  const [hospitals, setHospitals] = useState([]); // Initialized with an empty array

  /**
   * Used to apply any side effects like API calls.
   */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hospitalList = await fetchHospitals();
        console.log("Hospital List:", hospitalList);
        setHospitals(hospitalList);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-grey full-height">
      <Header />
      <div className="acpt">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Hospital Name</StyledTableCell>
                <StyledTableCell align="center">Donor Age</StyledTableCell>
                <StyledTableCell align="center">Blood Group</StyledTableCell>
                <StyledTableCell align="center">Accept/Reject</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody class="bg">
              {hospitals.map((hospital) => (
                <StyledTableRow key={hospital.name}>
                  <StyledTableCell component="th" scope="row">
                    {hospital.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {hospital.age}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {hospital.bloodgroup}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div>
                      <Button className="accept">
                        <CheckBoxRoundedIcon style={{ fill: "#08E72B" }} />
                      </Button>
                      <Button className="reject">
                        <CancelPresentationFilledIcon
                          style={{ fill: "#B11005" }}
                        />
                      </Button>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
