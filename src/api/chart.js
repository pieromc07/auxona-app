import axios from "axios";
import { AuxonaApi } from "./config";

const URL = AuxonaApi.URL + 'top';

export const Chart = async () => {

	const resp = await axios.get(URL);
	const { data } = resp.data;
	return {
		tracks: data.tracks.data,
		albums: data.albums.data,
		artists: data.artists.data,
		playlists: data.playlists.data,
		podcasts: data.podcasts.data,
		banner: {
			id: data.tracks.data[0].id,
			title: data.tracks.data[0].title,
			artist: data.tracks.data[0].artist.name,
			isFavorite: false,
		}
	}
};

export const ChartCategy = async (category) => {
	const resp = await axios.get(URL + `/${category}`);
	const { data } = resp.data;
	return data;
}

