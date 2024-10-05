export const INIT_STATE = {
    isAuthenticated: false,
    user: {
        email: "",
        password : ""
    }
}

const UserReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return {
                ...state, isAuthenticated: true,
                user: {
                    ...state.user,
                    email: action.user.emailUser,
                    password: action.user.passwordUser
                }   
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