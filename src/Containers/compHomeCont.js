import React, { Component } from 'react';
import CompHome from '../Components/compHome';
import history from '../Routes/history'
import { Link } from 'react-router-dom';

class compHomeCont extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginType: 'dummy'
        }

        this.compFillJobs = this.compFillJobs.bind(this)
        this.studentDetails = this.studentDetails.bind(this)
    }

    studentDetails() {
        history.push('/stuDetails');
    }

    compFillJobs() {
        console.log('fill jobs')
        history.push('/compAddJobs');
    }

    render() {
        return (
            <div>
                <CompHome compFillsJobs={this.compFillJobs} studentDetails={this.studentDetails} />

            </div>
        )
    }
}

export default compHomeCont;