import { useDispatch, useSelector } from "react-redux";
import { addon, subon } from "../redux/slices/CounterSlice";

export default function Counter({couter, setCounter}) {
    
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => {
                dispatch(addon())
            }}>Increment</button>
            <button onClick={() => {
                dispatch(subon())
            }}>Decrement</button>           
        </>
    )
}