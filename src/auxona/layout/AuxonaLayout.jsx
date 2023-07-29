import { PropTypes } from 'prop-types'
import { Navigation, Side, Player } from '../components'
import { navegacion } from '../libs'
import './AuxonaLayout.css'


export const AuxonaLayout = ({ children }) => {
    return (
        <div className='wrapper'>
            <Navigation />
            <Side menu={navegacion} />
            <main className='main'>
                {children}
            </main>
            <Player />
        </div>
    );
}

AuxonaLayout.propTypes = {
    children: PropTypes.node.isRequired
}