import * as React from "react";

interface IProps {}

export class HelloWorld extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    return (
            <h1 style={{textAlign: "center"}}> 
                Boilerplate works!... it's obvious already but you keep reading this text until it finishes right here.
            </h1>
        );
  }
}
