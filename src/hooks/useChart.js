import { useEffect, useState } from 'react'
import { Chart } from '../api'
import { useDispatch } from 'react-redux'
import { getPlayer } from '../store/reducers/player'


export const useChart = () => {

    const [charts, setCharts] = useState({
        tracks:[],
        albums: [],
        artists: [],
        playlists: [],
        podcasts: [],
        banner: {}
    })

   const dispatch =  useDispatch()

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Chart()
            .then(({
                tracks,
                albums,
                artists,
                playlists,
                podcasts,
                banner

            }) => setCharts(
                {
                    tracks,
                    albums,
                    artists,
                    playlists,
                    podcasts,
                    banner
                }
            ))
            .then(() => setIsLoading(false))

        dispatch(getPlayer(charts.banner.id))
        
    }, [charts.banner.id, dispatch])
    return {
        charts,
        ...charts,
        isLoading
    }

}
