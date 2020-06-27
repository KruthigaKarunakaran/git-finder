import React, { Component } from 'react'

class UserItem extends Component {

    render() {
        const {avatar_url, login , html_url} = this.props.user
        return (
            <div className="card text-center">
               <img alt="imagePic" src= {avatar_url} className="round-img" style={{width : '60px'}}/>
                <h3>{login}</h3>
                <a href={html_url} className="btn btn-dark btn-sm my-1">Know More</a>
            </div>
        )
    }
}

export default UserItem
