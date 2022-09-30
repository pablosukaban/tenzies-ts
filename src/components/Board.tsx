import React from 'react';
import { DiceType } from './TenziesGame';

interface BoardProps {
    diceList: DiceType[];
}

const Cube = ({ num }: { num: number }) => {
    return (
        <div
            className={
                'py-3 px-4 border rounded shadow cursor-pointer font-bold text-center text-lg hover:animate-pulse'
            }
        >
            {num}
        </div>
    );
};

const Board = ({ diceList }: BoardProps) => {
    return (
        <ul className={'grid grid-cols-5 gap-2'}>
            {diceList.map((item, index) => (
                <Cube key={item.id} num={item.value} />
            ))}
        </ul>
    );
};

export default Board;
