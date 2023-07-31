import React from "react";

export type LocationProps = {
    location: Location;
};

// as a hoc it starts with "with"
// with "P extends LocationProps" you ensure that a component which uses this hoc must have LocationProps as (part of) their props
export function withLocation<P extends LocationProps>(
    Component: React.ComponentType<P>
    // ensures that the returned class does not expect LocationProps as (part of) their props.
): React.ComponentClass<Omit<P, keyof LocationProps>> {
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

    // "as any" is needed because of the Omit in the return type declaration of the hoc. The component in the props of the hoc is expected to have LocationProps as (part of) their props,
    // but returned will be a component without LocationProps, because we set them ourselved and do not want them be set by another component.
    return WithLocation as any;
}