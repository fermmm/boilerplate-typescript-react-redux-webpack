import * as React from 'react';

// @ts-ignore
import styles from './ErrorBoundary.scss';

interface State {
    error: Error;
    info: React.ErrorInfo;
}

export class ErrorBoundary extends React.Component<{}, State> {
    public state: State = {
        error: null,
        info: null,
    };

    public componentDidCatch(error: Error, info: React.ErrorInfo): void {
        this.setState({ error, info });
    }

    public render(): JSX.Element | {} {
        const { error, info }: { error: Error, info: React.ErrorInfo } = this.state;
        return error ? (
            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.message}>Something went wrong..</div>
                </div>

                <div className={styles.error}>{error.message}</div>
                <div className={styles.trace}>{info.componentStack}</div>
            </div>
        ) : (
                this.props.children
            );
    }
}
