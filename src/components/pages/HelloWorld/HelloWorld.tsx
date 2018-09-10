import * as React from "react";
import { hot } from "react-hot-loader";
const styles: any = require("./HelloWorld.scss"); 

interface IProps { }
interface IState { }

class HelloWorld extends React.PureComponent<IProps, IState> {
    public render(): JSX.Element {
        return (
            <h1 className={styles.helloWorld}> 
                This project is so beautiful at this point, keep codig beautifully.
            </h1>
        );
    }
}

// You can add the "connect" function here to implement redux.
export default hot(module)(HelloWorld);
