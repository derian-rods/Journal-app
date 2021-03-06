import { types } from "../types/types";
import {firebase, googleAuthProvider} from '../firebase/firebaseConfig'
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2'
import { noteLogout } from "./notes";

/* Auth Actions */
export const startLoginEmailPassaword = (email, password) =>{
    return async (dispatch) =>{

        dispatch(startLoading());

        try {
            const {user} =  await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(login(user.uid, user.displayName))
            dispatch(finishLoading())
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
              });
            dispatch(finishLoading());
        }
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return async (dispatch) => {
        dispatch(startLoading());
     try {
        const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await user.updateProfile({displayName: name}) 
        dispatch(login(user.uid, user.displayName))
        dispatch(finishLoading())
     } catch (error) {
        dispatch(finishLoading())
        Swal.fire({
            title: 'Error!',
            text: error.message,
            icon: 'error',
          });            
     }
    }
}


export const startLoginGoogle = () =>{
    return async (dispatch) =>{
        try {
            const rep = await firebase.auth().signInWithPopup(googleAuthProvider);
            const {user} = rep;
            dispatch(login(user.uid, user.displayName, user.photoURL));
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
              });
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
}); 

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout())
        dispatch(noteLogout());
    }
}

const logout = () => ({
    type: types.logout
})