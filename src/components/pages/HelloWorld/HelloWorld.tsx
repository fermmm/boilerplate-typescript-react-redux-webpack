import * as React from "react";

interface IProps {}

export class HelloWorld extends React.PureComponent<IProps> {
  public render() {
    return <h1>Hello World!</h1>;
  }
}
