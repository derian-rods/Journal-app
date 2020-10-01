import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { NotesAppBar } from '../../components/NotesAppBar'
import { useForm } from '../../Hooks/useForm';

export const NotesScreen = () => {

     const {active: note} = useSelector(state => state.note);
     const [Formvalue, handleInputChange, reset] = useForm(note);
     const {title, body} = Formvalue;
     const dispatch = useDispatch()
     const activeId = useRef(note.id)
     useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id
        }
     }, [note, reset])

     /* update active note */

    useEffect(()=>{
        dispatch(activeNote(Formvalue.id,{...Formvalue}));
    },[Formvalue, dispatch])

    return (
        <div className='notes__main-content'>
            <NotesAppBar />
            <div className='notes__content'>
                <input type='text' placeholder='Some awesome title' className='notes__title-input' autoComplete='off' name='title'  onChange={handleInputChange} value={title}/>
                <textarea className='notes__textarea' placeholder='What happened today'name='body' onChange={handleInputChange} value={body}></textarea>
                {
                    note.url && (
                    <div className='notes__image'>
                        <img src={note.url}  alt='preview' />
                    </div>
                )
                }
            </div>
        </div>
    )
}
