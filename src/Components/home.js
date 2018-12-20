import React, { Component } from 'react';
import Nav from './nav'

class Home extends Component {

    render() {
        return (
            <div className=''>
                <Nav className='mb-3' />


                <div className='m-auto border container col-9 p-3'>
                    <div className='container pt-2  col-10 mt-3 p-0 '>
                        <h1 className='h1 font-weight-light text-muted'>Welcome to Campus Recruitment System</h1>
                        <p class="lead text-left">
                            Login as:
                    </p>
                    </div>
                    <div className='col-7 m-auto'>
                        <button onClick={this.props.stuFuncPassed} className='btn m-2 btn-outline-primary p-5'>Student</button>
                        <button onClick={this.props.compFuncPassed} className='btn m-2 btn-outline-warning p-5'>Company</button>
                        <button onClick={this.props.adminFuncPassed} className='btn m-2 btn-outline-danger p-5'>Admin</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;