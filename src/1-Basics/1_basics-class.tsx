import React from "react";

import { TestClient } from "../utilities/misc";

type Props = {
    propsVar: string;
};

// the props type has to be given to React.Component, otherwise this.props is of type "any"
export class Basics extends React.Component<Props>{

    // every variable and function can get a private/protected/public member visibility
    // if none is given the member is public
    // private variables start with a underscore ("_")
    private readonly _variable = "Basic functional component";

    // clients and suchlike are declared inside the class body, but are defined in the constructor
    private _client: TestClient;

    // entry point
    constructor(props: Props) {
        super(props);

        this._client = new TestClient();

        // functions which are called in UI Elements need to be binded, otherwise "this" refers to the element itself
        this.functionWithFunctionDeclaration = this.functionWithFunctionDeclaration.bind(this);
    }

    public render(): React.ReactNode {
        // every class function/variable has to be called with "this."
        this.functionWithFunctionDeclaration();

        return <div>
            {this._variable}

            {this.props.propsVar}

            <button type="button" onClick={this.functionWithFunctionDeclaration} />
        </div>;
    }

    // functions are usually declared below the render method.
    protected functionWithFunctionDeclaration() {

    }

}
