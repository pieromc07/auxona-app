/* eslint-disable no-unused-vars */
import { TrackById } from "../../../api/Track";
import { setHistory, setCurrentTrack } from "../history";
import { startLoading, setPlayer } from "./player";

// TODO:  Obtener la canción para el reproductor
export const getPlayer = (id = 0) => {
	return async (dispatch, getState) => {
		// NOTE:  Inicio de la carga de la canción        
		dispatch(startLoading());
		console.log('getPlayer', id);
		// NOTE:  Obtener la canción por IdDeezer API auxona store
		if (id !== 0) {
			TrackById(id).then((data) => {
				// NOTE:  Establecer la canción en el reproductor
				dispatch(setPlayer({
					cover: data.md5_image,
					title: data.title,
					artist: '',
					duration: data.duration,
					currentTime: 0,
					youTubeId: data.youtube_id,
					isLoading: false,
				}));
				dispatch(setHistory({
					cover: data.md5_image,
					title: data.title,
					artist: '',
					duration: data.duration,
					currentTime: 0,
					youTubeId: data.youtube_id,
				}));
				dispatch(setCurrentTrack({
					cover: data.md5_image,
					title: data.title,
					artist: '',
					duration: data.duration,
					currentTime: 0,
					youTubeId: data.youtube_id,
				}));
			});
		}
	}
}
