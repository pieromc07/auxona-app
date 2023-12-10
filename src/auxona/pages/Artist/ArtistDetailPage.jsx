import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Cover } from './components/cover/Cover'
import { findById } from '../../../api/artist'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BoxRow, Card,  BoxColumn } from '../../components';
import { TrackTop } from './components/trackTop/TrackTop';
import 'react-tabs/style/react-tabs.css';
import './Tabs.css'
import './ArtistDetail.css'

export const ArtistDetailPage = () => {
  const { id } = useParams()
  const [artist, setArtist] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    findById(id).then((data) => {
      setArtist(data)
      setLoading(false)
    })
  }, [id])

  return (
    <>
      {
        loading ?
          <h1>Loading...</h1>
          :
          <div className="artist-detail">
            <div className="artist-detail__cover">
              <Cover {...artist} />
            </div>
            <div className="artist-detail__content">
              {/* tabs */}
              <Tabs>
                <TabList>
                  <Tab>Top Tracks</Tab>
                  <Tab>Albums</Tab>
                  <Tab>Related Artists</Tab>
                  <Tab>Playlists</Tab>
                </TabList>
                <TabPanel>
                  <div className="artist-detail__content__top-tracks">
                    <BoxRow title="Top Tracks">
                      {artist.tracks.map((track) => (
                        <TrackTop key={track.id} {...track} />
                      ))}
                    </BoxRow>
                    <BoxColumn title="Top Playlists">
                      {artist.playlist.map((playlist, index) => (
                        (index <= 8) &&
                        <Card key={playlist.id} image={playlist.picture_xl} title={playlist.title} />
                      ))}
                    </BoxColumn>
                  </div>

                </TabPanel>
                <TabPanel>
                  Albums
                </TabPanel>
                <TabPanel>
                  Related Artists
                </TabPanel>
                <TabPanel>
                  Playlists
                </TabPanel>
              </Tabs>
            </div>
          </div>
      }
    </>
  )
}
