import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

class App extends PureComponent {
    render() {
        return (
            <div>
                <h1>{this.props.test}</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const AppContainer = connect(mapStateToProps)(App);

export { AppContainer };