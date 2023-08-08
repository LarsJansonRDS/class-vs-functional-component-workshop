import { useMemo } from "react";

import { TestClient } from "../utilities/misc";

type Props = {
    propsVar: string;
};

export function Basics(props: Props) {

    // because the component is a function, variables can be declared with const and let (for completion: also with var)
    const variable = "Basic functional component";

    // clients and suchlike are declared and defined at the same place with useMemo
    // useMemo is used, because otherwise the client is redefined in every render
    const _client = useMemo(() => new TestClient(), []);

    // functions can be declared in two ways and are usually declared above the return.
    function functionWithFunctionDeclaration() {

    }

    // const functions have to be declared before they are used
    const functionWithConstDeclaration = () => {

    };

    // You can call functions in the component itself
    functionWithConstDeclaration();
    functionWithFunctionDeclaration();

    return <div>
        {variable}

        {props.propsVar}

        {/* no binding necessary */}
        <button type="button" onClick={functionWithFunctionDeclaration} />
    </div>;
}
