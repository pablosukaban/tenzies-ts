import React from 'react';
import { DiceType } from './TenziesGame';

interface BoardProps {
    diceList: DiceType[];
    onDiceClick: (id: string) => void;
}

const Cube = ({
    item,
    onDiceClick,
}: {
    item: DiceType;
    onDiceClick: (id: string) => void;
}) => {
    return (
        <div
            className={`py-3 px-4 border rounded shadow cursor-pointer font-bold text-center text-lg  transition ${
                item.isPressed && 'bg-green-300'
            }`}
            onClick={() => onDiceClick(item.id)}
        >
            {item.value}
        </div>
    );
};

const Board = ({ diceList, onDiceClick }: BoardProps) => {
    return (
        <ul className={'grid grid-cols-5 gap-2'}>
            {diceList.map((item, index) => (
                <Cube key={item.id} item={item} onDiceClick={onDiceClick} />
            ))}
        </ul>
    );
};

export default Board;
