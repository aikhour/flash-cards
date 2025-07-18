import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
        const { id, name, icon } = action.payload;
        state.topics[id] = {
            id: id,
            name: name,
            icon,
            quizIds: []
      };
    }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
<<<<<<< HEAD
export const topicsReducer = topicsSlice.reducer;
=======
export default topicsSlice.reducer;
>>>>>>> 96e3c2c7618bc4922fc4189576fb6c070edfcbd7
