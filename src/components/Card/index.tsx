import Rank from "../../model/Rank";
import Suit from "../../model/Suit";

import { FC } from 'react';

export interface CardProps {
    suit: Suit;
    rank: Rank;
}

const Card: FC<CardProps> = ({ suit, rank }) => {
    return <p>{rank.toString()} of {suit.toString()}</p>
};

export default Card;