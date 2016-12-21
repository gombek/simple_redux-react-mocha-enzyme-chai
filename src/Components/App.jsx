import React from 'react';

class App extends React.PureComponent {
    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
}

export default App;