import React from 'react'
import PropTypes from 'prop-types'

const  UserItem = ({user: {avatar_url, login , html_url}}) => {
     
        return (
            <div className="card text-center">
               <img alt="imagePic" src= {avatar_url} className="round-img" style={{width : '60px'}}/>
                <h3>{login}</h3>
                <a href={html_url} className="btn btn-dark btn-sm my-1">Know More</a>
            </div>
        )
    }

    UserItem.propTypes = {
        user: PropTypes.object.isRequired,
    }

export default UserItem
