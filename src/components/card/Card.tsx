import React from "react";

type Props = { data: CardData };
export interface CardData {
	id: number;
	img: string;
	title: string;
	content: string;
	tags: string[];
	description: string;
	linkToSite: string;
}

const Card = ({ data }: Props) => {
	const { content, id, img, linkToSite, tags, title } = data;
	return (
		<a
			className="h-full cursor-pointer rounded-md z-10 overflow-hidden  bg-theme-slate-secondary items-center justify-start flex flex-col"
			href={linkToSite}
			target="_blank">
			<div className="w-80 h-36 overflow-hidden">
				<img src={`${img}`} className="object-cover" />
			</div>
			<div className="flex flex-col justify-between flex-1">
				<div className="p-4 w-80">
					<h3 className="text-left text-lg">{title}</h3>
					<div className="text-slate-400/90">{content}</div>
				</div>
				<div className="flex gap-2 flex-wrap p-4 w-80">
					{tags.map((item) => (
						<span className="p-1 px-2 text-center bg-theme-purple-primary font-bold text-xs rounded-full">
							{item}
						</span>
					))}
				</div>
			</div>
		</a>
	);
};

export default Card;
