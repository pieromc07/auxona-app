import { createSlice } from '@reduxjs/toolkit';

export const reducerChart = createSlice({
	name: 'Chart',
	initialState: {
		tracks: [],
		albums: [],
		artists: [],
		playlists: [],
		podcasts: [],
		banner: {},
		isLoading: true
	},
	reducers: {
		setChart(state, action) {
			state.tracks = action.payload.tracks;
			state.albums = action.payload.albums;
			state.artists = action.payload.artists;
			state.playlists = action.payload.playlists;
			state.podcasts = action.payload.podcasts;
			state.banner = action.payload.banner;
			state.isLoading = false;
		}
	}
});

export const { setChart } = reducerChart.actions;