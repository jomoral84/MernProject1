import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {

  return (
    <BrowserRouter>
      <Container maxwith="lg">
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home}></Route>
        <Route path="/auth" exact component={Auth}></Route>
      </Routes>
       <Home/>
      </Container>
    </BrowserRouter>
  );
};

export default App;
