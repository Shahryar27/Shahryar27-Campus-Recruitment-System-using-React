import React, { Component } from 'react';
import Home from '../Components/home';
import history from '../Routes/history'
import { Link } from 'react-router-dom';

class HomeCont extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginType: 'dummy'
        }

        this._adminClicked = this._adminClicked.bind(this);
        this._companyClicked = this._companyClicked.bind(this);
        this._studentClicked = this._studentClicked.bind(this);
    }

    _studentClicked() {
        this.setState({
            loginType: 'student'
        })
        history.push('/stuLogin')
    }

    _companyClicked() {
        this.setState({
            loginType: 'company'
        })
        history.push('/compLogin')
    }

    _adminClicked() {
        this.setState({
            loginType: 'admin'
        })
        history.push('/adminLogin')
    }

    render() {
        return (
            <div>
                <Home stateType={this.state.loginType} stuFuncPassed={this._studentClicked} compFuncPassed={this._companyClicked} adminFuncPassed={this._adminClicked} />

            </div>
        )
    }
}

export default HomeCont;