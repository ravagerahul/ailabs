import React, { useState } from "react";
import {
  Typography,
  Divider,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  ListItemText,
  Select,
  Checkbox,
  Button,
  OutlinedInput,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

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
  "B1",
  "B2",
  "B3" // Example batchId, replace with actual batchIds
  // Other batchIds
];

const UploadTest = () => {
  const [batchName, setBatchName] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChangeBatch = (event) => {
    const {
      target: { value },
    } = event;
    setBatchName(typeof value === "string" ? value.split(",") : value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("batchId", batchName.join(","));
    formData.append("testDate", selectedDate ? selectedDate.toISOString() : "");

    try {
      const response = await fetch(
        "https://theailabs.live/storage/uploadTest",
        {
          method: "POST",
          body: formData,
          credentials: 'include', // to include cookies if needed
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSuccessMessage("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage("");
    window.location.reload();
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {loading && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                zIndex: 1,
              }}
            >
              <CircularProgress />
            </Box>
          )}
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
                    Download Sample CSV
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
                <div style={{ marginTop: "16px" }}>
                  <FormControl sx={{ m: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Select Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                <div style={{ marginTop: "16px" }}>
                  <FormControl sx={{ m: 1 }}>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ background: "#4caf50" }}
                    >
                      Upload File
                      <input type="file" onChange={handleFileChange} hidden />
                    </Button>
                  </FormControl>
                  {file && (
                    <FormControl sx={{ m: 1 }}>
                      <Button variant="contained" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </FormControl>
                  )}
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Grid>
      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default UploadTest;
