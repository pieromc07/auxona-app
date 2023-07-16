import { PropTypes } from 'prop-types'

export const Image = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
        />
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}