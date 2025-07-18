import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic(state, action) {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                name: name,
                icon: icon,
                id: id,
                quizIds: []
            };
        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export const topicsReducer = topicsSlice.reducer;