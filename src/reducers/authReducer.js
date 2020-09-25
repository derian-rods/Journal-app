import {types} from '../types/types'

/* {
        uid: 'dañjdaskjda1j238129nd',
        userName: Derian,
        userphoto: 'https://sdajdksadiasjdaksj'
} */

export const authReducer = (state={}, action) =>{
    switch (action.type) {
        case types.login:
                return{
                    uid: action.payload.uid,
                    name: action.payload.name,
                    userphoto: action.payload.photo
                }
        case types.logout:
            return {}
    
        default:
            return state
    }

}
