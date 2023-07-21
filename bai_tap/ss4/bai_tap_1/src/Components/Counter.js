
import {useIncrement} from "../App";
export function Counter2(){
    const [count, increase] = useIncrement(2);
    return(
    <div style={{ textAlign: 'center' }}>
    <h2>COUNT 2: {count}</h2>
    <button  onClick={increase}>Add2</button>
    </div>)
}
export function Counter1(){
    const [count, increase] = useIncrement(1);
    return(
    <div style={{ textAlign: 'center' }}>
    <h2>COUNT 1: {count}</h2>
    <button onClick={increase}>Add1</button>
    </div>)
}
