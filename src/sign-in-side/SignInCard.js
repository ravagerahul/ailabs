import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Card as MuiCard } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import ForgotPassword from "./ForgotPassword";
import { GoogleIcon, FacebookIcon, SitemarkIcon } from "./CustomIcons";
import { useNavigate } from "react-router-dom";
import { SIGNIN_URL } from "../config";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  gap: theme.spacing(4),
  width: "100%",
  padding: theme.spacing(2),
  boxShadow:
    theme.palette.mode === "light"
      ? "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px"
      : "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
    width: "450px",
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignInCard(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [formData, setFormData] = React.useState({
    code: "",
    password: "",
  });
  const [showError, setShowError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [showSuccess, setShowSuccess] = React.useState(false); // State for success message
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateInputs()) {
      return;
    }

    try {
      const response = await fetch(SIGNIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data && data.status) {
          const response1 = await fetch("https://theailabs.live/session/api/v1/Meta",{
            method: 'GET'
          });
          const data1 = await response1.json();
          console.log("data from meta   " + data1);
          localStorage.setItem('apiData',JSON.stringify(data1));
          
          console.log("Data saved in local storage");
          // Successful login logic
          setShowSuccess(true); // Show success message
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000); // Navigate after 2 seconds
        } else {
          // Handle unsuccessful login
          setShowError(true);
          setErrorMessage("Invalid credentials. Please try again.");
        }
      } else {
        setShowError(true);
        setErrorMessage("Failed to sign in. Please try again later.");
        console.error("Failed to fetch", response.statusText);
      }
    } catch (error) {
      setShowError(true);
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Error occurred while signing in:", error);
    }
  };

  const validateInputs = () => {
    let isValid = true;

    // Validate email (code)
    if (!formData.code.trim()) {
      setEmailError(true);
      setEmailErrorMessage("Username is required.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    // Validate password
    if (!formData.password.trim()) {
      setPasswordError(true);
      setPasswordErrorMessage("Password is required.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  const handleSnackbarClose = () => {
    setShowError(false);
    setShowSuccess(false); // Close success message as well
  };

  return (
    <Card>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <SitemarkIcon />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
        }}
      >
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="username"
            name="code"
            placeholder="Username"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? "error" : "primary"}
            value={formData.code}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={passwordError ? "error" : "primary"}
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" fullWidth variant="contained">
          Sign in
        </Button>
      </Box>
      <Snackbar
        open={showError || showSuccess} // Show for both error and success
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={showError ? "error" : "success"} // Dynamic severity based on showError
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </Card>
  );
}
