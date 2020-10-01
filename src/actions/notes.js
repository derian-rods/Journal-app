import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { types } from "../types/types";




export const startNewNote = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef =  await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNote(docRef.id, newNote));
        dispatch(addNewNote(docRef.id, newNote));

    }
}

export const activeNote = (id,note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const setNotes = (notes) =>({
    type: types.notesLoad,
    payload: notes
})


export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload:{
        id,
        ...note
    }
})

export const startSaveNote = (note) =>{
    return async (dispatch, getState) => {
     try {
        const {uid} = getState().auth;
        if(!note.url){
            delete note.url;
        }
        const noteToFirestore = {...note};
        delete noteToFirestore.id;
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch(refreshNote(note.id, noteToFirestore ));
        Swal.fire('Saved', note.title, 'success')
     } catch (error) {
        Swal.fire('Error!', error.message, 'error');
     }
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }

});

export const startUpLoading = (file) => {
    return async (dispatch,  getState) => {    

        const {active:activeNote} = getState().note;

        Swal.fire({
            title: 'Uplading',
            text: 'Please wait',
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading();
            }
        })

        const fileURL = await fileUpload(file);
        activeNote.url = fileURL;
        dispatch(startSaveNote(activeNote));
        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        
        const {uid} = getState().auth;


        await db.doc(`${uid}/journal/notes/${id}`).delete();
        dispatch(deleteNote(id));
        Swal.fire('Deleting', 'Please wait...', 'error')
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const noteLogout = () => ({
    type: types.notesLogoutCleaning
})  