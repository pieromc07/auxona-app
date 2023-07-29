import { PropTypes } from 'prop-types'

import './BoxRow.css'



export const BoxRow = ({ title, children }) => {
    return (
        <div className="boxrow">
            <div className="boxrow__header">
                <h2 className="boxrow__header--title">{title}</h2>
                <button className="boxrow__header--button">See All</button>
            </div>
            <div className="boxrow__content">
                {children}
            </div>
        </div>
    )
}

BoxRow.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
