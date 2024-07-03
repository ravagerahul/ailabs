import React from "react";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import StudentDetails from "./Home/StudentDetails";
import Paper from "@mui/material/Paper";
import { Box, ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

import "react-data-grid/lib/styles.css";

import DataGrid from "react-data-grid";

const columns = [
  { key: "standard", name: "Standard" },
  { key: "batch", name: "Batch" },
  { key: "code", name: "Code" },
  { key: "studentCount", name: "Student Count" },
  { key: "active", name: "Active" },
];

const rows = [
  {
    standard: "Class 1",
    batch: "A",
    code: "C1A",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 1",
    batch: "B",
    code: "C1B",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 2",
    batch: "A",
    code: "C2A",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 2",
    batch: "B",
    code: "C2B",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 3",
    batch: "A",
    code: "C3A",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 3",
    batch: "B",
    code: "C3B",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 4",
    batch: "A",
    code: "C4A",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 4",
    batch: "B",
    code: "C4B",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 5",
    batch: "A",
    code: "C5A",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 5",
    batch: "B",
    code: "C5B",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 6",
    batch: "A",
    code: "C6A",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 6",
    batch: "B",
    code: "C6B",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 7",
    batch: "A",
    code: "C7A",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 7",
    batch: "B",
    code: "C7B",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 8",
    batch: "A",
    code: "C8A",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 8",
    batch: "B",
    code: "C8B",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 9",
    batch: "A",
    code: "C9A",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 9",
    batch: "B",
    code: "C9B",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 10",
    batch: "A",
    code: "C10A",
    studentCount: 30,
    active: "Yes",
  },
  {
    standard: "Class 10",
    batch: "B",
    code: "C10B",
    studentCount: 30,
    active: "Yes",
  },
];

const Batches = () => {
  // Your code here

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
                {" "}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div style={{ fontSize: "22px", fontWeight: "700" }}>
                      Batches
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: "100" }}>
                      Add Batch
                    </div>
                  </div>
                  <div>
                    <Button
                      style={{ marginLeft: "16px", background: "#4caf50" }}
                      variant="contained"
                      color="primary"
                    >
                      <AddIcon />
                    </Button>
                  </div>
                </div>
                <Divider style={{ marginTop: "18px", marginBottom: "18px" }} />
                <Grid container spacing={3}></Grid>
              </Grid>
            </Grid>
            <DataGrid
              style={{ marginTop: "16px" }}
              columns={columns}
              rows={rows}
            />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Batches;
