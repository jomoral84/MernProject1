import React from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"; 
import ChipInput from "material-ui-chip-input";


import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts } from "../../actions/posts";
import Auth from "../Auth/Auth";
import Paginate from "../Pagination/Pagination";
import useStyle from "./home_style";

import { Pagination } from "@mui/material";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  
  const [currentId, setCurrentId] = useState(0);
  const [search, setSearch] = useState('');
  const classes = useStyle();
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useNavigate();
  const page = query.get('page') || 1;
  const searchQuery  = query.get('searchQuery');

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {

    }
  }

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
           <AppBar className={classes.appBarSearch} position="static" color="inherit">
            <TextField name="search" variant="outlined" label="Buscar" onKeyPress={handleKeyPress} fullWidth value={search} onChange={(e) => setSearch(e.target.value)}></TextField>
            <ChipInput style={{margin: '10px 0'}}></ChipInput>
           </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper classname={classes.pagination} elevation={6}>
                <Pagination/>
            </Paper>
        </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
