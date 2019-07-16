// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

    ohGood = () => {
        console.log("Good!")
    }

    eyesMe = ()  => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <div>
                <button onFocus={this.ohGood} onBlur={this.eyesMe}></button>
            </div>
        )
    }
}

export default EyesOnMe