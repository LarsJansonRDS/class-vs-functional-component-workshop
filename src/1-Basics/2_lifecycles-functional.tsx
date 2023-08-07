import { useEffect, useState } from "react";

import { asyncFunction } from "../utilities/misc";

export function LifeCyclesAndState() {

    // creates a state variable with the inital value "initialValue" and therefore is implicitly typed as string
    // stateVar is the name of the state variable and setStateVar is the name of function to change/update the state
    const [stateVar, setStateVar] = useState("initialValue");


    // creates a state variable with the type string (or undefined) and no initial value
    // without an inital value the type is always also "undefined"
    const [testVar, setTestVar] = useState<number>();


    // useEffect: the second argument determines when the given function is called
    // multiple useEffects are executed in order from top to bottom

    // because of [] as the second argument:
    //      is called when the component is mounted
    //      equivalent to componentDidMount
    useEffect(() => {
        // there is no rerender if the old and updated state are the same
        setStateVar("new value");


        // useEffect must not be async. To use await you have to use an async function which you can call just after the declaration
        async function wrapperFunction() {
            await asyncFunction();
        }

        wrapperFunction();


        // a return in a useEffect will be called when the component is unmounted
        // equivalent to componentWillUnmount
        return () => {

        };
    }, []);


    // because no second argument is given:
    //      will be called when the component is mounted AND after every update
    //      equivalent to componentDidMount + componentDidUpdate
    useEffect(() => {

    });


    // because of [testVar] as the second argument:
    //      is called when the component is mounted AND after every time the variable given in the array has changed
    //      partly a equivalent to componentDidMount + the callback function from setState in class components
    useEffect(() => {
        // with a function call inside a state setter function you can access the value of the variable before it was changed
        setTestVar((prevTestVar) => (prevTestVar ?? 0) + 5);
    }, [testVar]);


    // is called every render cycle
    return <div>
        {stateVar}
    </div>;

}
