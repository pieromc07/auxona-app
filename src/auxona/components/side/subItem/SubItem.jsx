import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import './SubItem.css'

export const SubItem = ({ icon, link, url }) => {
	return (
		<Link to={url} className="side__item--subitem">
			<i className={icon}></i>
			<span>{link}</span>
		</Link>
	)
}

SubItem.defaultProps = {
	icon: 'bi bi-compass-fill',
	link: 'Explore',
	url: '/'
}
SubItem.propTypes = {
	icon: PropTypes.string,
	link: PropTypes.string,
	url: PropTypes.string
}