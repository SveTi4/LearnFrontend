import { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increkejt = () => {
        setCount(count + 1);
    } 
    return (
        <div>
            <button onClick={increkejt}>Count {count}</button>
        </div>
    );
};