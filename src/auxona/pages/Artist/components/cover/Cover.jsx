import { PropTypes } from 'prop-types'
import './Cover.css'
import { numberToSting } from '../../../../libs/convert'
import { Action } from '../action/Action'
export const Cover = ({ picture_xl, nb_fan, name }) => {
  return (
    <div className="cover">
      <div className="cover__image">
        <img src={picture_xl} alt="cover" />
      </div>
      <div className="cover__info">
        <h1 className="cover__info__title">{name}</h1>
        <p className="cover__info__fans">
          {numberToSting(nb_fan)} fans
        </p>
        <Action />
      </div>
    </div>
  )
}

Cover.propTypes = {
  name: PropTypes.string.isRequired,
  picture_xl: PropTypes.string.isRequired,
  nb_fan: PropTypes.number.isRequired
}
