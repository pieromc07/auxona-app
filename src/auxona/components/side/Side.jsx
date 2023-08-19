import { PropTypes } from 'prop-types'
import { Item } from "./item/Item"

import './Side.css'

export const Side = ({ menu, show, sideShow }) => {

    return (
        <nav className={`side ${show ? 'show' : 'hide'}`}>	
            <div className='side__title'>
                <i className="bi bi-soundwave"></i>
                <span className='side__title--text'>Auxona</span>
                <button className='side__title--button' onClick={sideShow}>
                    <i className="bi bi-x"></i>
                </button>
            </div>
            <div className="side__menu">
                {
                    menu.map((item, index) => (
                        <Item key={index} title={item.title} subItems={item.subItems} />
                    ))
                }
            </div>

        </ nav>
    )
}

Side.defaultProps = {
    menu: []
}

Side.propTypes = {
    menu: PropTypes.array,
    show: PropTypes.bool.isRequired,
    sideShow: PropTypes.func.isRequired
}
