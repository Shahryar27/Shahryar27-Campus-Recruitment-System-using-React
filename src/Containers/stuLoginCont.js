import React, { Component } from 'react';
import StuLoginComp from '../Components/stuLogin';
import history from '../Routes/history'
import { connect } from 'react-redux'
import { stuSigninAction } from '../Store/Actions/actions'

class StuLoginCont extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'dummy',
            password: 'dummy'
        }

        this._emailOnChange = this._emailOnChange.bind(this)
        this._passwordOnChange = this._passwordOnChange.bind(this)
        this._signup = this._signup.bind(this)
        this.submitObject = this.submitObject.bind(this)
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

    _signup() {
        history.push('/stuSignup')
    }

    submitObject(e) {
        e.preventDefault();
        let userSigninObj = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.stuSigninAction(userSigninObj)

        this.setState({
            email: '',
            password: ''
        })

    }



    render() {
        return (
            <div>
                <StuLoginComp submitObj={this.submitObject} signup={this._signup} emailOnChngFuncPassed={this._emailOnChange} passOnChngFuncPassed={this._passwordOnChange} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return ({
        stuSigninAction: (user) => { dispatch(stuSigninAction(user)) }  
    })
}

export default connect(null, mapDispatchToProps)(StuLoginCont);