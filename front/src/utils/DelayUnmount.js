import React, {Component, Fragment} from 'react'

function DelayUnmount(props) {
    const {children} = props
    
    return (
        <div>
            {children}
        </div>
    )
}

export default DelayUnmount