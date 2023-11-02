import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes"
import { AuxonaRoutes } from "../auxona/routes"

export const AuxonaRouter = () => {
	return (
		<Routes>
			<Route path="/auth/*" element={<AuthRoutes />} />

			<Route path="/*" element={<AuxonaRoutes />} />
		</Routes>
	)
}
