import axios from "axios";
import { fetchPostsPostSucc, fetchPostSucc, handlePostEdited } from "../reducers/postSlice";

// const url = "http://localhost:1100/posts";

export const fetchPosts = () => async (dispatch) => {
  // dispatch(fetchPostLoading)
  try {
    console.log();
    const { data } = await axios.get("http://localhost:1100/posts");
    console.log(data, "datra");
    dispatch(fetchPostSucc(data));
  } catch (error) {}
};
export const createPosts = (newPost) => async (dispatch) => {
  console.log(newPost);
  try {
    const { data } = await axios.post(
      "http://localhost:1100/posts/add",
      newPost,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      }
    );
    dispatch(fetchPosts())
    dispatch(fetchPostsPostSucc(data));
  } catch (error) {
    console.log(error);
  }
};

export const editPost = (editedPost) => async (dispatch) => {
  console.log("hsh");
  try {
    const data = await axios.put(`http://localhost:1100/posts/edit`, editedPost);
    dispatch(handlePostEdited())
    dispatch(fetchPosts())
  } catch (error) {
    dispatch(handlePostEdited())
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  console.log("hsh");
  try {
    const data = await axios.delete(`http://localhost:1100/posts/delete/${id}`);
  } catch (error) {
    console.log(error);
  }
};
