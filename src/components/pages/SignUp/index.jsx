import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FetchButton
} from '../../atoms';
import {
  useHttpRequest,
  URL,
  REQUEST_METHOD_TYPES
} from '../../../utils';
const theme = createTheme();

const Component = () => {
  const [data, setData] = React.useState({});
  const [isDataValid, setValidityOfData] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const { responseData, error, isLoading, setRequestInitiation, setparams, setUrl } = useHttpRequest(URL.registrationUrl, {});
  // Sends Data when data is finally ready to 
  React.useEffect(() => {
  }, [isDataValid]);
  const handleChange = (event) => {
    if(event.target.value.length === 0){
      const {[event.target.name]: targeProp, ...remKey} = data; 
      setData(remKey);
    }else{
      setData({ ...data, [event.target.name]: event.target.value });
    }
 };
 const handleFailed = () => {

 }
  const regexName = /^[a-zA-Z]+$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_])[A-Za-z\d@_]{8,}$/;
    const errorTest = () => {
      const newErrors = {};
    
      if (data.firstName && (!regexName.test(data.firstName))) {
        newErrors.firstName = "First name must contain only letters";
      }
    
      if (data.lastName && !regexName.test(data.lastName)) {
        newErrors.lastName = "Last name must contain only letters";
      }
    
      if (data.email && !regexEmail.test(data.email)) {
        newErrors.email = "Email must be formatted as abc@xyz.mn";
      }
    
      if (data.password && !regexPassword.test(data.password)) {
        newErrors.password = "Password must be 8 char long, consisting of _, @, [0-9], Uppercase and lowercase";
      }
    
      setErrors(newErrors);
    }
    React.useEffect(() => {
      errorTest();
    }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    errorTest();

    // Check if any required field is missing
    const newErrors = {};
    if (!data.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!data.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!data.email) {
      newErrors.email = "Email is required";
    }
    if (!data.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0 && Object.keys(newErrors).length === 0) {
      setparams({
        method: REQUEST_METHOD_TYPES.POST,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setRequestInitiation(true);
      console.log("Valid form data:", data);
    } else {
      console.log("Invalid form data:", {...errors, ...newErrors});
      setErrors({...errors, ...newErrors});
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  value={data.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  value={data.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={!!errors.email}
                  helperText={errors.email}
                  value={data.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={!!errors.password}
                  helperText={errors.password}
                //   value={data.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            
            <FetchButton
              onClick={handleSubmit}
              isLoading={isLoading}
              isError={error}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              handleFailed={handleFailed}
            >
              Sign Up
            </FetchButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Component;
