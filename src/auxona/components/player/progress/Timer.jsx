import { PropTypes } from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'

export const Timer = ({ timer }) => {

    const [time, setTime] = useState('')

    const handleTimer = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time - minutes * 60)
        setTime(`${minutes}:${seconds}`)
    }

    useEffect(() => {
        handleTimer(timer)
    }, [timer])

    return (
        <span className="player__progress--timer">
            {time}
        </span>
    )
}

Timer.propTypes = {
    timer: PropTypes.number.isRequired
}
