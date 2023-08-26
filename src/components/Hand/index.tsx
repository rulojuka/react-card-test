import Card, { CardProps } from '../Card';

import { FC } from 'react';

interface HandProps {
    cards: Array<CardProps>;
}

const Hand: FC<HandProps> = ({ cards }) => {
    return (
        <div>
            <ol>
                {
                    cards.map(card => (
                        <li>
                            <Card suit={card.suit} rank={card.rank} />
                        </li>
                    ))
                }
            </ol>
        </div>
    )
};

export default Hand;