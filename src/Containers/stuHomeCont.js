import React, { Component } from 'react';
import StuHome from '../Components/stuHome';
import history from '../Routes/history'
import { Link } from 'react-router-dom';

class stuHomeCont extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginType: 'dummy'
        }
    }

    

    render() {
        return (
            <div>
                <StuHome />

            </div>
        )
    }
}

export default stuHomeCont;