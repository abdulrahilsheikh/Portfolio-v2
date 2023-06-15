import { PAGE_ID_CONST } from "../../constants/pageIdConstants";
import styles from "./MyJourney.module.scss";
type Props = { currRef?: any };

const RightCircle = ({ isNotFirst = null }: any) => (
	<div
		className={`absolute w-8 h-8 right-[0.6rem] md:right-[1.2rem] ${
			isNotFirst != null ? "top-16" : "top-0"
		} translate-x-1/2 -translate-y-1/2 bg-theme-slate-primary rounded-full flex items-center justify-center p-2`}>
		<div className="rounded-full w-full h-full bg-theme-purple-primary"></div>
	</div>
);
const LeftCircle = () => (
	<div
		className={
			"absolute  w-8 h-8 left-[0.6rem] md:left-[1.2rem] top-8 -translate-x-1/2 translate-y-1/2 bg-theme-slate-primary rounded-full flex items-center justify-center p-2"
		}>
		<div className="rounded-full w-full h-full bg-theme-purple-primary"></div>
	</div>
);
const MyJourney = ({ currRef }: Props) => {
	return (
		<div
			id={PAGE_ID_CONST.JOURNEY_PAGE}
			className="w-full px-2 md:p-0 h-auto flex flex-col items-center justify-center py-4 gap-4">
			<div className="flex justify-center">
				<div className="text-theme-purple-primary font-bold text-5xl underline my-4">
					My Journey
				</div>
			</div>
			<div
				className={`md:w-[50%]  h-full bg-theme-slate-secondary rounded-md text-white   ${styles.timelineContainer} py-8`}>
				<div className="bg-theme-slate-secondary relative ">
					<RightCircle />
					<div className={styles.borderConatainer}>
						<div className={styles.contentContainer}>
							<div className="py-4 pr-2">
								<div className=" font-bold underline underline-offset-2">
									High School
								</div>
								<div>2015-2016</div>
								<p>
									Completed my high school from SFS High
									School, Nagpur Maharashtra. It was the first
									time when i encounter coding bt didnt really
									emphasize on learning it.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className=" bg-theme-slate-secondary relative">
					<LeftCircle />
					<div className={styles.borderConatainer}>
						<div className={styles.contentContainer}>
							<div className="py-4 pl-12">
								<div className=" font-bold underline underline-offset-2">
									Dipoma in Mechanical Engineering
								</div>
								<div>2016-2019</div>
								<p>
									Completed my Diploma in Mechanical
									Engineering Anjuman Polytechnic, Nagpur
									Maharashtra. It was the Second time when i
									encounter coding but this time i fell in
									love coding. We had made a CNC Embroidery
									Machine for our final year project. And it
									took a lot of coding.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-theme-slate-secondary relative">
					<RightCircle isNotFirst />
					<div className={styles.borderConatainer}>
						<div className={styles.contentContainer}>
							<div className="py-4 pr-2">
								<div className=" font-bold underline underline-offset-2">
									Bachelor in Mechanical Engineering
								</div>
								<div>2019-2021</div>
								<p>
									Completed my Bachelor in Mechanical
									Engineering from Abha Gaikwad Patil College
									of Engineering, Nagpur Maharashtra. At this
									time i was playing a lot with Arduino UNO
									and Arduino Mega. Which requires programming
									in C/C++. Ive made may stuffs like a Mini
									Drum Machine using Arduino UNO, a CNC
									Router, a CNC Plasma Cutter etc.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-theme-slate-secondary relative">
					<LeftCircle />
					<div className={styles.borderConatainer}>
						<div className={styles.contentContainer}>
							<div className="py-4 pl-12">
								<div className=" font-bold underline underline-offset-2">
									First Tech Job - Coditas
								</div>
								<div>2021-Present</div>
								<p>
									Altough i am a Mechanical Enginner by heart
									but my love for coding and skills helped me
									to get into Tech as a front-end developer in
									React.JS and Next.JS
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyJourney;
