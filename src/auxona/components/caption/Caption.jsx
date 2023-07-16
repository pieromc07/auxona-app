import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import { Image } from '../image/Image'

import './Caption.css'
export const Caption = ({ image, name }) => {
    return (
        <Link className="caption">
            <Image src={image.src} alt={name} />
            <span className="caption__title">{name}</span>

        </Link>
    )
}
Caption.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }),
    name: PropTypes.string.isRequired
}
