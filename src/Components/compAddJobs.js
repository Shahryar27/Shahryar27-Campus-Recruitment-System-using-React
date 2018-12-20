import React, { Component } from 'react';
import Nav from '../Components/nav'
import { connect } from 'react-redux'

class CompHome extends Component {

    render() {
        return (
            <div>
                <Nav />

                <div className='container mx-auto border row col-6 p-3 mt-3'>
                    <form>
                        <div class="form-group col-12">
                            <label for="exampleInputEmail1">Job title</label>
                            <input onChange={this.jobTitleOnChnge} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter job title" />
                            <small id="emailHelp" class="form-text text-muted">A small concise title of job</small>
                        </div>
                        <div class="form-group col-12">
                            <label for="exampleInputEmail1">Job salary offer</label>
                            <input onChange={this.jobSalaryOnChnge} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter salary offer" />
                            {/* <small id="emailHelp" class="form-text text-muted">A small concise title of job</small> */}
                        </div>
                        <div class="form-group col-12">
                            <label for="exampleInputEmail1">Job description</label>
                            <textarea onChange={this.jobDescOnChnge} type="text" rows='3' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter job description" />
                            <small id="emailHelp" class="form-text text-muted">Specifics and details about job</small>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>


            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('stu home ', state.root.allComps)
    return ({
        email: state.root.userEmail,
        allStus: state.root.allStus
    })
}

export default connect(mapStateToProps, null)(CompHome);