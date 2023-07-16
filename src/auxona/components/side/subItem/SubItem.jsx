import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import './SubItem.css'

export const SubItem = ({icon, link}) => {
    return (
        <Link  className="side__item--subitem">
            <i className={icon}></i>
            <span>{link}</span>
        </Link>
    )
}

SubItem.defaultProps = {
    icon: 'bi bi-compass-fill',
    link: 'Explore'
}
SubItem.propTypes = {
    icon: PropTypes.string,
    link: PropTypes.string
}