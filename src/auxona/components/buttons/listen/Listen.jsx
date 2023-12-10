import { PropTypes } from 'prop-types'
import './Listen.css'
export const Listen = ({ text, icon }) => {
  return (
    <button className='au--listen'>
      <i className={icon}></i>
     <span>{text}</span>
    </button>
  )
}
Listen.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
