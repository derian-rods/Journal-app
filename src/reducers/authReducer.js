import {types} from '../types/types'


export const authReducer = (state={}, action) =>{
    switch (action.type) {
        case types.login:
                return{
                    uid: action.payload.uid,
                    name: action.payload.userName,
                    photo: action.payload.userPhoto
                }
        case types.logout:
            return {}
    
        default:
            return state
    }

}
