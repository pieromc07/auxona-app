import axios from "axios";
import { AuxonaApi } from "./config";

const URL = AuxonaApi.URL + 'artist';

export const findById = async (id) => {
	const resp = await axios.get(URL + `/${id}`);
	const { data } = resp.data;
	return data;
}