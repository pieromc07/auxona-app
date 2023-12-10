import { PropTypes } from 'prop-types'
import './Favorite.css'
export const Favorite = (isfavorite) => {
    return (
        <div className="au--favorite-content">
            {isfavorite ?
                <button className='au--favorite active'>
                    <i className='bi bi-heart-fill'></i>
                </button>
                :
                <button className='au--favorite'>
                    <i className='bi bi-heart'></i>
                </button>
            }
        </div>
    )
}

Favorite.propTypes = {
    isfavorite: PropTypes.bool.isRequired
}
