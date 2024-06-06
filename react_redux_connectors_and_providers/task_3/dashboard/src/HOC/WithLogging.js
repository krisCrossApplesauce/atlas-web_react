import { Component } from 'react';

function WithLogging(WrappedComponent) {
    class withLogging extends Component {

        componentDidMount() {
            console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is going to unmount`);
        }
    }

    withLogging.displayName = `withLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return withLogging;
}

export default WithLogging;
