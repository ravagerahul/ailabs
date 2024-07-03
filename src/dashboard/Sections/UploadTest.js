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
const subjectNames = [
  "Maths",
  "Science",
  "English",
  "Hindi",
  "Social Science",
  "Computer Science",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Geography",
  "Civics",
  "Economics",
  "Physical Education",
  "General Knowledge",
  "Moral Science",
  "Drawing",
  "Craft",
  "Music",
  "Dance",
  "Yoga",
];
const UploadTest = () => {
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

  // Your component logic goes here
  const [subjectName, setSubjectName] = React.useState([]);

  const handleChangeSubject = (event) => {
    const {
      target: { value },
    } = event;
    setSubjectName(
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
                <div style={{ fontSize: "22px", fontWeight: "700" }}>
                  Upload Test
                </div>
                <div style={{ fontSize: "16px", fontWeight: "100" }}>
                  Upload Student Test
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  {" "}
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
                <Divider style={{ marginTop: "0px", marginBottom: "18px" }} />
                <FormControl sx={{ m: 1, width: 300 }} size="small">
                  <InputLabel id="demo-multiple-checkbox-label">
                    Batches
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={batchName}
                    onChange={handleChangeBatch}
                    input={<OutlinedInput label="Batches" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {batchNames.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={batchName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl
                  sx={{ m: 1, width: 300, marginLeft: "16px" }}
                  size="small"
                >
                  <InputLabel id="demo-multiple-checkbox-label">
                    Subjects
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={subjectName}
                    onChange={handleChangeSubject}
                    input={<OutlinedInput label="Subjects" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {subjectNames.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={subjectName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UploadTest;
