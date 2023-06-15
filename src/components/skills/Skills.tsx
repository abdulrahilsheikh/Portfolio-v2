import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.scss";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html5.png";
import firebase from "../../assets/images/firebase.png";
import gitlab from "../../assets/images/gitlab.png";
import javascript from "../../assets/images/javascript.png";
import mongodb from "../../assets/images/mongodb.png";
import nextjs from "../../assets/images/nextjs.png";
import nodeJs from "../../assets/images/node-js.png";
import react from "../../assets/images/react.png";
import sass from "../../assets/images/sass.png";
import typescript from "../../assets/images/typescript.png";
import Wrapper from "../wrapper/Wrapper";
import { PAGE_ID_CONST } from "../../constants/pageIdConstants";

const data = [
	{ img: typescript, title: "Typescript", expertise: "8" },
	{ img: javascript, title: "Javascript", expertise: "9" },
	{ img: react, title: "React", expertise: "9" },
	{ img: nextjs, title: "Next.Js", expertise: "9" },
	{ img: css, title: "CSS", expertise: "9" },
	{ img: html, title: "HTML", expertise: "9" },
	{ img: sass, title: "SASS", expertise: "9" },
	{ img: nodeJs, title: "Node JS", expertise: "8" },
	{ img: gitlab, title: "Gitlab", expertise: "8" },
	{ img: firebase, title: "Firebase", expertise: "7" },
	{ img: mongodb, title: "MongoDb", expertise: "5" },
];
function Skills() {
	const ref: any = useRef([]);

	const className = {
		className: `transition-all relative opacity-1 translate-x-0 `,
	};
	useEffect(() => {
		if (ref.current) {
			const observer = new IntersectionObserver(
				(entry) => {
					entry.forEach((a) => {
						a.target.classList.toggle(
							"opacity-0",
							!a.isIntersecting
						);
						a.target.classList.toggle(
							"-translate-x-full",
							!a.isIntersecting
						);
					});
				},
				{
					root: null,
					rootMargin: "0px",
					threshold: 0,
				}
			);

			const doc: any = document.querySelectorAll(".skillItem");
			doc.forEach((element: any) => {
				observer.observe(element);
			});
		}
	}, [ref]);
	return (
		<div id={PAGE_ID_CONST.SKILLS_PAGE} className="flex justify-center">
			<Wrapper className="flex items-center justify-center w-full">
				<div className={`w-full md:w-auto px-4`}>
					<div className="text-center text-theme-purple-primary font-bold text-5xl underline my-4 md:my-12">
						My Skills
					</div>
					<div
						className={`styles.skillSection grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 `}>
						{data.map((a, idx) => (
							<div
								key={"skill " + idx}
								ref={(e) => {
									ref.current[idx] = e;
								}}
								id={"skill" + idx}
								className={`skillItem justify-self-center w-full h-56 md:w-40  relative transition-all opacity-0  m-0 mt-4 mb-8 overflow-hidden rounded-md bg-theme-slate-secondary p-2 ${styles.isVisible}`}>
								<div
									className={`${styles.container} text-theme-purple-primary hover:text-white flex flex-col items-center justify-between h-full`}>
									<div className={styles.background}></div>
									<div
										className={
											styles["ag-courses-item_title"]
										}>
										{a.title}
									</div>
									<div className={styles.imageContainer}>
										<img
											className={styles.image}
											src={a.img}
											alt={a.title}
										/>
									</div>
									<p
										className={
											styles["ag-courses-item_date-box"]
										}>
										Rating : {a.expertise} / 10
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Wrapper>
		</div>
	);
}

export default Skills;
