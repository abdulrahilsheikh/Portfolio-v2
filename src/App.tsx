import { useEffect, useRef } from "react";
import "./App.css";
import MyJourney from "./components/my-journey/MyJourney";
import BottomNav from "./components/bottom-nav/BottomNav";
import LandingSection from "./components/landing-section/LandingSection";
import Projects from "./components/projects/Projects";
import { useIntersection } from "./hooks/useIntersectionObserver";
import AnimatedMarque from "./components/animated-marque/AnimatedMarque";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";

function App() {
	const { ref, visibleItem, scrollHandler } = useIntersection({
		threshold: 0.75,
	});
	useEffect(() => {
		scrollHandler();
		document.onscroll = scrollHandler;
	}, []);

	return (
		<div
			ref={ref}
			onScroll={scrollHandler}
			className="bg-theme-slate-primary ">
			<LandingSection />
			<AnimatedMarque />
			<About />
			<Skills />
			<Projects />
			<MyJourney />
			<div className="z-10 fixed  right-1/2 translate-x-1/2 bottom-2 flex items-end justify-center px-2">
				<BottomNav visibleItem={visibleItem} />
			</div>
		</div>
	);
}

export default App;
