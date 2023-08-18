import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, PlayListDetailPage, PlayListPage } from "../pages"

export const AuxonaRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Albums */}
            <Route path="/album" element={<h1>Album</h1>} />
            <Route path="/album/:id" element={<h1>Album Detail</h1>} />

            {/* Playlist */}
            <Route path="/playlist" element={<PlayListPage />} />
            <Route path="/playlist/:id" element={<PlayListDetailPage />} />

            {/* Artist */}
            <Route path="/artist" element={<h1>Artist</h1>} />
            <Route path="/artist/:id" element={<h1>Artist Detail</h1>} />

            {/* Genre */}
            <Route path="/genre" element={<h1>Genre</h1>} />
            <Route path="/genre/:id" element={<h1>Genre Detail</h1>} />

            {/* Podcast */}
            <Route path="/podcast" element={<h1>Podcast</h1>} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
