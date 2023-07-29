import { Banner, BoxColumn, BoxRow, Card } from "../../components"
import { AuxonaLayout } from "../../layout/AuxonaLayout"
import { useChart } from "../../../hooks/useChart"
import './Home.css'

import { Link } from "react-router-dom"


export const HomePage = () => {

    const { artists, playlists, banner, isLoading } = useChart()

    return (
        <AuxonaLayout>
            {
                isLoading ?
                    <h1>Loading...</h1>
                    :
                    <div className='home'>
                        <Banner title={banner.title} artist={banner.artist} isfavorite={banner.isFavorite} />
                        <div className='home__content'>
                            <div className="home__content--box">
                                <div className="topArtists">
                                    <BoxRow title='Top Artists'>
                                        {artists.map((artist) => (
                                            (artist.position <= 6) &&
                                            <Link to={`/artist/${artist.id}`} key={artist.id}>
                                                <Card key={artist.id} image={artist.picture_xl} title={artist.name} subtitle={`Rank #${artist.position}`} />
                                            </Link>
                                        ))}
                                    </BoxRow>
                                </div>
                                <div className="topCharts">
                                    <BoxColumn title='
                                    Top Artists'>
                                        {artists.map((artist) => (
                                            <Card key={artist.id} image={artist.picture_xl} title={artist.name} subtitle={`Rank #${artist.position}`} />
                                        ))}
                                    </BoxColumn>
                                </div>
                                <div className="topPlaylists">
                                    <BoxRow title='Top Playlists'>
                                        {playlists.map((playlist, index) => (
                                            (index <= 5) &&
                                            <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
                                                <Card key={playlist.id} image={playlist.picture_xl} title={playlist.title} subtitle={`Tracks #${playlist.nb_tracks}`} />
                                            </Link>
                                        ))}
                                    </BoxRow>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </AuxonaLayout >
    )
}
