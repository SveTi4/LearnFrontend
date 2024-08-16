import { useState } from 'react';
import classNames from'./Counter.module.scss';
export const Counter = () => {
    const [count, setCount] = useState(0);
    console.log(classNames)
    const increkejt = () => {
        setCount(count + 1);
    } 
    return (
        <div>
            <button className={classNames.btn} onClick={increkejt}>Count {count}</button>
        </div>
    );
};