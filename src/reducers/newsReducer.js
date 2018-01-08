import {SEARCH_NEWS} from '../constants/news'

const initialState = []

export default function(state=initialState,action){
    console.log(state,action)
    switch(action.type){
        case SEARCH_NEWS:
        return [
            ...state,
            ...action.payload
        ]
        
        default :
        return state;
    }
}

