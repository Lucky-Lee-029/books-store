import { SET_AUTH, DELETE_AUTH } from "./types";
export const setAuth = (data) => {
    return {
        type: SET_AUTH,
        payload: data
    };
}
export const deleteAuth = () => {
    return {
        type: DELETE_AUTH
    };
}