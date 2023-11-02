import { useEffect, useState } from "react";
import { Navigation, Player, Side } from "./auxona/components";
import { navegacion } from "./auxona/libs";
import { AuxonaRoutes } from "./auxona/routes";
import { useDispatch } from "react-redux";
import { getStarted } from "./store";

import "./AuxonaApp.css";

export const AuxonaApp = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getStarted());
	}, [dispatch]);
	const [sideShow, setSideShow] = useState(false);

	const handleSideShow = () => {
		setSideShow(!sideShow);
	};

	const [showPlayer, setShowPlayer] = useState(false);

	const handleShowPlayer = () => {
		setShowPlayer(!showPlayer);
	};

	return (
		<>
			<div className={`wrapper ${showPlayer ? "wrapper--player" : ""}`}>
				<Navigation sideShow={handleSideShow} />
				<Side menu={navegacion} show={sideShow} sideShow={handleSideShow} />
				<main className="main">
					<AuxonaRoutes />
				</main>
				<Player show={showPlayer} setShow={handleShowPlayer} />
			</div>
		</>
	);
};
