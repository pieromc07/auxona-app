import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChangeTime, setCurrentTime } from '../../../../store/reducers/player';

export const Progress = () => {

    const {
        currentTime,
        duration
    } = useSelector(state => state.player)

    const dispatch = useDispatch();

    const handleProgress = (event) => {
        const time = event.target.value;
        console.log("Change Time: ", time)
        dispatch(setChangeTime({ ischangeTime: true }))
        dispatch(setCurrentTime({ currentTime: time }))

    }

    useEffect(() => {


    }, [currentTime, duration])


    return (
        <div className="player__progress--bar">
            <input
                type="range"
                className="player__progress--bar-input"
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleProgress}
            />
        </div>
    )
}