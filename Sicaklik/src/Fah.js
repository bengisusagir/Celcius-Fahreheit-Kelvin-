import React, { Component } from 'react';

class Fah extends Component {
    render() {
        return (
            <div>
                <h4>Fahrenheit: {this.props.fah1} ℉</h4>
            </div>
        );
    }
}

export default Fah;