import React, { Component } from 'react';
import CompAddJobs from '../Components/compAddJobs';
import history from '../Routes/history'
import { Link } from 'react-router-dom';

class compAddJobCont extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobTitle: 'dummy',
            jobSalary: 'dummy',
            jobDesc: 'dummy',
        }

        this._jobTitleOnChnge = this._jobTitleOnChnge.bind(this)
        this._jobSalaryOnChnge = this._jobSalaryOnChnge.bind(this)
        this._jobDescOnChnge = this._jobDescOnChnge.bind(this)
        this.studentDetails = this.studentDetails.bind(this)
        this.compFillJobs = this.compFillJobs.bind(this)
    }

    _jobTitleOnChnge(e){
        this.setState({
            jobTitle: e.target.value
        })
    }
    _jobSalaryOnChnge(e){
        this.setState({
            jobSalary: e.target.value
        })
    }
    _jobDescOnChnge(e){
        this.setState({
            jobDesc: e.target.value
        })
    }

    studentDetails(){
        history.push('/stuDetails');
    }
    
    compFillJobs(){
        history.push('/compAddJobs');
    }

    render() {
        return (
            <div>
                <CompAddJobs stuDetails={this.studentDetails} compFillJobs={this.compFillJobs} jobTitleOnChnge={this._jobTitleOnChnge} jobSalaryOnChnge={this._jobSalaryOnChnge} jobDescOnChnge={this._jobDescOnChnge} />

            </div>
        )
    }
}

export default compAddJobCont;