import React, { Component } from 'react';
import AdminSignup from '../Components/adminSignup';
import { adminSignupAction } from '../Store/Actions/actions'
import { connect } from 'react-redux'

class AdminSignupCont extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'dummy',
            email: 'dummy',
            password: 'dummy'
        }

        this._emailOnChange = this._emailOnChange.bind(this)
        this._passwordOnChange = this._passwordOnChange.bind(this)
        this._nameOnChange = this._nameOnChange.bind(this)
        this.submitObject = this.submitObject.bind(this)
    }

    _nameOnChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    _emailOnChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    _passwordOnChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    submitObject(e) {
        e.preventDefault();
        let userSignupObj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        this.props.adminSignupAction(userSignupObj)

        this.setState({
            name: '',
            email: '',
            password: ''
        })

    }

    render() {
        return (
            <div>
                <AdminSignup submitObj={this.submitObject} nameOnChngFuncPassed={this._nameOnChange} emailOnChngFuncPassed={this._emailOnChange} passOnChngFuncPassed={this._passwordOnChange} />
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return ({
        adminSignupAction: (user) => { dispatch(adminSignupAction(user)) }
    })
}

export default connect(null, mapDispatchToProps)(AdminSignupCont);