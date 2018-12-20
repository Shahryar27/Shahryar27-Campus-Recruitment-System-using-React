import history from '../../Routes/history'
import firebase from 'firebase'


export function studentSignupAction(user) {
    return dispatch => {
        console.log('user', user);
        // history.push('/signin');

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log('signed up successfully', createdUser.uid);
                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('CRS/students/' + createdUser.uid + '/details/').set(user)
                    .then(() => {
                        firebase.database().ref('CRS/students/').once('value')
                            .then((userData) => {
                                // let allUsers = userData.val();
                                let currentUserUid = firebase.auth().currentUser.uid;
                                // dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })
                                // dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                                dispatch({ type: 'CURRENTUSER', payload: currentUserUid })
                                history.push('/stuHome');

                            })
                    })
            })
    }
}
export function compSignupAction(user) {
    return dispatch => {
        console.log('user', user);
        // history.push('/signin');

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log('signed up successfully', createdUser.uid);
                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('CRS/companies/' + createdUser.uid + '/details/').set(user)
                    .then(() => {
                        firebase.database().ref('CRS/companies/').once('value')
                            .then((userData) => {
                                // let allUsers = userData.val();
                                let currentUserUid = firebase.auth().currentUser.uid;
                                // dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })
                                // dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                                dispatch({ type: 'CURRENTUSER', payload: currentUserUid })
                                history.push('/compHome');

                            })
                    })
            })
    }
}
export function adminSignupAction(user) {
    return dispatch => {
        console.log('user', user);
        // history.push('/signin');

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log('signed up successfully', createdUser.uid);
                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('CRS/admin/' + createdUser.uid + '/details/').set(user)
                    .then(() => {
                        firebase.database().ref('CRS/admin/').once('value')
                            .then((userData) => {
                                // let allUsers = userData.val();
                                let currentUserUid = firebase.auth().currentUser.uid;
                                // dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })
                                // dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                                dispatch({ type: 'CURRENTUSER', payload: currentUserUid })
                                history.push('/adminHome');

                            })
                    })
            })
    }
}


export function stuSigninAction(user) {
    return dispatch => {
        console.log('user in signin', user);
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                firebase.database().ref('CRS/students/').once('value')
                    .then((userData) => {
                        let allUsers = userData.val();
                        let currentUserUid = firebase.auth().currentUser.uid;
                        let currentUserEmail = firebase.auth().currentUser.email;
                        // console.log(currentUser)
                        let allUsersArr = [];
                        for (var key in allUsers) {
                            allUsersArr.push(allUsers[key]);
                        }
                        console.log(allUsersArr);
                        dispatch({ type: 'ALLUSERS', payload: allUsersArr })
                        dispatch({ type: 'CURRENTUSER', payload: currentUserUid })
                        dispatch({ type: 'USERNAME', payload: currentUserEmail })

                        history.push('/stuHome');
                    })
                    .then(() => {
                        firebase.database().ref('CRS/companies/').once('value')
                            .then((compData) => {
                                let allComps = compData.val();

                                let allCompData = []
                                for (var key in allComps) {
                                    allCompData.push(allComps[key].details.name);
                                }
                                // console.log('all comps actoin', allCompData[0].details.name)
                                dispatch({ type: 'ALLCOMPS', payload: allCompData })
                            })
                    })
            })
    }
}
export function compSigninAction(user) {
    return dispatch => {
        console.log('user in signin', user);
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                firebase.database().ref('CRS/companies/').once('value')
                    .then((userData) => {
                        let allUsers = userData.val();
                        let currentUserUid = firebase.auth().currentUser.uid;
                        let currentUserEmail = firebase.auth().currentUser.email;
                        // console.log(currentUser)
                        let allUsersArr = [];
                        for (var key in allUsers) {
                            allUsersArr.push(allUsers[key]);
                        }
                        console.log(allUsersArr);
                        dispatch({ type: 'ALLUSERS', payload: allUsersArr })
                        dispatch({ type: 'CURRENTUSER', payload: currentUserUid })
                        dispatch({ type: 'USERNAME', payload: currentUserEmail })

                        history.push('/compHome');
                    })
                    .then(() => {
                        firebase.database().ref('CRS/students/').once('value')
                            .then((stuData) => {
                                let allStu = stuData.val();

                                let allStuData = []
                                for (var key in allStu) {
                                    allStuData.push(allStu[key].details.name);
                                }
                                // console.log('all comps actoin', allCompData[0].details.name)
                                dispatch({ type: 'ALLSTU', payload: allStuData })
                            })
                    })
            })
    }
}
export function adminSigninAction(user) {
    return dispatch => {
        console.log('user in signin', user);
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                firebase.database().ref('CRS/admin/').once('value')
                    .then((userData) => {
                        let allUsers = userData.val();
                        let currentUserUid = firebase.auth().currentUser.uid;
                        let currentUserEmail = firebase.auth().currentUser.email;
                        // console.log(currentUser)
                        let allUsersArr = [];
                        for (var key in allUsers) {
                            allUsersArr.push(allUsers[key]);
                        }
                        console.log(allUsersArr);
                        dispatch({ type: 'ALLUSERS', payload: allUsersArr })
                        dispatch({ type: 'CURRENTUSER', payload: currentUserUid })
                        dispatch({ type: 'USERNAME', payload: currentUserEmail })

                        history.push('/adminHome');
                    })
                    .then(() => {
                        firebase.database().ref('CRS/students/').once('value')
                            .then((stuData) => {
                                let allStu = stuData.val();

                                let allStuData = []
                                for (var key in allStu) {
                                    allStuData.push(allStu[key].details.name);
                                }
                                // console.log('all comps actoin', allCompData[0].details.name)
                                dispatch({ type: 'ALLSTU', payload: allStuData })
                            })
                        firebase.database().ref('CRS/companies/').once('value')
                            .then((compData) => {
                                let allComps = compData.val();

                                let allCompData = []
                                for (var key in allComps) {
                                    allCompData.push(allComps[key].details.name);
                                }
                                // console.log('all comps actoin', allCompData[0].details.name)
                                dispatch({ type: 'ALLCOMPS', payload: allCompData })
                            })
                    })
            })
    }
}