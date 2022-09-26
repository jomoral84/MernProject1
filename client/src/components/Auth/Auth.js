import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
  Icon,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/core/Icon";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, googleSucess, googleFailure } from "react-google-login";

import { signup, signin } from "../../actions/auth";
import useStyles from "./auth_style";
import Input from "./Input";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const state = null;
  const history = useNavigate();

  // const responseGoogle = (response) => {
  //   console.log(response);
  // };

  // const googleFailure = () => {
  //   console.log("Google Error");
  // };

  // const googleSucess = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (isSignup) {
      dispatchEvent()
    }


    console.log(formData);
  };
           
  // Handler que toma los value del form 
  const handleChange = (e) => {
    setFormData({... formData, [ e.target.name]: e.target.value});
  };

 


  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="Nombre"
                  handleChange={handleChange}
                  autoFocus
                  half
                ></Input>
                <Input
                  name="lastName"
                  label="Apellido"
                  handleChange={handleChange}
                  half
                ></Input>
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            ></Input>
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            ></Input>
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repetir Password"
                type="password"
                handleChange={handleChange}
              ></Input>
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          {/* <GoogleLogin
            clientId="GOOGLE_ID"
            onSuccess={googleSucess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
          /> */}
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Tiene una cuenta? Ingrese"
                  : "No tiene cuenta? Crear cuenta"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
