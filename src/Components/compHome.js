import React, { Component } from 'react';
import Nav from '../Components/nav'
import { connect } from 'react-redux'

class CompHome extends Component {

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
                                    <td>Company</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-7'>
                        <div class="bg-light clearfix border rounded p-2">
                            <p className='h5 mt-2 align-middle d-inline rounded text-dark'>Provide vacancy details to offer jobs</p>
                            <button onClick={this.props.compFillsJobs} type="button" class="btn btn-secondary float-right">Fill details</button>
                        </div>
                        <div className='p-1 border '>
                            {this.props.allStus.map((val, ind) => {
                                return (<button className='btn btn-outline-secondary w-100 text-left p-2 m-1'>{val}</button>)
                            })}
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

export default connect(mapStateToProps, null)(CompHome);