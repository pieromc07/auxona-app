import { Chart, TrackById } from "../../../api";
import { startLoading, setPlayer } from "../player";
import { setChart } from "../chart";

export const getStarted = () =>{
    return async (dispatch, getState) => {
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
                    duration: 0,
                    currentTime: 0,
                    youTubeId: data.youtube_id,
                    isLoading: false,
                }));
            });


        });
    }
}


