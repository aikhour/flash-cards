import { configureStore } from "@reduxjs/toolkit";
// import reducers
<<<<<<< HEAD
import topicsReducer from "../features/topics/topicsSlice";
=======
import { topicsReducer } from "../features/topics/topicsSlice";
>>>>>>> 96e3c2c7618bc4922fc4189576fb6c070edfcbd7


export default configureStore({
  reducer: {
    topics: topicsReducer,
  },
});
