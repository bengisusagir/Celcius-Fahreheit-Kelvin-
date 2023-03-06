import React, { Component } from 'react';

class Cel extends Component {
    render() {
        return (
            <div>
                <h4>Celcius: {this.props.cel1} ℃</h4>
            </div>
        );
    }
}

export default Cel;