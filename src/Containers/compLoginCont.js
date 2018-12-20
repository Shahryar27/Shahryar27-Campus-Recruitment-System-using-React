import React, { Component } from 'react';
import CompLoginComp from '../Components/compLogin';
import history from '../Routes/history'
import { connect } from 'react-redux'
import { compSigninAction } from '../Store/Actions/actions'

class CompLoginCont extends Component {
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

    _signup(){
        history.push('/compSignup')
    }

    submitObject(e) {
        e.preventDefault();
        let userSigninObj = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.compSigninAction(userSigninObj)

        this.setState({
            email: '',
            password: ''
        })

    }

    render() {
        return (
            <div>
                <CompLoginComp submitObj={this.submitObject} signup={this._signup} emailOnChngFuncPassed={this._emailOnChange} passOnChngFuncPassed={this._passwordOnChange} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return ({
        compSigninAction: (user) => { dispatch(compSigninAction(user)) }  
    })
}

export default connect(null, mapDispatchToProps)(CompLoginCont);