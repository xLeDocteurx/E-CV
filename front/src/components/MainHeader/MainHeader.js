import React, {Component} from 'react';

// import M from "materialize-css";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

import Paper from '@material-ui/core/Paper';

class MainHeader extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Paper>
                <AccessAlarm />
                Header
            </Paper>
        );
    }
}

export default MainHeader;