import { Chart, TrackById } from "../../../api";
import { startLoading, setPlayer } from "../player";
import { setChart } from "../chart";
import { setCurrentTrack, setHistory } from "../history";

export const getStarted = () => {
	return async (dispatch) => {
		Chart().then((data) => {
			// NOTE:  Cargar Charts
			dispatch(setChart({
				tracks: data.tracks,
				albums: data.albums,
				artists: data.artists,
				playlists: data.playlists,
				podcasts: data.podcasts,
				banner: data.banner
			}));
			// NOTE:  Cargar la canción en el reproductor
			dispatch(startLoading());
			TrackById(data.banner.id).then((data) => {
				// NOTE:  Establecer la canción en el reproductor
				dispatch(setPlayer({
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
				dispatch(setHistory({
					cover: data.md5_image,
					title: data.title,
					artist: '',
					duration: data.duration,
					currentTime: 0,
					youTubeId: data.youtube_id,
				}));

				console.log('getStarted', data);
			});
		});
	}
}


