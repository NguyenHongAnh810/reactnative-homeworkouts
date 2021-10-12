const nameRegex = /.+/;
const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const passwordRegex = /.{6,}/;


export const validateName = (name) => {
    return nameRegex.test(name)
}
export const validateEmail = (email ) => {
    return emailRegex.test(email)
}
export const validatePassword = (password ) => {
    return passwordRegex.test(password)
}