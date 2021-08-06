export const increase_u = 'increase'
export const decrease_u = 'decrease'
export const login_u = 'login'
export const logout_u = 'logout'

export function increase(){
    return {
        type: increase_u
    }
}

export function decrease() {
    return {
        type: decrease_u
    }
}