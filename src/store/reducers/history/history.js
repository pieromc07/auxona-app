import { createSlice } from '@reduxjs/toolkit';

export const reducerHistory = createSlice({
    name: 'History',
    initialState: {
        history: [],
        currentTrack: {},
        position: 0,
        count: 0,
    },
    reducers: {
        setHistory(state, action) {
            state.history = [...state.history, action.payload];
            state.count = state.history.length;
            state.position = state.count - 1;
        },
        setCurrentTrack(state, action) {
            state.currentTrack = action.payload;
        },
        setPosition(state, action) {
            state.position = action.payload;
        },
        setCount(state, action) {
            state.count = action.payload;
        }
    }
});

export const {
    setHistory,
    setCurrentTrack,
    setPosition,
    setCount
} = reducerHistory.actions;