import { Component } from 'react';

function withLogging(WrappedComponent) {
    class WithLogging extends Component {

        componentDidMount() {
            console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is going to unmount`);
        }
    }

    WithLogging.displayName = `withLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithLogging;
}

export default withLogging;
