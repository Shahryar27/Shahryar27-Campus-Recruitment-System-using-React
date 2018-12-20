import React, { Component } from 'react';
import Nav from '../Components/nav'

class CompSignin extends Component {

    render() {
        return (
            <div>
                <Nav />

                <div className='container m-auto col-6 p-3 mt-3'>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onChange={this.props.emailOnChngFuncPassed} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input onChange={this.props.passOnChngFuncPassed} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button onClick={this.props.submitObj} type="submit" className="btn btn-primary">Submit</button>
                        <button onClick={this.props.signup} className='btn btn-link'>Create account</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CompSignin;