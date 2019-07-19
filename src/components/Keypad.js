import React from 'react';

 class Keypad extends React.Component {

handlePW = () => console.log("Entering password...")

  render(){
    return(
      <div>
      <input type="password" onKeyUp={this.handlePW}/>
      </div>
  )
}
}
export default Keypad
