import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setVolume } from "../../../../store/reducers/player"

export const Bar = () => {
    const {
        volume
    } = useSelector(state => state.player)

    const dispatch = useDispatch()

    const handleChangeVolume = (event) => {
        const value = event.target.value
        dispatch(setVolume({ volume: value }))
    }

    useEffect(() => {

    }, [volume])

    return (
        <div className="player__volume--bar">
            <input
                type="range"
                className="player__volume--bar-input"
                min={0}
                max={100}
                value={volume}
                onChange={handleChangeVolume}
            />
        </div>
    )
}
