import React from 'react';
import { connect } from 'react-redux';

class App extends React.PureComponent {
    render() {
        const { value } = this.props;
        return (
            <div className="App">
                App root component: {value}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { value } = state.Simple;
    return {
        value: value
    };
}

export default connect(mapStateToProps)(App);