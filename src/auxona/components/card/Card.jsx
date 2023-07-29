import { PropTypes } from 'prop-types'
import { Image } from '../image/Image'
import './Card.css'

export const Card = ({ image, title, subtitle }) => {
    return (
        <div className="card">
            <div className="card__image">
                <Image src={image} alt={title} />
            </div>
            <div className="card__content">
                <h3 className="card__content--title">
                    {title.length > 10 ? title.substring(0, 10) + '...' : title}
                </h3>
                <span className="card__content--subtitle">{subtitle}</span>
            </div>
        </div>
    )
}
Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.any.isRequired
}
