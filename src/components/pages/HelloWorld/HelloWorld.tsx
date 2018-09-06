import * as React from "react";
const styles: any = require("./HelloWorld.scss"); 

interface IProps { }

export class HelloWorld extends React.PureComponent<IProps> {
    public render(): JSX.Element {
        return (
            <h1 className={styles.helloWorld}> Boilerplate is working </h1>
        );
    }
}
