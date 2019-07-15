import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  manageOnFocus = () => {
    console.log("Good!");
  }

  manangeOnBlur = () => {
    console.log("Hey! Eyes on me!");
  }

  render() {
    return (
      <button onBlur={this.manangeOnBlur} onFocus={this.manageOnFocus}/>
    )
  }
}
