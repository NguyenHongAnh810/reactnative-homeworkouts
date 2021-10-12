export const Login_u = "LOGIN"
export const Logout_u = "LOGOUT"

export function login(){
    return {
        type: Login_u
    }
}

export function logout() {
    return {
        type: Logout_u
    }
}