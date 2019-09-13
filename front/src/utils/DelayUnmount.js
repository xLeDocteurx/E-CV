import React, {Component, Fragment} from 'react'

function DelayUnmount(props) {
    const {children, delay} = props

    function unmount() {
        setTimeout(() => '', delay)
    }
    
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default DelayUnmount