import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { IStore, DispatchFunction } from '../../../redux/reducers';
import { CHANGE_HELLO_TEXT, CHANGE_HELLO_NUMBER } from '../../../redux/actions';

// @ts-ignore
import styles from './CompleteComponent.scss';

export interface ICompleteComponentProps extends Partial<RouteComponentProps<{}>> { 
    reduxTextLine: string;
    reduxNumber: number;
    onNewReduxText?(text: string): void;
    onNewReduxNumber?(newNumber: number): void;
}
export interface ICompleteComponentState { }

class CompleteComponent extends Component<ICompleteComponentProps & RouteComponentProps<{}>, ICompleteComponentState> {
    static defaultProps: Partial<ICompleteComponentProps> = {
        
    };

    public componentDidMount(): void {
        // Send stuff to redux only show that redux is working:
        this.props.onNewReduxText('And this second text line was stored and retreived from redux.');
        this.props.onNewReduxNumber(555);
    }

    public render(): JSX.Element {
        return (
            <div className={styles.completeComponent}>
                {/* Show the redux data. */} 
                It's working. <br />
                {this.props.reduxTextLine} <br />
                Also the following number: <br />
                {this.props.reduxNumber}
                <br />
                <button onClick={() => this.props.history.push('/simple/')}>
                    Show a more simple component.
                </button>
            </div>
        );
    }
}

/**
 * 
 * REDUX CONNECTORS. (Remove when redux is not needed)
 * 
 */
function mapStateToProps(state: IStore): Partial<ICompleteComponentProps> {
    return {
        reduxTextLine: state.completeComponentState.reduxTextLine,
        reduxNumber: state.completeComponentState.reduxNumber,
    };
}

function mapDispatchToProps(dispatch: DispatchFunction<string | number>): Partial<ICompleteComponentProps> {
    return {
        onNewReduxText: (text: string) => dispatch({type: CHANGE_HELLO_TEXT, payload: text}),
        onNewReduxNumber: (newNumber: number) => dispatch({type: CHANGE_HELLO_NUMBER, payload: newNumber}),
    };
}

export default connect<{}, {}, ICompleteComponentProps>(mapStateToProps, mapDispatchToProps)(hot(module)(withRouter(CompleteComponent)));
