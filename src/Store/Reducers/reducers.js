
const INITIAL_STATE = {
    allUsers: [],
    allComps: [],
    allStus: [],
    currentUser: 'dummy',
    userEmail: 'dummy'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CURRENTUSER':
            return ({
                ...state,
                currentUser: action.payload
            })
        case 'ALLUSERS':
            return ({
                ...state,
                allUsers: action.payload
            })
        case 'USERNAME':
            return ({
                ...state,
                userEmail: action.payload
            })
            case 'ALLCOMPS':
            return ({
                ...state,
                allComps: action.payload
            })
            case 'ALLSTU':
            return ({
                ...state,
                allStus: action.payload
            })
        default:
            return state
    }
}