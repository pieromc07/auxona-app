import { useReducer, useEffect, useCallback } from 'react'

const fetchReducer = (state, action) => {
	switch (action.type) {
		case "FETCH_START": {
			return {
				loading: true,
				data: null,
				error: null
			};
		}
		case "FETCH_ERROR": {
			return {
				loading: false,
				data: null,
				error: action.error
			};
		}
		case "FETCH_END": {
			return {
				loading: false,
				data: action.data
			};
		}
		default:
			return state;
	}
};

export const useFetch = url => {
	const [state, dispatch] = useReducer(
		fetchReducer,
		{
			loading: false,
			error: null,
			data: null
		}
	);

	const refetch = useCallback(() => {
		dispatch({ type: "FETCH_START" });

		fetch(url)
			.then(res => res.json())
			.then(data => dispatch({ type: "FETCH_END", data }))
			.catch(error => dispatch({ type: "FETCH_ERROR", error }));
	}, [url])

	useEffect(() => {
		refetch(url);
	}, [url]);

	return {
		data: state.data,
		error: state.error,
		refetch
	};
};