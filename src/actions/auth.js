import { types } from "../types/types";
import {firebase, googleAuthProvider} from '../firebase/firebaseConfig'

/* Auth Actions */
export const startLoginEmailPassaword = (email, password) =>{
    return async (dispatch) =>{
        try {
            const {user} =  await firebase.auth().signInWithEmailAndPassword(email, password);
            const userCred = {
                uid: user.uid,
                userName: user.displayName,
            }
            dispatch(login(userCred))
        } catch (error) {
            console.error(`${error.code} : ${error.message}`)            

        }
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return async (dispatch) => {
     try {
        const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await user.updateProfile({displayName: name}) 
        const userCred = {
            uid: user.uid,
            userName: user.displayName,
        }
        dispatch(login(userCred))
     } catch (error) {
        console.error(`${error.code} : ${error.message}`)            
     }
    }
}


export const startLoginGoogle = () =>{
    return async (dispatch) =>{
        try {
            const rep = await firebase.auth().signInWithPopup(googleAuthProvider);
            const {user} = rep;
            const userCred = {
                uid: user.uid,
                userName: user.displayName,
                userphoto: user.photoURL
            } 
            dispatch(login(userCred));
        } catch (error) {
            console.error(`${error.code} : ${error.message}`)            
        }
    }
}

export const login = (uid, userName, userPhoto) => ({
        type: types.login,
        payload:{
            uid,
            userName,
            userPhoto
        }
})