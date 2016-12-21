import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class SubPage extends React.PureComponent {
    render() {
        const { value } = this.props;
        return (
            <div className="SubPage">
                SubPage root component: {value}
                <p><Link to="/">&lt; Back to home</Link></p>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    const { value } = state.Simple;
    return {
        ...props,
        value
    };
}

export default connect(mapStateToProps)(SubPage);