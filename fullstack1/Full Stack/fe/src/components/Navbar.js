import { AppBar, Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CardsData from "./CardsData";
import PostForm from "./PostForm";

const Navbar = () => {
  return (
    <Container bg="blue">
      <AppBar position="static">
        <Typography variant="h2">memories</Typography> 
      </AppBar>

    </Container>
  );
};

export default Navbar;
