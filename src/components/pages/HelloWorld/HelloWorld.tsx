import * as React from "react";

interface IProps { }

export class HelloWorld extends React.PureComponent<IProps> {
    public render(): JSX.Element {
        return (
            <h1 style={{ textAlign: "center" }}> Boilerplate is working </h1>
        );
    }
}
