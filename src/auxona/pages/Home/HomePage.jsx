import { Banner, BoxColumn, BoxRow, Caption, Card } from "../../components"
import { AuxonaLayout } from "../../layout/AuxonaLayout"
import { dataBanner, dataBoxTopArtists, dataBoxGenres } from "../../libs"

import './Home.css'
export const HomePage = () => {
    return (
        <AuxonaLayout>
            <div className='home'>
                <Banner title={dataBanner.title} artist={dataBanner.artist} isfavorite={dataBanner.isFavorite} />
                <div className='home__content'>
                    <div className="home__content--box">
                        <div className="topArtists">
                            <BoxRow title={dataBoxTopArtists.title}>
                                {dataBoxTopArtists.artists.map((artist, index) => (
                                    <Card key={index} image={artist.image} title={artist.name} subtitle={artist.followers} />
                                ))}
                            </BoxRow>
                        </div>
                        <div className="topCharts">
                            <BoxColumn title={dataBoxTopArtists.title}>
                                {dataBoxTopArtists.artists.map((artist, index) => (
                                    <Card key={index} image={artist.image} title={artist.name} subtitle={artist.followers} />
                                ))}
                            </BoxColumn>
                        </div>
                        <div className="topGenres">
                            <BoxColumn title={dataBoxGenres.title}>
                                {dataBoxGenres.genres.map((genre, index) => (
                                    <Caption key={index} image={genre.image} name={genre.name} />
                                ))}
                            </BoxColumn>
                        </div>
                    </div>
                </div>
            </div>
        </AuxonaLayout >
    )
}
