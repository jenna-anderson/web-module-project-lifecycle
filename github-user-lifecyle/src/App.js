import './App.css';
import React from 'react';
import UserCard from './components/UserCard'
import axios from 'axios'

class App extends React.Component {
  state = {
    userData: {},
    followers: [],
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

    axios.get('https://api.github.com/users/jenna-anderson/followers')
    .then(res => {
      console.log(res.data)
      this.setState({
        followers: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    console.log(this.state.userData)
    return (
      <div className="App">
        <h1>Github User</h1>
        <UserCard userData={this.state.userData}/>
        {
        this.state.followers.map(follower => {
          return (
            <div>
            <h4>Followers:</h4>
            <li><a href={follower.html_url}>{follower.login}</a></li>
          </div>
          )
        })
        }
      </div>
    );
  }
}

export default App;
