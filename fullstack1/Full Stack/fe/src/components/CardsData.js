import { Grid, Box, Typography, Card } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, editPost, fetchPosts } from "../redux/actions";
import { handleEditPost } from "../redux/reducers/postSlice";
const CardsData = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.posts.posts);
  console.log(items);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleEdit=(item)=>{
    dispatch(handleEditPost(item))
  }
  return (
    <Grid spacing={2} container> 
      {items.map((item) => (
        <Grid item xs={4} >
          <Card sx={{ margin: "20px",padding:"20px" }}>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="h5">{item.message}</Typography>
            <Typography variant="h5">{item.creator}</Typography>
            <Box sx={{ display: "flex",marginTop:"30px",justifyContent:"space-between" }}>
              <Typography variant="h5" onClick={()=>handleEdit(item)}> Edit</Typography>
              <Typography
                variant="h5"
                onClick={() => dispatch(deletePost(item._id))}
              >
                delte
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsData;
