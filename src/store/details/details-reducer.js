import { SET_ERROR } from "../countries/countries-actions"
import { SET_COUNTRY, SET_LOADING } from "./details-actions"

const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null
}

export const detailsReducer = (state = initialState, {type, payload}) => {
switch(type){
    case SET_LOADING: { 
        return{
            ...state,
            status: 'loading',
            error: null
        }
    }
    case SET_ERROR: { 
        return{
            ...state,
            status: 'rejected',
            error: payload
        }
    }
    case SET_COUNTRY: { 
        return{
            ...state,
            status: 'received',
            error: null,
            currentCountry: payload
        }
    }
    default: {
        return state
    }
}


}