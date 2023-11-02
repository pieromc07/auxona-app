import { Chart } from "../../../api";
import { setChart } from "./chart";

export const getChart = () => {
	return async (dispatch) => {
		Chart().then((data) => {
			dispatch(setChart({
				tracks: data.tracks,
				albums: data.albums,
				artists: data.artists,
				playlists: data.playlists,
				podcasts: data.podcasts,
				banner: data.banner
			}));
		});
	};
};