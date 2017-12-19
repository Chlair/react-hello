import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'bob' };
  }
  componentWillMount() {
    console.log('Will mount begin -----------------------------------------------------------------');
    // debugger;
    this.setState({ gender: 'boy' });
    console.log('in Will mount && just the next line of setState - this.state',this.state);
    console.log('Will mount ends ------------------------------------------------------------------');
    // debugger;
  }

  render() {
    console.log('App with Will mount RENDER begin -------------------------------------------------');
    return (
      <div>
        my name is
        {this.state.name}
        i am {this.state.age} years old
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
