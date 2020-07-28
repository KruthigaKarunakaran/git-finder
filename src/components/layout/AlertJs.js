import React from 'react'

export default function AlertJs({alert}) {
    console.log('Alert',alert)
    return (
        alert !== null &&(
            <div className = {`alert alert-${alert.type}`}>
                {alert.msg}
            </div>
        )
    )
}


