import React, { Component } from 'react'
import UserItem from './UserItem'

class User extends Component {
    state = {
        users : [
            {
                id : '136',
                login : 'simonjefford',
                avatar_url : 'https://avatars2.githubusercontent.com/u/136?v=4',
                html_url: 'https://github.com/simonjefford'
            },
            {
                id : '137',
                login : 'josh',
                avatar_url : 'https://avatars2.githubusercontent.com/u/137?v=4',
                html_url: 'https://github.com/josh'
            },
            {
                id : '139',
                login : 'leahneukirchen',
                avatar_url : 'https://avatars3.githubusercontent.com/u/139?v=4',
                html_url: 'https://github.com/leahneukirchen'
            }
        ]
    }

    render() {
        return (
            <div style={userStyle}>
                { this.state.users.map(user =>
                <UserItem key={user.id} user= {user}/>
                )}
            </div>
        )
    }
}

const userStyle = {
    display : ' grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap :'1rem'
}

export default User
