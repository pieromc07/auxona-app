import axios from "axios";
import { AuxonaStore } from "./config";

const URL = AuxonaStore.URL + 'tracks';

export const TrackById = async (id) => {
	const resp = await axios.get(`${URL}/${id}`);
	const { data } = resp.data;
	return {
		...data
	}
};
