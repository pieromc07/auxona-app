import { PropTypes } from 'prop-types'

import './BoxColumn.css'
import { Link } from 'react-router-dom'

export const BoxColumn = ({ title, children }) => {
    return (
        <div className="boxcolumn">
            <div className="boxcolumn__header">
                <h2 className="boxcolumn__header--title">{title}</h2>
                <Link className="boxcolumn__header--button">See All</Link>
            </div>
            <div className="boxcolumn__content">
                {children}
            </div>
        </div>
    )
}
BoxColumn.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
