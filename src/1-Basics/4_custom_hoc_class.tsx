import React from "react";

// the props which are needed by the classes which use this hoc
// the props are usually named like the hoc just with a capital letter and optionally end with "Props"
export type WithLocationProps = {
    location: Location;
};

// as a hoc it starts with "with"
// this hoc is only for tutorial purposes and does not fully work
export function withLocation<P extends WithLocationProps>(
    // with "React.ComponentType<P>" you ensure that the components which uses this hoc must have "WithLocationProps" as (part of) their props,
    // because of the generic constraint in the class declaration
    Component: React.ComponentType<P>
    // ensures that the returned class does not expect WithLocationProps as (part of) their props.
): React.ComponentClass<Omit<P, keyof WithLocationProps>> {
    class WithLocation extends React.Component<P> {
        static displayName: string;

        public render() {
            // return the component with the desired location props and the rest of the props, which are defined by the component itself
            return <Component
                {...this.props}
                location={window.location} />;
        }

    }

    // a display name for easier debugging
    WithLocation.displayName = `withLocation(${(Component.displayName || Component.name || 'Component')})`;

    // "as any" is needed because of the Omit in the return type declaration of the hoc. The component in the props of the hoc is expected 
    // to have "WithLocationProps" as (part of) their props, but returned will be a component without "WithLocationProps", because we set 
    // them ourselved and do not want them be set by another component.
    return WithLocation as any;
}
