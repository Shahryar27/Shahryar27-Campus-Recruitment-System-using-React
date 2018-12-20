import React, { Component } from 'react';
import AdminHome from '../Components/adminHome';
import history from '../Routes/history'
import { Link } from 'react-router-dom';

class AdminHomeCont extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginType: 'dummy'
        }

    }

    
    render() {
        return (
            <div>
                <AdminHome />

            </div>
        )
    }
}

export default AdminHomeCont;