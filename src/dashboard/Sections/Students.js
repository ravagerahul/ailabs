import React, { useEffect, useState } from "react";
import { Typography, Snackbar, Alert } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, CircularProgress } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
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

const Students = () => {
  const [file, setFile] = useState(null);
  const [batchNames, setBatchNames] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const localStorageData = localStorage.getItem('apiData');
    console.log('LocalStorage apiData:', localStorageData);
    const parsedData = JSON.parse(localStorageData);
    if (parsedData && parsedData.batchList) {
      const sett = parsedData.batchList.map(obj => obj.code);
      setBatchNames(sett);
      if (sett.length > 0) {
        setSelectedBatch([sett[0]]); // Initialize with the first batch if available
      }
    }
  }, []);

  const handleChangeBatch = (event) => {
    const { value } = event.target;
    setSelectedBatch(Array.isArray(value) ? value : [value]);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('batchId', 1);

    console.log("STARTING HITTING API REQUEST");
    try {
      const response = await fetch('https://theailabs.live/storage/uploadStudentList', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('File uploaded successfully', data);
      setSuccessMessage('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadSampleStudent = async () => {
    console.log("starting download");
    fetch('https://theailabs.live/storage/downloadFile?type=STUDENT')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'downloadedFile.pdf'); // Suggested filename
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
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
                    onClick={downloadSampleStudent}
                  >
                    Download Sample CSV
                  </Button>
                </div>

                <Divider style={{ marginBottom: "18px" }} />

                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <div>
                      <FormControl sx={{ m: 1, width: 300 }} size="small">
                        <InputLabel id="demo-multiple-checkbox-label">
                          Batch
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          value={selectedBatch}
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

                <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <Button
                    variant="contained"
                    component="label"
                    style={{ background: "#4caf50", marginBottom: "10px" }}
                  >
                    Upload File
                    <input type="file" onChange={handleFileChange} hidden />
                  </Button>
                  {file && (
                    <Button variant="contained" onClick={handleSubmit}>
                      Submit
                    </Button>
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
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Students;
