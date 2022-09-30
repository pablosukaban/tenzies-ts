import React, { useState, useEffect } from 'react';
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
    const [tenzies, setTenzies] = useState(false);

    const handleButtonClick = () => {
        if (tenzies) {
            setDiceList(makeBoardValues());
            setTenzies(false);
        } else {
            const filtered = diceList.map((item) =>
                item.isPressed ? item : getDiceItem()
            );
            setDiceList(filtered);
        }
    };

    const handleDiceClick = (id: string) => {
        const newList = diceList.map((item) =>
            item.id === id ? { ...item, isPressed: !item.isPressed } : item
        );
        setDiceList(newList);
    };

    const handleCloseClick = () => {
        const notPressed = diceList.map((item) => ({
            ...item,
            isPressed: false,
        }));
        setDiceList(notPressed);
    };

    useEffect(() => {
        const someVal = diceList[0].value;
        const allPressed = diceList.every((item) => item.isPressed === true);
        const allEqual = diceList.every((item) => item.value === someVal);
        if (allPressed && allEqual) setTenzies(true);
    }, [diceList]);

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
                        Бросайте до тех пор, пока все кубики не станут
                        одинаковыми. Нажмите на каждый кубик, чтобы заморозить
                        его текущее значение между бросками.
                    </p>
                </div>
                <Board
                    tenzies={tenzies}
                    diceList={diceList}
                    onDiceClick={handleDiceClick}
                    handleCloseClick={handleCloseClick}
                />
                <button
                    className={
                        'border-2 border-indigo-600 text-indigo-600 hover:text-white hover:bg-indigo-600 px-8 py-2 rounded active:bg-indigo-500 transition'
                    }
                    onClick={handleButtonClick}
                >
                    {tenzies ? 'Новая игра' : 'Бросить еще раз'}
                </button>
            </div>
        </div>
    );
};

export default TenziesGame;
