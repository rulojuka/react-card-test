import { FC } from 'react';
import Rank from "../../model/Rank";
import Suit from "../../model/Suit";

export interface CardProps {
    suit: Suit;
    rank: Rank;
}

const Card: FC<CardProps> = ({ suit, rank }) => {
    const baseFolder = "img/cards/"
    const cardName = suit.symbol + rank.symbol.toLowerCase()
    const extension = ".png"
    const finalFilename = baseFolder + cardName + extension
    const altText = rank.name + " of " + suit.name.toLowerCase()

    return (
        <div>
            <p>{rank.toString()} of {suit.toString()}</p>
            <img src={process.env.PUBLIC_URL + finalFilename} alt={altText} />
        </div>
    )
};

export default Card;
