/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { PropTypes } from 'prop-types'
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { setCurrentTime, setDuration, setReady, setStarted, setPlay, setVolume, setChangeTime } from '../../../store/reducers/player';

export const YoutubeEmbed = ({ embedId = 'E9gJknKWn18' }) => {

    const {
        isLoading,
        isReady,
        isPlaying,
        currentTime,
        isStarted,
        volume,
        isMuted,
        ischangeTime
    } = useSelector(state => state.player)

    const dispatch = useDispatch();

    const EmbedRef = useRef(null);

    const [player, setPlayer] = useState(null);



    // NOTE: Funciones del IFrame
    const handleLoad = (videoId) => {
        if (player) {
            player.loadVideoById(videoId)
        }
    }

    const handlePlay = () => {
        if (player && isReady) {
            player.playVideo()
            console.log('Play')
        }
    }

    const handlePause = () => {
        if (player && isStarted) {
            player.pauseVideo()
            console.log('Pause')
        }
    }

    // NOTE: Eventos del IFrame
    const _onReady = (event) => {
        dispatch(setDuration({ duration: event.target.getDuration() }))
        setPlayer(event.target)
        dispatch(setVolume({ volume: event.target.getVolume() }))
        dispatch(setReady({ isReady: true }))
    }

    const _onStateChange = (event) => {
        const { data } = event
    }

    const _onPlay = (event) => {
        dispatch(setCurrentTime({ currentTime: player.getCurrentTime() }))
        dispatch(setStarted({ isStarted: true }))
    }

    const _onPuse = (event) => {
        dispatch(setStarted({ isStarted: false }))
    }

    const _onEnd = (event) => {
        dispatch(setStarted({ isStarted: false }))
        dispatch(setCurrentTime({ currentTime: 0 }))
        dispatch(setPlay({ isPlaying: false }))
    }

    const _onError = (event) => {
    }

    // NOTE: Se ejecuta cada vez que cambia el estado de isPlaying
    useEffect(() => {
        if (isReady) {
            if (isPlaying) {
                handlePlay()
            } else {
                handlePause()
            }
        }
    }, [isPlaying, isReady])

    // NOTE: Se ejecuta cada vez que cambia el embebId
    useEffect(() => {
        if (!isLoading) {
            handleLoad(embedId)
        }
    }, [embedId])

    // NOTE: Se ejecuta cada vez que cambia el currentTime
    useEffect(() => {
        if (isReady) {
            if (ischangeTime) {
                player.seekTo(currentTime)
                dispatch(setChangeTime({ ischangeTime: false }))
            } else {
                if (isStarted) {
                    setTimeout(() => {
                        dispatch(setCurrentTime({ currentTime: player.getCurrentTime() }))
                    }, 100);
                }
            }
        }
        return () => {
            clearTimeout()
        }
    }, [currentTime, ischangeTime])

    // NOTE: Se ejecuta cada vez que cambia el volumen
    useEffect(() => {
        if (isReady && player) {
            isMuted ? player.mute() : player.unMute()
            player.setVolume(volume)
        }
    }, [volume, isMuted])


    const opts = {
        height: '200',
        width: '200',
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <YouTube
            videoId={embedId}
            opts={opts}
            className='video-responsive'
            id='iframe'
            onReady={_onReady}
            onPlay={_onPlay}
            onPause={_onPuse}
            onEnd={_onEnd}
            onError={_onError}
            onStateChange={_onStateChange}
            ref={EmbedRef}
        />
    )
}

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
}
