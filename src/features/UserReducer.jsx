export const INIT_STATE = {
    isAuthenticated: false
}

const UserReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return {
                ...state, isAuthenticated: true
            }

        case "LOGOUT":
            return {
                ...state, isAuthenticated: false
            }

        default:
            return state
    }
}

export default UserReducer