import React from 'react';
import Board from './Board';

const TenziesGame = () => {
    return (
        <div>
            <div className={'flex flex-col justify-center items-center gap-6 p-10 max-w-xs rounded shadow-xl'}>
                <div className={'text-center'}>
                    <h1 className={'text-4xl font-bold'}>Tenzies</h1>
                    <p className={'text-center text-sm'}>
                        Roll until all dice are the same. Click each die to
                        freeze it at its current value between rolls.
                    </p>
                </div>
                <Board />
                <button
                    className={
                        ' bg-indigo-600 text-white font-bold px-8 py-2 rounded '
                    }
                >
                    Roll
                </button>
            </div>
        </div>
    );
};

export default TenziesGame;
