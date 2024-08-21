import React, { useState } from 'react';
import { Typography } from "@mui/material";
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
import fullDescription  from "./fullDescription.js";
import fullDescription2 from "./fullDescription2.js";
import fullDescription3 from "./fullDescription3.js";
import fullDescription4 from "./fullDescription4.js";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

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
const AiRecommendations = () => {
  const [open, setOpen] = React.useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const [openDialogId, setOpenDialogId] = useState(null);

  const handleClickOpen = (id) => {
    setOpenDialogId(id);
  };

  const handleCloseD = () => {
    setOpenDialogId(null);
  };
   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Your code here

  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleExpand1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const toggleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const toggleExpand3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  const descriptions = [
    { id: 1, brief: 'Discover how Amit, Suresh, Virinder, and 22 othersare losing up to 28% of their marks in tests due to silly mistakes But fear not! There s an easy solution to boost their scores.', full: fullDescription },
    { id: 2, brief: 'Unlock powerful AI-generated insights and personalized recommendations tailored to your needs. Let\'s turn those  losses into wins together.', full: fullDescription2 },
    { id: 3, brief: 'Sukhman, Robin, and 11 others are losing approximately 19% of their marks in exams due to poor time management. Don\'t let time slip away and take your marks with it. Discover effective strategies to master time management and maximize your exam performance. Explore our AI-generated suggestions and personalized solutions to regain control of your time and achieve better results. Start your journey to exam success today!', full: fullDescription3 },
    { id: 4, brief: 'Dixit, Ridham, and 7 others are losing approximately 12% of their marks in exams due to lapses in concentration. This overlooked challenge can significantly impact your performance. Discover how to sharpen your focus and reclaim those lost marks. Explore our AI-generated suggestions and personalized strategies for better concentration and improved exam results. Take control of your success journey today.', full: fullDescription4}
  ];
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
                    {descriptions.map(desc => (
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
                              
                              
                              

                    <div key={desc.id}>
                      <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        marginBottom: "16px",
                      }}
                    >
                      AI Suggestion {desc.id}
                    </div>
                      <p>{desc.brief}</p>
                      <p 
                      style={{
                        textDecoration: "undeline",
                        color: "#0288d1",
                        cursor: "pointer",
                      }} 
                        onClick={() => handleClickOpen(desc.id)}>
                        Learn More
                      </p>
                      <Dialog open={openDialogId === desc.id} onClose={handleCloseD}>
                        <DialogTitle>More Information</DialogTitle>
                        <DialogContent>
                        <div
                          dangerouslySetInnerHTML={{ __html: desc.full }}
                        />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleCloseD}>Close</Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                    </Paper>
                              </Grid>
                              </Grid>
                              </div>
                    
                  ))}
                  </Paper>
                 
                
                  
                </Grid>
              </Grid>
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AiRecommendations;
