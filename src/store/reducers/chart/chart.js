import { createSlice } from '@reduxjs/toolkit';

export const reducerChart = createSlice({
    name: 'Chart',
    initialState: {

    },
    reducers: {
        setChart(state, action) { }
    }
});

export const { setChart } = reducerChart.actions;