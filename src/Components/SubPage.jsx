import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as Actions from '../Actions';

class SubPage extends React.PureComponent {
    render() {
        const { value } = this.props;
        return (
            <div className="SubPage">
                SubPage root component: {value}
                <p>
                    <button onClick={this._handleClear.bind(this)}>Clear if odd</button>
                    <button onClick={this._handleSet.bind(this)}>Set 2</button>
                </p>
                <p><Link to="/">&lt; Back to home</Link></p>
            </div>
        );
    }

    _handleClear(e) {
        const { clearIfOdd } = this.props;
        clearIfOdd();
    }

    _handleSet(e) {
        const { setValue } = this.props;
        setValue({
            value: 2
        });
    }
}

function mapStateToProps(state, props) {
    const { value } = state.Simple;
    return {
        ...props,
        value
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearIfOdd: bindActionCreators(Actions.Simple.clearIfOdd, dispatch),
        setValue: bindActionCreators(Actions.Simple.set, dispatch)

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubPage);