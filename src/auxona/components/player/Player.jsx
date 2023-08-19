import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { setMuted, setPlay } from '../../../store/reducers/player/'
import { YoutubeEmbed } from '../youtube/YoutubeEmbed'
import { Timer } from './progress/Timer'
import { Progress } from './progress/Progress'
import { Control } from './control/Control'
import { Bar } from './volume/Bar'
import { Cover } from './cover/Cover'

import './Player.css'

export const Player = ({show, setShow}) => {

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
        <div className={`player ${show ? 'player--bg' : ''}`}>
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
            <div className="player__extra">
                <h3 className="player__extra__title">
                    Auxona
                </h3>

                <button className="player__extra__button extra--down" onClick={setShow}>
                    <i className="bi bi-box-arrow-down"></i>
                </button>
                <button className="player__extra__button extra--up" onClick={setShow}>
                    <i className="bi bi-box-arrow-up"></i>
                </button>
            </div>
            <YoutubeEmbed embedId={youTubeId} />
        </div>
    )
}

Player.propTypes = {
    setShow: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}
