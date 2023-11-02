import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { Avatar } from "./avatar/Avatar"

import './Navigation.css'

export const Navigation = ({ sideShow }) => {
	return (
		<div className='navigation'>
			<ul className='navigation__list'>
				<Link to="/" className='navigation__list__item active'>Music</Link>
				<Link to="/podcast" className='navigation__list__item'>Podcast</Link>
				{/* <li className='navigation__list__item'>Live</li> */}
			</ul>
			<button className='navigation__button' onClick={sideShow}>
				<i className="bi bi-list"></i>
			</button>
			<div className='navigation__search'>
				<div className='navigation__search__icon'>
					<i className="bi bi-search"></i>
					<input type="text" placeholder='Type here to search' className='navigation__search__input' />
				</div>
			</div>
			<div className='navigation__avatar'>
				<Avatar />
			</div>
		</div>
	)
}

Navigation.propTypes = {
	sideShow: PropTypes.func.isRequired
}
