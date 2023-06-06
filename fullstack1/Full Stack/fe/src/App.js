import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import CardsData from "./components/CardsData";
import PostForm from "./components/PostForm";
import { Box, Container, Grid } from "@mui/material";
function App() {
  return (
    <Box >
      <Navbar />

      <Grid container spacing={2}  >
        <Grid item xs={8} >
          <Box>
            <CardsData />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <PostForm />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
