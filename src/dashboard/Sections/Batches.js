import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";

const columns = [
  { key: "batch", name: "Batch" },
  { key: "code", name: "Code" },
  { key: "studentCount", name: "Student Count" },
  { key: "active", name: "Active" },
];

const Batches = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [batchName, setBatchName] = useState("");
  const [batchCode, setBatchCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("apiData"));
    if (localStorageData && localStorageData.batchList) {
      const batches = localStorageData.batchList.map((batch) => ({
        batch: batch.name,
        code: batch.code,
        studentCount: batch.studentCount,
        active: batch.active ? "No" : "Yes",
      }));
      setRows(batches);
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://theailabs.live/session/api/v1/configuration/Batch/add?name=${batchName}&code=${batchCode}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Batch added successfully", data);
      setSnackbarMessage("Batch added successfully");
      setSnackbarSeverity("success");
    } catch (error) {
      console.error("Error adding batch", error);
      setSnackbarMessage("Error adding batch");
      setSnackbarSeverity("error");
    } finally {
      setLoading(false);
      setSnackbarOpen(true);
      handleClose();
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "22px", fontWeight: "700" }}>Batches</div>
                    <div style={{ fontSize: "16px", fontWeight: "100" }}>Add Batch</div>
                  </div>
                  <div>
                    <Button
                      style={{ marginLeft: "16px", background: "#4caf50" }}
                      variant="contained"
                      color="primary"
                      onClick={handleClickOpen}
                    >
                      <AddIcon />
                    </Button>
                  </div>
                </div>
                <Divider style={{ marginTop: "18px", marginBottom: "18px" }} />
                <Grid container spacing={3}></Grid>
              </Grid>
            </Grid>
            <DataGrid style={{ marginTop: "16px" }} columns={columns} rows={rows} />
          </div>
        </Paper>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Batch</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter the details for the new batch.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Batch Name"
            type="text"
            fullWidth
            variant="standard"
            value={batchName}
            onChange={(e) => setBatchName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="code"
            label="Batch Code"
            type="text"
            fullWidth
            variant="standard"
            value={batchCode}
            onChange={(e) => setBatchCode(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} disabled={loading}>Save</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Batches;
