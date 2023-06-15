import Lottie from "lottie-react";
import { PAGE_ID_CONST } from "../../constants/pageIdConstants";
import Wrapper from "../wrapper/Wrapper";
import animation from "../../assets/141720-coding.json";

const hobbies = [
	"Music",
	"Drawing",
	"DJ",
	"Playing Video Games",
	"Learning about new tech",
];
const About = () => (
	<div
		id={PAGE_ID_CONST.ABOUT_PAGE}
		className="flex flex-col justify-start items-center min-h-screen text-white border-b-2 ">
		<div className="text-center text-theme-purple-primary font-bold text-5xl underline my-8 md:my-12">
			About Me
		</div>
		<Wrapper className="w-full flex  items-start h-full justify-center">
			<div className="w-full h-full flex flex-col-reverse md:flex-row items-center">
				<div className="flex items-center justify-center sm:w-1/2 h-screen sm:h-auto">
					<div className=" relative md:top-0  sm:3/6 md:w-5/6 ">
						<Lottie animationData={animation} loop={true} />
					</div>
				</div>
				<div className=" h-screen sm:h-auto flex-1 flex flex-col p-2 px-4 sm:px-2 items-center md:items-start justify-center md:pl-40 ">
					<div className="text-gray-400 font-bold">
						I'M A INDIA BASED
					</div>
					<div className="text-4xl py-4 sm:py-0 md:text-5xl animate-pulse">
						FULLSTACK DEVELOPER
					</div>
					<div className="text-gray-400 ">
						Currently im working as an associate software developer
						in{" "}
						<span className="text-theme-purple-primary  animate-pulse">
							Coditas
						</span>
						Technologies Pune. I have experience in working with
						React.JS and Next.JS. I have completed my training in
						frontend development in Coditas. I have completed my{" "}
						<span className="text-theme-purple-primary  animate-pulse">
							Mechanical Enginnering
						</span>{" "}
						from RTMNU Nagpur.
					</div>
					<div className="text-gray-400 font-bold">Hobbies</div>
					<div className="text-gray-400 font-bold flex gap-2 flex-wrap justify-evenly sm:justify-start">
						{hobbies.map((item) => (
							<span className="text-white p-1 px-2 text-center bg-theme-purple-primary font-bold text-xs rounded-full">
								{item}
							</span>
						))}
					</div>
				</div>
			</div>
		</Wrapper>
	</div>
);

export default About;
