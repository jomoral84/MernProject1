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

import { signup, signin } from "../../actions/auth";
import { AUTH } from "../../constants/actionTypes";
import useStyles from "./auth_style";
import Input from "./Input";
import { useDispatch } from "react-redux";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const state = null;
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();

  // const responseGoogle = (response) => {
  //   console.log(response);
  // };

  // const googleFailure = () => {
  //   console.log("Google Error");
  // };

  // const googleSucess = () => {};

  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };


    // Handler que toma los value del form 
  const handleChange = (e) => {
    setFormData({...formData, [ e.target.name]: e.target.value});
  };

 const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

 
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
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
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
           
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repetir Password"
                type="password"
                handleChange={handleChange}
              />
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
          <Grid container justifyContent="flex-end">
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
