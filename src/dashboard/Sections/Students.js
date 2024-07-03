import React from "react";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import StudentDetails from "./Home/StudentDetails";
import Paper from "@mui/material/Paper";
import { Box, ThemeProvider } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import "react-data-grid/lib/styles.css";

import DataGrid from "react-data-grid";

const columns = [
  { key: "firstName", name: "First Name" },
  { key: "lastName", name: "Last Name" },
  { key: "physics", name: "Physics" },
  { key: "chemistry", name: "Chemistry" },
  { key: "maths", name: "Maths" },
  { key: "english", name: "English" },
  { key: "hindi", name: "Hindi" },
  { key: "physicalEducation", name: "Physical Education" },
  { key: "total", name: "Total" },
  { key: "percentage", name: "Percentage" },
];

const rows = [
  {
    firstName: "John",
    lastName: "Doe",
    physics: 80,
    chemistry: 90,
    maths: 70,
    english: 85,
    hindi: 75,
    physicalEducation: 90,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Rahul",
    lastName: "Sharma",
    physics: 85,
    chemistry: 95,
    maths: 75,
    english: 80,
    hindi: 70,
    physicalEducation: 85,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Raj",
    lastName: "Dubey",
    physics: 90,
    chemistry: 80,
    maths: 85,
    english: 75,
    hindi: 95,
    physicalEducation: 80,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Rohit",
    lastName: "Sharma",
    physics: 75,
    chemistry: 85,
    maths: 90,
    english: 95,
    hindi: 80,
    physicalEducation: 75,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Virat",
    lastName: "Kohli",
    physics: 70,
    chemistry: 75,
    maths: 95,
    english: 90,
    hindi: 85,
    physicalEducation: 70,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Sachin",
    lastName: "Tendulkar",
    physics: 95,
    chemistry: 70,
    maths: 80,
    english: 70,
    hindi: 90,
    physicalEducation: 95,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "MS",
    lastName: "Dhoni",
    physics: 80,
    chemistry: 90,
    maths: 70,
    english: 85,
    hindi: 75,
    physicalEducation: 90,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Sourav",
    lastName: "Ganguly",
    physics: 85,
    chemistry: 95,
    maths: 75,
    english: 80,
    hindi: 70,
    physicalEducation: 85,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Virender",
    lastName: "Sehwag",
    physics: 90,
    chemistry: 80,
    maths: 85,
    english: 75,
    hindi: 95,
    physicalEducation: 80,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Yuvraj",
    lastName: "Singh",
    physics: 75,
    chemistry: 85,
    maths: 90,
    english: 95,
    hindi: 80,
    physicalEducation: 75,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Harbhajan",
    lastName: "Singh",
    physics: 70,
    chemistry: 75,
    maths: 95,
    english: 90,
    hindi: 85,
    physicalEducation: 70,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Zaheer",
    lastName: "Khan",
    physics: 95,
    chemistry: 70,
    maths: 80,
    english: 70,
    hindi: 90,
    physicalEducation: 95,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Irfan",
    lastName: "Pathan",
    physics: 80,
    chemistry: 90,
    maths: 70,
    english: 85,
    hindi: 75,
    physicalEducation: 90,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Gautam",
    lastName: "Gambhir",
    physics: 85,
    chemistry: 95,
    maths: 75,
    english: 80,
    hindi: 70,
    physicalEducation: 85,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Ravindra",
    lastName: "Jadeja",
    physics: 90,
    chemistry: 80,
    maths: 85,
    english: 75,
    hindi: 95,
    physicalEducation: 80,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Ravichandran",
    lastName: "Ashwin",
    physics: 75,
    chemistry: 85,
    maths: 90,
    english: 95,
    hindi: 80,
    physicalEducation: 75,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Mohammed",
    lastName: "Shami",
    physics: 70,
    chemistry: 75,
    maths: 95,
    english: 90,
    hindi: 85,
    physicalEducation: 70,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Jasprit",
    lastName: "Bumrah",
    physics: 95,
    chemistry: 70,
    maths: 80,
    english: 70,
    hindi: 90,
    physicalEducation: 95,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Bhuvneshwar",
    lastName: "Kumar",
    physics: 80,
    chemistry: 90,
    maths: 70,
    english: 85,
    hindi: 75,
    physicalEducation: 90,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Hardik",
    lastName: "Pandya",
    physics: 85,
    chemistry: 95,
    maths: 75,
    english: 80,
    hindi: 70,
    physicalEducation: 85,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Shikhar",
    lastName: "Dhawan",
    physics: 90,
    chemistry: 80,
    maths: 85,
    english: 75,
    hindi: 95,
    physicalEducation: 80,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Rishabh",
    lastName: "Pant",
    physics: 75,
    chemistry: 85,
    maths: 90,
    english: 95,
    hindi: 80,
    physicalEducation: 75,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "KL",
    lastName: "Rahul",
    physics: 70,
    chemistry: 75,
    maths: 95,
    english: 90,
    hindi: 85,
    physicalEducation: 70,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Axar",
    lastName: "Patel",
    physics: 95,
    chemistry: 70,
    maths: 80,
    english: 70,
    hindi: 90,
    physicalEducation: 95,
    total: 580,
    percentage: 72.5,
  },
  {
    firstName: "Shardul",
    lastName: "Thakur",
    physics: 80,
    chemistry: 90,
    maths: 70,
    english: 85,
    hindi: 75,
    physicalEducation: 90,
    total: 580,
    percentage: 72.5,
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const batchNames = [
  "Class 1 A",
  "Class 1 B",
  "Class 2 A",
  "Class 2 B",
  "Class 3 A",
  "Class 3 B",
  "Class 4 A",
  "Class 4 B",
  "Class 5 A",
  "Class 5 B",
  "Class 6 A",
  "Class 6 B",
  "Class 7 A",
  "Class 7 B",
  "Class 8 A",
  "Class 8 B",
  "Class 9 A",
  "Class 9 B",
  "Class 10 A",
  "Class 10 B",
];

const Students = () => {
  // Your component logic goes here
  const [batchName, setBatchName] = React.useState([]);

  const handleChangeBatch = (event) => {
    const {
      target: { value },
    } = event;
    setBatchName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            // height: 240,
          }}
        >
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div>
                  <div style={{ fontSize: "22px", fontWeight: "700" }}>
                    Students
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "100" }}>
                    Add Students
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Button
                    style={{
                      marginLeft: "16px",
                      border: "0px solid #172941",
                      color: "#172941",
                      textDecoration: "underline",
                    }}
                    variant="outlined"
                    component="label"
                  >
                    Download Samle CSV
                  </Button>
                </div>

                <Divider style={{ marginBottom: "18px" }} />

                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <div>
                      {" "}
                      <FormControl sx={{ m: 1, width: 300 }} size="small">
                        <InputLabel id="demo-multiple-checkbox-label">
                          Batch
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          value={batchName}
                          onChange={handleChangeBatch}
                          input={<OutlinedInput label="Batch" />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                        >
                          {batchNames.map((name) => (
                            <MenuItem key={name} value={name}>
                              <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                </Grid>
                <div style={{ marginTop: "16px" }}>
                  <FormControl sx={{ m: 1 }}>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ background: "#4caf50" }}
                    >
                      Upload File
                      <input type="file" hidden />
                    </Button>
                  </FormControl>
                </div>
              </Grid>
            </Grid>
            {/* <DataGrid
              style={{ marginTop: "16px" }}
              columns={columns}
              rows={rows}
            /> */}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Students;
