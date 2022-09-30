import React from 'react';
import { DiceType } from './TenziesGame';

interface BoardProps {
    diceList: DiceType[];
    onDiceClick: (id: string) => void;
    tenzies: boolean;
    handleCloseClick: () => void;
}

const Cube = ({
    item,
    onDiceClick,
    tenzies,
}: {
    item: DiceType;
    onDiceClick: (id: string) => void;
    tenzies: boolean;
}) => {
    return (
        <div
            className={`py-3 px-4 border rounded shadow cursor-pointer font-bold text-center text-lg  transition ${
                tenzies && 'disabled:pointer-events-none'
            } ${item.isPressed && 'bg-green-300'}`}
            onClick={() => onDiceClick(item.id)}
        >
            {item.value}
        </div>
    );
};

const Board = ({
    diceList,
    onDiceClick,
    tenzies,
    handleCloseClick,
}: BoardProps) => {
    return (
        <ul className={'grid grid-cols-5 gap-2 relative'}>
            <li
                onClick={handleCloseClick}
                className={
                    'cursor-pointer absolute top-0 right-0 w-5 h-5 translate-x-8 -translate-y-6'
                }
            >
                <img src={'./assets/2circle.svg'} alt={'close btn'}/>
            </li>
            {diceList.map((item, index) => (
                <Cube
                    tenzies={tenzies}
                    key={item.id}
                    item={item}
                    onDiceClick={onDiceClick}
                />
            ))}
        </ul>
    );
};

export default Board;
