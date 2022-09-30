import React from 'react';

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

const Board = () => {
    const arr = Array(10).fill(1);
    return (
        <ul className={'grid grid-cols-5 gap-2'}>
            {arr.map((item, index) => (
                <Cube key={index} num={item} />
            ))}
        </ul>
    );
};

export default Board;
