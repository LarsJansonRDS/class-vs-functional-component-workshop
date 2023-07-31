import React from "react";

import { ITestContext, TestContext } from "../utilities/misc";
import { LocationProps, withLocation } from "./4_custom_hoc_class";

// because we export the component with the "withLocation" hoc, our Props need to be (partly) the "LocationProps"
type Props = LocationProps & {
    // the props of the component, which are not the location props
};

// hoc = higher order component(s)
// they are a method to give specific addtional props to a component
// it is used, for example, when needing information about the current user or the current location, which can be needed by a bunch of different components 

// no export, because we export the component below the class inside the hoc
class Hoc extends React.Component<Props> {

    // for comparison to the "useContext" hook
    // to have access to the right context
    static contextType = TestContext;
    // to type the context 
    context!: ITestContext;

    public render(): React.ReactNode {
        return <div>
            {/* the location can be used because of the "withLocation" hoc */}
            {/* A component which uses this component does not have to (and is not allowed to) provide the location prop */}
            {this.props.location.href}

            {this.context.userId}
        </div>;
    }

}

// hoc usually start with "with" and, when used, need to be exported as default
export default withLocation(Hoc);
