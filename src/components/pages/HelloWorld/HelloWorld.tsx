import * as React from "react";
const styles: any = require("./HelloWorld.scss"); 

interface IProps { }

export class HelloWorld extends React.PureComponent<IProps> {
    public render(): JSX.Element {
        return (
            <h1 className={styles.helloWorld}> 
                This project is so beautiful at this point, take a picture of the code.
            </h1>
        );
    }
}
