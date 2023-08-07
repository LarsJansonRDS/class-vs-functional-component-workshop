import { useEffect, useState } from "react";

// react-router-dom and wouter also have this hook, this (oversimplified) custom implementation is only for tutorial purposes
// as a hook its name has to start with "use"
export function useLocation() {
    // because it is a hook, we can use other hooks inside of it
    const [location, setLocation] = useState(window.location);

    useEffect(() => {
        setLocation(window.location);
    }, [window.location]);

    // return the result of the hook
    // a hook is not required to return anything
    return [location, setLocation];
}