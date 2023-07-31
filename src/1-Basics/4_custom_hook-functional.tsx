import { useState } from "react";

// as a hook its name has to start with "use"
export function useLocation() {
    // because it is a hook, we can use other hooks inside of it
    const [location, setLocation] = useState(window.location);

    // return the result of the hook
    // a hook is not required to return anything
    return [location, setLocation];
}