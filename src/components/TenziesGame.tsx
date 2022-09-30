import React, { useState } from 'react';
import Board from './Board';
import { v4 as uuidv4 } from 'uuid';

export type DiceType = {
    id: string;
    value: number;
    isPressed: boolean;
};

function getDiceItem(): DiceType {
    const val = Math.ceil(Math.random() * 6);
    return {
        id: uuidv4(),
        value: val,
        isPressed: false,
    };
}

function makeBoardValues() {
    const max = 10;
    const result = [];
    for (let i = 0; i < max; i++) {
        const item = getDiceItem();
        result.push(item);
    }
    return result;
}

const TenziesGame = () => {
    const [diceList, setDiceList] = useState(makeBoardValues());

    const handleButtonClick = () => {
        setDiceList(makeBoardValues());
    };
    return (
        <div>
            <div
                className={
                    'flex flex-col justify-center items-center gap-6 p-10 max-w-xs rounded shadow-xl'
                }
            >
                <div className={'text-center'}>
                    <h1 className={'text-4xl font-bold'}>Tenzies</h1>
                    <p className={'text-center text-sm'}>
                        Roll until all dice are the same. Click each die to
                        freeze it at its current value between rolls.
                    </p>
                </div>
                <Board diceList={diceList} />
                <button
                    className={
                        ' bg-indigo-600 text-white font-bold px-8 py-2 rounded '
                    }
                    onClick={handleButtonClick}
                >
                    Roll
                </button>
            </div>
        </div>
    );
};

export default TenziesGame;
