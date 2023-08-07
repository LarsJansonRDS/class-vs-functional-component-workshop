import React from "react";

import { asyncFunction } from "../utilities/misc";

type State = {
    stateVar: string;
};

// the state type has to be given to React.Component, otherwise this.state is of type "any"
// if there is no prop type "{}" can be used
export class LifeCyclesAndState extends React.Component<{}, State>{

    // is the first method which gets called
    // if there is no prop type "any" can be used
    // "super(props)" has always to be called first
    constructor(props: any) {
        super(props);

        // the state has to be initilized here
        this.state = {
            stateVar: "stateVar"
        };
    }

    // is called when the component is mounted, or in other words: when the component is created and inserted into the DOM
    // lifecycle methods can be async
    public async componentDidMount(): Promise<void> {
        // if you want to change the state, it has to be changed this way, NOT with "this.state = {}
        // inside the "setState" any number of state variables can be set/updated
        // there is no rerender if the old and updated state are the same
        this.setState({
            stateVar: ""
        }, () => {
            // gets executed after the state has changed
        });


        await asyncFunction();
    }

    // is called when props or the state were updated
    // "prevProps" and "prevState" are the props/state before the update
    // in functional components you need to track the prevProps yourself if needed, "useRef" is a good option for it
    public componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>): void {

    }

    // is called when the component gets unmounted/removed from the DOM
    public componentWillUnmount(): void {

    }

    // is called every render cycle
    public render(): React.ReactNode {
        return <div>
            {this.state.stateVar}
        </div>;
    }

}
