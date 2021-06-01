import React from 'react'
import User from './User'

class UserCard extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.props.userData.name}</h2>
                <img src={this.props.userData.avatar_url} alt='user profile photo'/>
                <p>followers: {this.props.userData.followers}</p>
                <p>following: {this.props.userData.following}</p>
                <p>username: {this.props.userData.login}</p>
            </div>
        )
    }
}

export default UserCard;