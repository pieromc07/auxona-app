import axios from "axios";
import { AuxonaApi } from "./config";

const URL = AuxonaApi.URL + 'flow';

export const firstFlow = async () => {

	const resp = await axios.get(URL);
	const { data } = resp.data;
	console.log(data);
	return {
		id: data[0].id,
		title: data[0].title,
		title_short: data[0].title_short,
		md5_image: `https://e-cdns-images.dzcdn.net/images/cover/${data[0].md5_image}/250x250-000000-80-0-0.jpg`,
		artist: {
			id: data[0].artist.id,
			name: data[0].artist.name,
		}
	}
}
