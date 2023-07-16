import { Image } from '../image/Image'
import { PropTypes } from 'prop-types'

import banner from '../../../assets/images/banner.svg'
import './Banner.css'

export const Banner = ({ title, artist, isfavorite }) => {
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
                    <button className='banner__content__buttons__play'>
                        Listen Now
                    </button>
                    {
                        isfavorite ?
                            <button className='banner__content__buttons__favorite active'>
                                <i className='bi bi-heart-fill'></i>
                            </button>
                            :
                            <button className='banner__content__buttons__favorite'>
                                <i className='bi bi-heart'></i>
                            </button>
                    }
                </div>
            </div>
            <div className='banner__image'>
                <Image src={banner} alt='banner' />
            </div>
        </div >
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    isfavorite: PropTypes.bool.isRequired
}

