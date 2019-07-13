import React, {Component, Fragment} from 'react'

function DelayUnmount(props) {
    const {children} = props
    
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default DelayUnmount