import './App.css';
import React from 'react';
import UserCard from './components/UserCard'
import axios from 'axios'

class App extends React.Component {
  state = {
    userData: {}
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/jenna-anderson')
    .then(res => {
      this.setState({
        userData: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Github User</h1>
        <UserCard userData={this.state.userData}/>
      </div>
    );
  }
}

export default App;
