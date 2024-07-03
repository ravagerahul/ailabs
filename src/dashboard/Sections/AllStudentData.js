import React from "react";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import StudentDetails from "./Home/StudentDetails";
import Paper from "@mui/material/Paper";
import { Box, ThemeProvider } from "@mui/material";
import AllStudentsDataGrid from "./AllStudentsData/AllStudentsDataGrid";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AllStudentsData = () => {
  // Your code here
  const [batch, setBatch] = React.useState("");

  const handleChange = (event) => {
    setBatch(event.target.value);
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    {" "}
                    <div style={{ fontSize: "22px", fontWeight: "700" }}>
                      Students
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: "100" }}>
                      All Students data
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div style={{ marginTop: "8px" }}>
                      <TextField
                        id="outlined-basic"
                        label="Search Roll No. / Name"
                        variant="outlined"
                        style={{ minWidth: "300px" }}
                        size="small"
                      />

                      <FormControl
                        style={{ minWidth: "300px", marginLeft: "16px" }}
                        size="small"
                      >
                        <InputLabel id="demo-simple-select-label">
                          Batch
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={batch}
                          label="Batch"
                          onChange={handleChange}
                        >
                          <MenuItem value={"1 A"}>1 A</MenuItem>
                          <MenuItem value={"1 B"}>1 B</MenuItem>
                          <MenuItem value={"2 A"}>2 A</MenuItem>
                          <MenuItem value={"2 B"}>2 B</MenuItem>
                          <MenuItem value={"3 A"}>3 A</MenuItem>
                          <MenuItem value={"3 B"}>3 B</MenuItem>
                          <MenuItem value={"4 A"}>4 A</MenuItem>
                          <MenuItem value={"4 B"}>4 B</MenuItem>
                          <MenuItem value={"5 A"}>5 A</MenuItem>
                          <MenuItem value={"5 B"}>5 B</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>

                <Divider style={{ marginTop: "18px", marginBottom: "18px" }} />

                <AllStudentsDataGrid />
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AllStudentsData;
