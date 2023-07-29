import { PropTypes } from 'prop-types'

export const Control = ({ icon, control, handleControl }) => {

    const handleClick = () => {
        handleControl()
    }


    return (
        <button
            className={`controls__button controls__button--${control}`}
            onClick={handleClick}
        >
            <i className={icon}></i>
        </button>
    )
}

Control.propTypes = {
    icon: PropTypes.string.isRequired,
    control: PropTypes.string.isRequired,
    handleControl: PropTypes.func.isRequired
}
