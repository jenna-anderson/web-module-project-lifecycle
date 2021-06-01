import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'
import '../App.css'

class UserCard extends React.Component {
    state={
        followers: [],
        isActive: false
    }

    handleClick = (e) => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    componentDidMount() {
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
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.userData.avatar_url} alt={this.props.userData.name} />
                <Card.Body>
                    <Card.Title>{this.props.userData.name}</Card.Title>
                   
                    <Card.Text>followers: {this.props.userData.followers}</Card.Text>
                    <Card.Text>following: {this.props.userData.following}</Card.Text>
                    <Card.Text><a href={this.props.userData.html_url}>{this.props.userData.login}</a></Card.Text>
                    
                <Button variant="primary" onClick={this.handleClick}>Followers</Button>
                {
                    this.state.followers.map(follower => {
                        return (
                        <Card.Body className={this.state.isActive ? null : 'hide'} key={follower.id}>
                                <Card.Title>Followers:</Card.Title>
                                <Card.Text><li><a href={follower.html_url}>{follower.login}</a></li></Card.Text>
                        </Card.Body>
                        )
                    })
                    }
                </Card.Body>
            </Card>
        )
    }
}

export default UserCard;