import { configureStore } from "@reduxjs/toolkit";
import { reducerPlayer } from "./reducers/player/player";
export const store = configureStore({
    reducer: {
        player: reducerPlayer.reducer,
    },
});