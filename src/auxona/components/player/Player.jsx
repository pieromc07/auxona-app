import { useDispatch, useSelector } from 'react-redux'
import { setMuted, setPlay } from '../../../store/reducers/player/'
import { YoutubeEmbed } from '../youtube/YoutubeEmbed'
import { Timer } from './progress/Timer'
import { Progress } from './progress/Progress'
import { Control } from './control/Control'
import { Bar } from './volume/Bar'
import { Cover } from './cover/Cover'

import './Player.css'

export const Player = () => {

    const {
        youTubeId,
        cover,
        title,
        artist,
        isPlaying,
        currentTime,
        duration,
        isMuted
    } = useSelector(state => state.player)

    const dispatch = useDispatch()

    const onPlay = () => {
        dispatch(setPlay({ isPlaying: true }))
    }

    const onPause = () => {
        dispatch(setPlay({ isPlaying: false }))
    }

    const onVolume = () => {
        dispatch(setMuted({ isMuted: false }))
    }

    const onMute = () => {
        dispatch(setMuted({ isMuted: true }))
    }

    const onForward = () => {
        console.log('Forward')
    }

    const onBackward = () => {
        console.log('Backward')
    }

    return (
        <div className="player">
            <div className="player__cover">
                <Cover cover={cover} title={title} artist={artist} />
            </div>
            <div className="player__controls">
                <Control icon={'bi bi-skip-start-fill'} control={'backward'} handleControl={onBackward} />
                {isPlaying ?
                    <Control icon={'bi bi-pause-fill'} control={'pause'} handleControl={onPause} />
                    :
                    <Control icon={'bi bi-play-fill'} control={'play'} handleControl={onPlay} />
                }
                <Control icon={'bi bi-skip-end-fill'} control={'forward'} handleControl={onForward} />
            </div>
            <div className="player__progress">
                <Timer timer={currentTime} />
                <Progress />
                <Timer timer={duration} />
            </div>
            <div className="player__volume">
                {/* Mute/Unmute */}
                {isMuted ?
                    <Control icon={'bi bi-volume-mute-fill'} control={'volume'} handleControl={onVolume} />
                    :
                    <Control icon={'bi bi-volume-up-fill'} control={'volume'} handleControl={onMute} />
                }
                <Bar />
            </div>
            <YoutubeEmbed embedId={youTubeId} />
        </div>
    )
}
