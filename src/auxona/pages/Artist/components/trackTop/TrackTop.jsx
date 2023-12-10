import { PropTypes } from 'prop-types'
import './TrackTop.css'
import { useState } from 'react'

export const TrackTop = ({ title, md5_image }) => {

    const [play, setPlay] = useState(false)
    const [isfavorite, setIsfavorite] = useState(false)

    return (
        <div className='au--tracktop'>
            <div className='au--tracktop--content'>
                <div className='au--tracktop--content__image'>
                    <img src={`https://e-cdns-images.dzcdn.net/images/cover/${md5_image}/1000x1000-000000-80-0-0.jpg`} alt={title} />
                </div>
                <div className='au--tracktop--content__info'>
                    <h3 className='au--tracktop--content__info--title'>{title}</h3>
                </div>
                <div className='au--tracktop--content__action'>
                    {!isfavorite ?
                        <button className='au--tracktop--content__action--button' onClick={() => setIsfavorite(!isfavorite)}>
                            <i className='bi bi-heart'></i>
                        </button>
                        :
                        <button className={`au--tracktop--content__action--button ${isfavorite ? 'active' : ''}`} onClick={() => setIsfavorite(!isfavorite)}>
                            <i className='bi bi-heart-fill'></i>
                        </button>
                    }
                    {!play ?
                        <button className='au--tracktop--content__action--button' onClick={() => setPlay(!play)}>
                            <i className='bi bi-play-fill play'></i>
                        </button>
                        :
                        <button className='au--tracktop--content__action--button play' onClick={() => setPlay(!play)}>
                            <i className='bi bi-pause-fill'></i>
                        </button>
                    }
                    <button className='au--tracktop--content__action--button'>
                        <i className='bi bi-three-dots'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

TrackTop.propTypes = {
    title: PropTypes.string.isRequired,
    md5_image: PropTypes.string.isRequired
}
