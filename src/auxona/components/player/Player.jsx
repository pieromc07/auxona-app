
import { dataPlayer } from '../../libs'

import './Player.css'

export const Player = () => {
    return (
        <div className="player">
            <div className="player__cover">
                <div className="player__cover--image">
                    <img src={dataPlayer.image.src} alt="cover" />
                </div>
                <div className="player__cover--info">
                    <span className="cover__info--song">
                        {dataPlayer.title}
                    </span>
                    <span className="cover__info--artist">
                        {dataPlayer.artist}
                    </span>
                </div>
            </div>
            <div className="player__controls">
                <button className="controls__button controls__button--backward">
                    <i className="bi bi-skip-start-fill"></i>
                </button>
                <button className="controls__button controls__button--pause">
                    <i className="bi bi-pause-fill"></i>
                </button>
                <button className="controls__button controls__button--play hide">
                    <i className="bi bi-play-fill"></i>
                </button>
                <button className="controls__button controls__button--forward">
                    <i className="bi bi-skip-end-fill"></i>
                </button>

            </div>
            <div className="player__progress">
                {/* Timer initial */}
                <span className="player__progress--timer">0:00</span>
                {/* Progress bar */}
                <div className="player__progress--bar">
                    <input type="range" min="0" max="100" value="0" className="player__progress--bar-input" />
                </div>
                {/* Timer final */}
                <span className="player__progress--timer">0:00</span>
            </div>
            <div className="player__volume">
                <button className="controls__button controls__button--volume">
                    <i className="bi bi-volume-mute-fill"></i>
                </button>
                <div className="player__volume--bar">
                    <input type="range" min="0" max="100" value="0" className="player__volume--bar-input" />
                </div>
            </div>
        </div>
    )
}
