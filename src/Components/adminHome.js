import React, { Component } from 'react';
import Nav from '../Components/nav'
import { connect } from 'react-redux'

class AdminHome extends Component {

    render() {
        console.log('props of comp jobs', this.props)
        return (
            <div>
                <Nav />

                <div className='container-fluid row  p-3 mt-3'>
                    <div className='col-3 m-1 bg-light border rounded p-2'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col" colspan='2'>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>{this.props.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Type</th>
                                    <td>Admin</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-7'>
                        <div class="bg-light clearfix border rounded p-2  ">
                            <button className='btn btn-outline-primary p-5 m-1'>Students Data</button>
                            <button className='btn btn-outline-success p-5 m-1'>Companies Data</button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('stu home ', state.root.allComps)
    return ({
        email: state.root.userEmail,
        allStus: state.root.allStus,
        // compFillsJobs: this.props.compFillsJobs
    })
}

export default connect(mapStateToProps, null)(AdminHome);