import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postApiSucc:false,
  selectedPost:{},
  postEdit:false
};
const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    fetchPostSucc: (state, { payload }) => {
      state.posts = payload;
    },
    fetchPostsPostSucc:(state,{payload})=>{

    },
    handleEditPost:(state,{payload})=>{
        state.selectedPost= payload;
        state.postEdit= true
    },
    handlePostEdited:(state)=>{
        state.postEdit= false
    }

  },

});
export const {fetchPostSucc,fetchPostsPostSucc,handleEditPost,handlePostEdited} = postSlice.actions;

export default postSlice.reducer;
