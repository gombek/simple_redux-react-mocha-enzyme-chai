import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Home extends React.PureComponent {
    render() {
        const { value } = this.props;
        return (
            <div className="Home">
                Home root component: {value}
                <ol>
                    <li><Link to="/subpage">Go to subpage</Link></li>
                </ol>
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

export default connect(mapStateToProps)(Home);