import { TrackById, firstFlow } from "../../../api";
import { setPlay, setPlayer } from "../player";
import { setCurrentTrack, setHistory } from "./history";

export const oneFlow = () => {
	return async (dispatch) => {
		firstFlow().then((data) => {
			const { id } = data
			if (id !== 0) {
				TrackById(id).then((res) => {
					dispatch(setPlayer({
						cover: data.md5_image,
						title: data.title,
						artist: data.artist.name,
						duration: res.duration,
						currentTime: 0,
						youTubeId: res.youtube_id,
						isLoading: false,
					}));
					dispatch(setHistory({
						cover: data.md5_image,
						title: data.title,
						artist: data.artist.name,
						duration: res.duration,
						currentTime: 0,
						youTubeId: res.youtube_id,
					}));
					dispatch(setCurrentTrack({
						cover: data.md5_image,
						title: data.title,
						artist: data.artist.name,
						duration: res.duration,
						currentTime: 0,
						youTubeId: res.youtube_id,
					}));
					dispatch(setPlay({ isPlaying: true }));
				});
			}
		});
	};
};
