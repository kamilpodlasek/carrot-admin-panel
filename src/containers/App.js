import React, { Component } from 'react';

import db from '../db';
import '../styles/App.css';

class App extends Component {
  addProfile() {
    db.profiles.add({ name: "test", carrots: 5 }).then(id => console.log(id));
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.addProfile}>Add Profile</button>
      </div>
    );
  }
}

export default App;
