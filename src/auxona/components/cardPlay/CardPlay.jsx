import { PropTypes } from 'prop-types'

import './CardPlay.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayer, setPlay } from '../../../store/reducers/player'

export const CardPlay = ({ track }) => {

	const dispatch = useDispatch()

	const { isPlaying } = useSelector(state => state.player)

	const handlePlay = () => {
		if (isPlaying) {
			dispatch(setPlay({ isPlaying: false }))
			dispatch(getPlayer(track.id))
			setTimeout(() => {
				dispatch(setPlay({ isPlaying: true }))
			}, 2000);
		} else {
			dispatch(getPlayer(track.id))
			setTimeout(() => {
				dispatch(setPlay({ isPlaying: true }))
			}, 2000);
		}
	}

	return (
		<div className="cardPlay">
			<div className="cardPlay__content">
				{/* Image */}
				<div className="cardPlay__content--image">
					<img src={track.album.cover_xl} alt={track.title} />
				</div>
				{/* Description */}
				<div className="cardPlay__content--description">
					<h3 className="cardPlay__content--description-title">
						{track.title}
					</h3>
					<span className="cardPlay__content--description-subtitle">{track.artist.name}</span>
				</div>
				{/* Play */}
				<div className="cardPlay__content--play">
					<button className="cardPlay__content--play-button" onClick={handlePlay}>
						<i className="bi bi-play-fill"></i>
					</button>
				</div>


			</div>
		</div>
	)
}

CardPlay.propTypes = {
	track: PropTypes.object.isRequired
}