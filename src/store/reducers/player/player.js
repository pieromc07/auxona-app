/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

export const reducerPlayer = createSlice({
	name: 'Player',
	initialState: {
		idDeezer: 0,
		cover: '',
		title: '',
		artist: '',
		duration: 0,
		currentTime: 0,
		volume: 0,
		youTubeId: '',
		isLoading: false,
		isPlaying: false,
		isReady: false,
		isStarted: false,
		isMuted: false,
		ischangeTime: false
	},
	reducers: {
		startLoading(state) {
			state.isLoading = true;
		},
		setPlayer(state, action) {
			state.idDeezer = action.payload.idDeezer;
			state.isLoading = false;
			state.cover = action.payload.cover;
			state.title = action.payload.title;
			state.artist = action.payload.artist;
			state.duration = action.payload.duration;
			state.currentTime = action.payload.currentTime;
			state.youTubeId = action.payload.youTubeId;
		},
		setPlay(state, action) {
			state.isPlaying = action.payload.isPlaying;
		},
		setCurrentTime(state, action) {
			state.currentTime = action.payload.currentTime;
		},
		setChangeTime(state, action) {
			state.ischangeTime = action.payload.ischangeTime;
		},
		setReady(state, action) {
			state.isReady = action.payload.isReady;
		},
		setStarted(state, action) {
			state.isStarted = action.payload.isStarted;
		},
		setDuration(state, action) {
			state.duration = action.payload.duration;
		},
		setMuted(state, action) {
			state.isMuted = action.payload.isMuted;
		},
		setVolume(state, action) {
			state.volume = action.payload.volume;
		}
	}
});

export const {
	startLoading,
	setPlayer,
	setPlay,
	nextSong,
	previousSong,
	setCurrentTime,
	setReady,
	setDuration,
	setStarted,
	setMuted,
	setVolume,
	setChangeTime
} = reducerPlayer.actions;