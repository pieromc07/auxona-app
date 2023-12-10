/* eslint-disable no-unused-vars */
import { Image } from '../image/Image'
import { PropTypes } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayer, setPlay } from '../../../store/reducers/player'
import banner from '../../../assets/images/banner.svg'

import './Banner.css'

export const Banner = ({ title, artist, isfavorite, song }) => {

  const { isPlaying } = useSelector(state => state.player)

  const dispatch = useDispatch()

  const handleListenNow = () => {
    if (isPlaying) {
      dispatch(setPlay({ isPlaying: false }))
      dispatch(getPlayer(song))
      setTimeout(() => {
        dispatch(setPlay({ isPlaying: true }))
      }, 2000);
    } else {
      dispatch(getPlayer(song))
      setTimeout(() => {
        dispatch(setPlay({ isPlaying: true }))
      }, 2000);
    }
  }

  return (
    <div className='banner'>
      <div className='banner__content'>
        <span className='banner__content__title'>
          Trending Now
        </span>
        <h1 className='banner__content__song'>
          {title}
        </h1>
        <span className='banner__content__artist'>
          {artist}
          <span className='banner__content__artist--plays'>
            1.2M Plays
          </span>
        </span>

        <div className='banner__content__buttons'>
          <button className='banner__content__buttons__play' onClick={handleListenNow}>
            Listen Now
          </button>
          { /*
                        isfavorite ?
                            <button className='banner__content__buttons__favorite active'>
                                <i className='bi bi-heart-fill'></i>
                            </button>
                            :
                            <button className='banner__content__buttons__favorite'>
                                <i className='bi bi-heart'></i>
                            </button>
                    */}
        </div>
      </div>
      <div className='banner__image'>
        <Image src={banner} alt='banner' />
      </div>
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  isfavorite: PropTypes.bool.isRequired,
  song: PropTypes.number.isRequired
}

