import {SET_AUTH} from "../actions";

const initialState = {jwtToken : null};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return action.payload;
        default:
            return state;
    }
};