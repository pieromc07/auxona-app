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
			// NOTE:  Agregar solo si no existe
			const exist = state.history.find((item) => item.youTubeId === action.payload.youTubeId);
			if (!exist) {
				state.history = [...state.history, action.payload];
				state.count = state.history.length;
			}
			state.position = state.history.findIndex((item) => item.youTubeId === action.payload.youTubeId);
		},
		setCurrentTrack(state, action) {
			state.currentTrack = action.payload;
		},
		setPosition(state, action) {
			state.position = action.payload;
			state.currentTrack = state.history[state.position];
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