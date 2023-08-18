import { useEffect } from "react"
import { Navigation, Player, Side } from "./auxona/components"
import { navegacion } from "./auxona/libs"
import { AuxonaRoutes } from "./auxona/routes"
import './AuxonaApp.css'
import { useDispatch } from "react-redux"
import { getStarted } from "./store"

export const AuxonaApp = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStarted())
    }, [dispatch])

    return (
        <>
            <div className='wrapper'>
                <Navigation />
                <Side menu={navegacion} />
                <main className='main'>
                    <AuxonaRoutes />
                </main>
                <Player />
            </div>
        </>
    )
}
