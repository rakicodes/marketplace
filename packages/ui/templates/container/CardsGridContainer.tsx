import React from "react";
import { ICardsContainer } from "../../types/props";
import Card from "../../organisms/Card";

const CardsGridContainer = ({ items }: ICardsContainer) => {
	return (
		<div className="flex flex-wrap gap-4">
			{items.length ? (
				items.map((item, i) => (
					<div
						key={i}
						className="grow md:grow-0 md:min-w-72">
						<Card
							content={item.content}
							images={item.images}
							id={item.id}
							handleClick={item.handleClick}
						/>
					</div>
				))
			) : (
				<p className="text-center">No listings found</p>
			)}
		</div>
	);
};

export default CardsGridContainer;
