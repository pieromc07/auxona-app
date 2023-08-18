import { Banner, BoxColumn, BoxRow, Card } from "../../components"
import './Home.css'
import { Link } from "react-router-dom"
import { CardPlay } from "../../components/cardPlay/CardPlay"
import { useSelector } from "react-redux"


export const HomePage = () => {

    const {
        banner,
        artists,
        playlists,
        tracks,
        isLoading
    } = useSelector(state => state.chart)

    return (
        <>
            {
                isLoading ?
                    <h1>Loading...</h1>
                    :
                    <div className='home'>
                        <Banner title={banner.title} artist={banner.artist} isfavorite={banner.isFavorite} song={banner.id} />
                        <div className='home__content'>
                            <div className="home__content--box">
                                <div className="content__box--60">

                                    <BoxRow title='Top Artists'>
                                        {artists.map((artist) => (
                                            (artist.position <= 7) &&
                                            <Link to={`/artist/${artist.id}`} key={artist.id}>
                                                <Card key={artist.id} image={artist.picture_xl} title={artist.name} subtitle={`Rank #${artist.position}`} />
                                            </Link>
                                        ))}
                                    </BoxRow>


                                    <BoxRow title='Top Playlists'>
                                        {playlists.map((playlist, index) => (
                                            (index <= 6) &&
                                            <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
                                                <Card key={playlist.id} image={playlist.picture_xl} title={playlist.title} subtitle={`Tracks #${playlist.nb_tracks}`} />
                                            </Link>
                                        ))}
                                    </BoxRow>

                                </div>
                                <div className="content__box--40">
                                    <BoxColumn title='
                                    Top Artists'>
                                        {tracks.map((track) => (
                                            (track.position <= 8) &&
                                            <CardPlay key={track.id} track={track} />
                                        ))}
                                    </BoxColumn>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>

    )
}
