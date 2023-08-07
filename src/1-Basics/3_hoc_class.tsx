import React from "react";

import { ITestContext, TestContext } from "../utilities/misc";
import { WithLocationProps, withLocation } from "./4_custom_hoc_class";

// hoc = higher order component(s)
// they are a method to give specific addtional props to a component
// it is used when a bunch of different components need the same information, e.g. information about the current user or the current location 

// because we export the component with the "withLocation" hoc, our Props need to be (partly) the "WithLocationProps"
type Props = WithLocationProps & {
    // the props of the component, which are not the location props
};

// no export, because we export the component below the class inside the hoc
class ClassWhichUsesAHoc extends React.Component<Props> {

    // for comparison to the "useContext" hook
    //
    // to have access to the right context
    static contextType = TestContext;
    // to type the context 
    context!: ITestContext;
    //

    public render(): React.ReactNode {
        return <div>
            {/* the location can be used because of the "withLocation" hoc, because it is part of the "WithLocationProps" */}
            {/* A component which uses this component does not have to (and is not allowed to) provide the location props */}
            {this.props.location.href}

            {this.context.userId}
        </div>;
    }

}

// hoc's usually start with "with" and the classes which use hoc's need to be exported as default
// this used hoc is only for tutorial purposes and does not fully work
export default withLocation(ClassWhichUsesAHoc);
