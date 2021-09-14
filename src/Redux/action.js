export const increase_u = 'increase'
export const decrease_u = 'decrease'
export const USER_FETCH_SUCCEEDED_u = 'USER_FETCH_SUCCEEDED'
export const USER_FETCH_FAIL_u = 'USER_FETCH_FAIL'
export const USER_FETCH_REQUESTED_u = 'USER_FETCH_REQUESTED'

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

export function USER_FETCH_SUCCEEDED() {
    return {
        type: USER_FETCH_SUCCEEDED_u,
        data: []
    }
}

export function USER_FETCH_FAIL() {
    return {
        type: USER_FETCH_FAIL_u,
        error: ""
    }
}

export function USER_FETCH_REQUESTED() {
    return {
        type: USER_FETCH_REQUESTED_u
    }
}
