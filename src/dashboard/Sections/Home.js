import { Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import StudentDetails from "./Home/StudentDetails";
import Paper from "@mui/material/Paper";
import { Box, ThemeProvider } from "@mui/material";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { minHeight } from "@mui/system";

import AllStudentsDataGrid from "./AllStudentsData/AllStudentsDataGrid";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [batch, setBatch] = React.useState("");

  const handleChangeBatch = (event) => {
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
            height: "100%",
          }}
        >
          <div>
            <div style={{ fontSize: "22px", fontWeight: "700" }}>Dashboard</div>
            <div style={{ fontSize: "16px", fontWeight: "100" }}>
              Consolidation of all data
            </div>
            <Divider style={{ marginTop: "18px", marginBottom: "18px" }} />
            <Tabs
              //   value={value}
              //   onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    style={{ borderBottom: "0px" }}
                  >
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Batch" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <div
                        style={{
                          fontSize: "1px",
                          fontWeight: "700",
                          marginBottom: "16px",
                        }}
                      >
                        Student Detailsss
                      </div>
                      <StudentDetails tab="all" />
                    </Grid>
                  </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>Consolidation of batch wise data</div>
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
                          onChange={handleChangeBatch}
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
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <div
                          style={{
                            fontSize: "1px",
                            fontWeight: "700",
                            marginBottom: "16px",
                            marginTop: "16px",
                          }}
                        >
                          Student Details
                        </div>
                        <StudentDetails tab="batch" />
                      </Grid>
                    </Grid>
                  </div>
                </CustomTabPanel>
              </Box>
            </Tabs>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div>
            <div style={{ fontSize: "22px", fontWeight: "700" }}>
              AI Suggestions
            </div>
            <div style={{ fontSize: "16px", fontWeight: "100" }}></div>
            <Divider style={{ marginTop: "18px", marginBottom: "18px" }} />
            <div style={{ padding: "16px", background: "#E0E3E4" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        marginBottom: "16px",
                      }}
                    >
                      AI Suggestion 1
                    </div>
                    <div
                      style={{
                        fontWeight: "16px",
                        marginTop: "16px",
                      }}
                    >
                      Discover how <b>Amit, Suresh, Virinder, and 22 others</b>{" "}
                      are losing up to 28% of their marks in tests due to silly
                      mistakes. But fear not! There's an easy solution to boost
                      their scores.{" "}
                      <span
                        style={{
                          textDecoration: "undeline",
                          color: "#0288d1",
                          cursor: "pointer",
                        }}
                        onClick={handleOpen}
                      >
                        Learn more
                      </span>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        marginBottom: "16px",
                      }}
                    >
                      AI Suggestion 2
                    </div>
                    <div
                      style={{
                        fontWeight: "16px",
                        marginTop: "16px",
                      }}
                    >
                      Unlock powerful AI-generated insights and personalized
                      recommendations tailored to your needs. Let's turn those
                      losses into wins together.{" "}
                      <span
                        style={{
                          textDecoration: "undeline",
                          color: "#0288d1",
                          cursor: "pointer",
                        }}
                        onClick={handleOpen}
                      >
                        Learn more
                      </span>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        marginBottom: "16px",
                      }}
                    >
                      AI Suggestion 3
                    </div>
                    <div
                      style={{
                        fontWeight: "16px",
                        marginTop: "16px",
                      }}
                    >
                      <b>Dixit, Ridham, and 7 others</b> are losing
                      approximately 12% of their marks in exams due to lapses in
                      concentration. This overlooked challenge can significantly
                      impact your performance. Discover how to sharpen your
                      focus and reclaim those lost marks. Explore our
                      AI-generated suggestions and personalized strategies for
                      better concentration and improved exam results. Take
                      control of your success journey today.{" "}
                      <span
                        style={{
                          textDecoration: "undeline",
                          color: "#0288d1",
                          cursor: "pointer",
                        }}
                        onClick={handleOpen}
                      >
                        Learn more
                      </span>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        marginBottom: "16px",
                      }}
                    >
                      AI Suggestion 4
                    </div>
                    <div
                      style={{
                        fontWeight: "16px",
                        marginTop: "16px",
                      }}
                    >
                      <b>Sukhman, Robin, and 11 others</b> are losing
                      approximately 19% of their marks in exams due to poor time
                      management. Don't let time slip away and take your marks
                      with it. Discover effective strategies to master time
                      management and maximize your exam performance. Explore our
                      AI-generated suggestions and personalized solutions to
                      regain control of your time and achieve better results.
                      Start your journey to exam success today!".{" "}
                      <span
                        style={{
                          textDecoration: "undeline",
                          color: "#0288d1",
                          cursor: "pointer",
                        }}
                        onClick={handleOpen}
                      >
                        Learn more
                      </span>
                    </div>
                  </Paper>
                  <div style={{ textAlign: "center", marginTop: "16px" }}>
                    {/* <Button
                      onClick={handleOpen}
                      variant="contained"
                      style={{ background: "#0288d1" }}
                    >
                      Know More
                    </Button> */}
                    <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                      fullWidth
                      maxWidth="sm"
                    >
                      <DialogTitle
                        sx={{ m: 0, p: 2, height: "50px" }}
                        id="customized-dialog-title"
                      ></DialogTitle>
                      <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                          position: "absolute",
                          right: 8,
                          top: 8,
                          color: (theme) => theme.palette.grey[500],
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                      <DialogContent dividers>
                        <Typography gutterBottom>Coming Soon</Typography>
                      </DialogContent>
                    </BootstrapDialog>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
