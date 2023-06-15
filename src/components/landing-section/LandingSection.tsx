import Lottie from "lottie-react";
import Wrapper from "../wrapper/Wrapper";
import LottieAnim from "../../assets/109119-coding-slide.json";
import { PAGE_ID_CONST } from "../../constants/pageIdConstants";
type Props = { currRef?: any };

const LandingSection = ({ currRef }: Props) => {
	return (
		<div
			id={PAGE_ID_CONST.HOME_PAGE}
			ref={currRef}
			className="flex flex-col justify-center items-center min-h-screen text-white border-b-2 ">
			<Wrapper className="w-full flex  items-center justify-center">
				<div className="w-full flex flex-col md:flex-row items-center">
					<div className="min-h-screen  flex-1 flex flex-col p-8 items-center md:items-start justify-center md:pl-40 ">
						<div className="text-gray-400 font-bold">HELLO I'M</div>
						<div className="text-4xl md:text-5xl">RAHIL SHEIKH</div>
						<div className="text-gray-400 ">
							Fullstack Web Developer
						</div>
						<div className="text-gray-400 ">
							Pune, Maharashtra, India
						</div>
						<div className="mt-4 flex gap-2 items-center">
							<div className="h-10 w-10 rounded-full bg-theme-purple-primary border-theme-slate-secondary border-2 hover:scale-110 transition-all cursor-pointer flex items-center justify-center">
								<i className="fa-brands fa-linkedin-in"></i>
							</div>
							<div className="h-10 w-10 rounded-full bg-theme-purple-primary border-theme-slate-secondary border-2 hover:scale-110 transition-all cursor-pointer flex items-center justify-center">
								<i className="fa-brands fa-github"></i>
							</div>
							<div className="h-10 w-10 rounded-full bg-theme-purple-primary border-theme-slate-secondary border-2 hover:scale-110 transition-all cursor-pointer flex items-center justify-center"></div>
						</div>
					</div>
					<div
						className="-top-16
                                         relative md:top-0 md:w-1/2">
						<Lottie animationData={LottieAnim} loop={true} />
					</div>
				</div>
			</Wrapper>
		</div>
	);
};

export default LandingSection;
