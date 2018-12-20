import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
// import createBrowserHistory from './createHistory'
import HomeCont from '../Containers/homeCont'
import StuLoginCont from '../Containers/stuLoginCont'
import CompLoginCont from '../Containers/compLoginCont'
import AdminLoginCont from '../Containers/adminLoginCont'
import StuSignupCont from '../Containers/stuSignupCont'
import CompSignupCont from '../Containers/stuSignupCont'
import AdminSignupCont from '../Containers/adminSignupCont'
import StuHome from '../Containers/stuHomeCont'
import CompHome from '../Containers/compHomeCont'
import CompAddJobs from '../Containers/compAddJobCont'
import AdminHome from '../Containers/adminHomeCont'
import history from './history'
import compSignupCont from '../Containers/compSignupCont';
// import stuHome from '../Components/stuHome';
// import compHome from '../Components/compHome';


class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path='/' component={HomeCont} />
                    <Route path='/stuLogin' component={StuLoginCont} />
                    <Route path='/compLogin' component={CompLoginCont} />
                    <Route path='/adminLogin' component={AdminLoginCont} />
                    <Route path='/stuSignup' component={StuSignupCont} />
                    <Route path='/adminSignup' component={AdminSignupCont} />
                    <Route path='/compSignup' component={compSignupCont} />
                    <Route path='/stuHome' component={StuHome} />
                    <Route path='/compHome' component={CompHome} />
                    <Route path='/compAddJobs' component={CompAddJobs} />
                    <Route path='/adminHome' component={AdminHome} />
                </div>
            </Router>
        )
    }
}

export default Routers;
