import { Fragment, useState } from "react";

const Counter = ()  => {

    const [counter, setCounter] = useState(1);

    const increaseCounter = () => {
        setCounter(counter+1)
    }

    const multiplyCounter = () => {
        setCounter(counter * 2)
    }

    return <Fragment>
        <div><p>I am a Counter and my Count is {counter}</p></div>
        <div><p><button onClick={increaseCounter}>Increase Counter by 1</button></p></div>
        <div><p><button onClick={multiplyCounter}>Multiply Counter by 2</button></p></div>
    </Fragment>

};
export default Counter;