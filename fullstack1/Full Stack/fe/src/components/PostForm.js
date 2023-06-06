import { Box, Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Filebase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, editPost } from "../redux/actions";
const PostForm = () => {
  const [form, setForm] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    image: "",
  });
  const dispatch = useDispatch();
  const postEdit = useSelector((state) => state.posts.postEdit);
  const [image,setImage]= useState(null)
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  const handleSubmit = (e) => {
console.log(image,"image")
    const formData = new FormData();
    // formData.append("creator",form.creator)
    // formData.append("title",form.title)

    // formData.append("tags",form.tags)
    // formData.append("message",form.message)
    formData.append("image",image)
    console.log(formData)
    axios.post("http://localhost:1100/upload",      
      formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      })
    // if (postEdit) {
    //   dispatch(editPost(form));
    // } else {
    //   dispatch(createPosts(formData));
    // }
    setForm({
      creator: "",
      title: "",
      message: "",
      tags: "",
      image: "",
    });
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleFile = (e) => {
    console.log(e.base64, "j");
    setForm({
      ...form,
      image: e.base64,
    });

    console.log(form);
  };
  useEffect(() => {
    if (postEdit) {
      setForm(selectedPost);
    } else {
      setForm({
        creator: "",
        title: "",
        message: "",
        tags: "",
        image: "",
      });
    }
  }, [postEdit]);
  console.log(form)

  return (
    <Box>
      <Paper
        sx={{ padding: "100px", display: "flex", flexDirection: "column" }}
      >
        <form>
          <TextField
            value={form.creator}
            fullWidth
            sx={{ marginTop: "20px" }}
            placeholder="creator"
            name="creator"
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            value={form.title}
            fullWidth
            sx={{ marginTop: "20px" }}
            placeholder="title"
            name="title"
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            value={form.message}
            sx={{ marginTop: "20px" }}
            placeholder="message"
            fullWidth
            name="message"
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            value={form.tags}
            fullWidth
            sx={{ marginTop: "20px" }}
            placeholder="tags"
            name="tags"
            onChange={handleChange}
            variant="outlined"
          />
          <Box sx={{ marginTop: "40px" }}>
            <input name="image" type="file" onChange={(e)=>setImage(e.target.files[0])} />
          </Box>
          <Button
            variant="contained"
            sx={{ marginTop: "20px" }}
            color="primary"
            onClick={handleSubmit}
            fullWidth
            disabled={
              !form.creator || !form.message || !form.tags || !form.title
            }
          >
            {postEdit ? "Edit" : "Submit"}
          </Button>
          <Button
            variant="contained"
            sx={{ marginTop: "20px" }}
            color="secondary"
            disabled={
              !form.creator || !form.message || !form.tags || !form.title
            }
            onClick={() =>
              setForm({
                creator: "",
                title: "",
                message: "",
                tags: "",
                image: "",
              })
            }
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default PostForm;
