import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startDeleting, startSaveNote, startUpLoading } from '../../actions/notes'
import moment from 'moment';
import { controlDropMenu } from '../../actions/ui';


export const NotesAppBar = () => {
    
    const dispatch = useDispatch();
    const {active:noteActive} = useSelector(state => state.note);
    const {dropMenu} = useSelector(state => state.ui)
    const noteDate = moment(noteActive.date);
    
    const handleShow  = () => {
        dispatch(controlDropMenu(dropMenu))
    }
    const handleSafe = () => {
        dispatch(startSaveNote(noteActive))
    }
    
    const handlePictureClick = () => {
        document.querySelector('#file').click()
    }
    const handleFileChange = ({target}) => {
        const file = target.files[0];
        if(file){
            dispatch(startUpLoading(file));
        }
    }

    const handleNoteDelete = () =>  {
        dispatch(startDeleting(noteActive.id));
    }

    return (
        <div className='notes__appbar'>
            <span className='notes__appbar-date'>{noteDate.format('MMM - Do')}</span>
            <input 
            hidden={true}
            id='file'
            name='file'
            type='file'
            onChange={handleFileChange}
            />
            <div className='notes__appbar-buttons'>     
            <button className='btn' onClick={handleSafe}>
            <i className="fas fa-save"></i> <br/>

            </button>     
                <span className='btn' onClick={handleShow}>
                    <svg xmlns="http://www.w3.org/2000/svg" id='dropicon' viewBox="0 0 24 24"><path fill="white" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
                </svg>
                    <div className="notes__appbar-menu" hidden={dropMenu}>
                        <ul className="notes__appbar-ul">
                            <li className="notes__appbar-li" onClick={() => {console.log('click')}}>
                                <button className='btn' onClick={handlePictureClick}>
                                     <i className="fas fa-images"></i> <br/>
                                     <span>Picture</span>
                                </button>
                            </li>
                            <li className="notes__appbar-li">
                                <button className='btn btn-danger' onClick={handleNoteDelete}>
                                <i className="fas fa-trash-alt"></i> <br/>
                                    <span>Delete</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </span>
            </div>
        </div>
    )
}
