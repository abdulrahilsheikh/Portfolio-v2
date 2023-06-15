import { motion } from "framer-motion";
import { useState } from "react";
import { PAGE_ID_CONST } from "../../constants/pageIdConstants";
import style from "./BottomNav.module.scss";
const tabs = [
	{ id: PAGE_ID_CONST.HOME_PAGE, label: "Home" },
	{ id: PAGE_ID_CONST.ABOUT_PAGE, label: "About" },
	{ id: PAGE_ID_CONST.SKILLS_PAGE, label: "Skills" },
	{ id: PAGE_ID_CONST.PROJECT_PAGE, label: "Projects" },
	{ id: PAGE_ID_CONST.JOURNEY_PAGE, label: "My Journey" },
];

function AnimatedTabs({ visibleItem }: any) {
	const [Tab, setActiveTab] = useState(visibleItem);
	const activeTab = visibleItem;
	const scrollIntoView = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div
			className={`${style.backdrop} w-full sm:w-auto backdrop-blur-lg flex space-x-1 p-2  rounded-full `}>
			{tabs.map((tab) => (
				<button
					key={tab.id}
					onClick={() => {
						setActiveTab(tab.id);
						scrollIntoView(tab.id);
					}}
					className={`${
						activeTab === tab.id ? "" : "hover:text-white/60"
					} relative rounded-full px-3 py-0.5 sm:py-1.5  font-medium text-white  outline-sky-400 transition focus-visible:outline-2  text-xs  sm:text-sm`}
					style={{
						WebkitTapHighlightColor: "transparent",
					}}>
					{activeTab === tab.id && (
						<motion.span
							layoutId="bubble"
							className="absolute inset-0 z-10 bg-white mix-blend-difference"
							style={{ borderRadius: 9999 }}
							transition={{
								type: "spring",
								bounce: 0.2,
								duration: 0.6,
							}}
						/>
					)}
					<span className="mix-blend-difference ">{tab.label}</span>
				</button>
			))}
		</div>
	);
}

export default AnimatedTabs;
