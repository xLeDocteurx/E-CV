import React, {Component, Fragment} from 'react'

function ProjectRef(props) {
    const {children} = props
    
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default ProjectRef