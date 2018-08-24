import * as React from "react";

interface IProps { }

export class HelloWorld extends React.PureComponent<IProps> {
    public render(): JSX.Element {
        return (
            <h1 style={{ textAlign: "center" }}>
                Boilerplate works!... It's obvious already but you keep reading because
                you want to know what else is here to read, but it finishes here.
            </h1>
        );
    }
}
