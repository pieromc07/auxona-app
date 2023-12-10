import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(url)
			.then(resp => {
				setData(resp.data);
				setLoading(false);
			})
	}, [url]);

	return { data, loading };
};