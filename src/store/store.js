import { configureStore } from "@reduxjs/toolkit";
import { reducerPlayer } from "./reducers/player/player";
import { reducerChart } from "./reducers/chart/chart";
import { reducerHistory } from "./reducers/history";
export const store = configureStore({
    reducer: {
        player: reducerPlayer.reducer,
        chart : reducerChart.reducer,
        history: reducerHistory.reducer
    },
});