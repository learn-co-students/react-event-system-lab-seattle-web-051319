// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  good = () => {
    console.log('Good!')
  }

  hey = () => {
    console.log('Hey! Eyes on me!')
  }
  render() {
    return(
      <button onFocus={this.good} onBlur={this.hey}>Eyes on me!</button>
    )
  }

}
