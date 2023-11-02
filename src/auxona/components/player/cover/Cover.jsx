import { PropTypes } from 'prop-types'

export const Cover = ({ cover, title, artist }) => {
	return (
		<>
			<div className="player__cover--image">
				<img src={cover} alt={title} />
			</div>
			<div className="player__cover--info">
				<span className="cover__info--song">
					{title}
				</span>
				<span className="cover__info--artist">
					{artist}
				</span>
			</div>

		</>
	)
}

Cover.propTypes = {
	cover: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	artist: PropTypes.string.isRequired
}
