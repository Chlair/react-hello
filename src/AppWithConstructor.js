import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    // debugger;
    super(props);
    // debugger;
    this.state = { name: 'bob' };
  }

  render() {
    return (
      <div>
        {this.state.name}
      </div>
    );
  }
}

export default App;

/* 
 * 怎么初始化 state
 * top API ： construnctor didMount willMount 调用的时候发生了什么
 * 怎么从 state 到 markup
 * */

/*
* Top API
* state initalize
*
*
* */
