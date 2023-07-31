import { useContext, useEffect, useMemo, useRef, useState } from "react";

import { TestContext } from "../utilities/misc";
import { useLocation } from "./4_custom_hook-functional";

export function Hooks() {
    // hooks let you use different react features
    // Important: hooks can only be called inside the top level of a functional component or inside another hook
    // so if you, for example, make a utility function which uses at least one hook, the function itself must also be a hook
    // hooks have to start with "use"

    // a few examples of hooks

    const [stateVar, setStateVar] = useState(0);


    useEffect(() => {
        testRef.current++;

        setStateVar(10);
    }, []);


    // is not recalculated every render, only when the component is mounted AND after every time "stateVar" is updated
    // recommended for costly calculations
    const memorizedValue = useMemo(() => {
        return stateVar + 5;
    }, [stateVar]);


    // gets a specific context
    const context = useContext(TestContext);


    // react-router-dom and wouter also have this hook, the (simplified) custom implementation is only for tutorial purposes
    // is used to give a better comparison to hoc's in class component
    const history = useLocation();


    // does not change between different render cycles
    // can be changed like seen in the useEffect above
    const testRef = useRef(5);


    return <div>
        {testRef.current}

        {context.userId}
    </div>;
}
