import { AnimatePresence, motion, usePresence } from "framer-motion";
import { useState } from "react";
import Card from "../card/Card";
import * as projects from "../../assets/projectsList.json";
import { PAGE_ID_CONST } from "../../constants/pageIdConstants";
type Props = { currRef?: any };
const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };
function ListItem({ children, onClick, color }: any) {
	const [isPresent, safeToRemove] = usePresence();

	const animations: any = {
		layout: true,
		initial: "out",
		style: {
			position: isPresent ? "static" : "absolute",
		},
		animate: isPresent ? "in" : "out",
		whileTap: "tapped",
		whileHover: "hover",
		variants: {
			in: {
				scale: 1,
				opacity: 1,
				zIndex: 10,
				transition: { duration: 0.5 },
			},
			out: {
				scale: 0,
				opacity: 0,
				zIndex: -1,
				transition: { duration: 0.5 },
			},
			tapped: {
				scale: 0.98,
				opacity: 0.5,
				transition: { duration: 0.25 },
			},
			hover: {
				scale: 1.05,
				zIndex: 1000,
				transition: { duration: 0.25 },
			},
		},
		onAnimationComplete: () => !isPresent && safeToRemove(),
		transition,
	};

	return <motion.h2 {...animations}>{children}</motion.h2>;
}

const Projects = ({ currRef }: Props) => {
	const [items, setItems] = useState(projects.projects);
	const onClick = (type: "all" | "per" | "pro") => {
		switch (type) {
			case "all":
				setItems(projects.projects);
				return;
			case "per":
				setItems(projects.projects.filter((i) => i.id % 2 == 0));
				return;
			case "pro":
				setItems(projects.projects.filter((i) => i.id % 2));
				return;
		}
	};
	return (
		<div
			id={PAGE_ID_CONST.PROJECT_PAGE}
			ref={currRef}
			className="flex flex-col min-h-screen items-center p-4 text-white gap-4">
			<div className="text-theme-purple-primary font-bold text-5xl underline my-4">
				My Projects
			</div>
			<div className="flex gap-4 mb-4">
				<button
					onClick={() => onClick("all")}
					className="p-2 flex items-center bg-theme-purple-primary rounded">
					ALL
				</button>
				<button
					onClick={() => onClick("per")}
					className="p-2 flex items-center bg-theme-purple-primary rounded">
					Personal
				</button>
				<button
					onClick={() => onClick("pro")}
					className="p-2 flex items-center bg-theme-purple-primary rounded">
					Professional
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10 gap-4 grid-flow-row">
				<AnimatePresence>
					{items.map((data, i) => (
						<ListItem key={data.id}>
							<Card data={data} />
						</ListItem>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Projects;
