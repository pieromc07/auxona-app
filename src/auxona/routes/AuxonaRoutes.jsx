import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages"

export const AuxonaRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
