import React from "react";

export class TestClient {

}

export interface ITestContext {
    userId: string;
}

export const TestContext = React.createContext<ITestContext>({
    userId: "test",
});


export function asyncFunction() {
    return Promise.resolve();
}