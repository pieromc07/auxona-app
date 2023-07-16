import { PropTypes } from 'prop-types'
import { Item } from "./item/Item"

import './Side.css'

export const Side = ({ menu }) => {

    return (
        <nav className='side'>
            <div className='side__title'>
                <i className="bi bi-soundwave"></i>
                <span className='side__title--text'>Auxona</span>
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
    menu: PropTypes.array
}
