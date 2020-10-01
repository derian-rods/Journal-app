import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { startNewNote } from '../../actions/notes'
import { controlDrawer } from '../../actions/ui'
import { JournalEntries } from '../JournalEntries'

export const Sidebar = () => {


    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(startLogout())
    }

    const {name} = useSelector(state => state.auth);
    const {drawer} = useSelector(state => state.ui);
    const handleAddNewEntry = () => {
        dispatch(startNewNote());
    }

    const handleDrawer = () => {
        dispatch(controlDrawer(drawer)) 
     }

    return (   
        <>
        <aside className={
            drawer ? 'journal__sidebar close' 
            : 'journal__sidebar active'
        }>
            <div className='journal__sidebar-navbar'>
                <h3 className="mt-5">
                    <span>{name}</span>
                </h3>
                <button className="btn btn__logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className='journal__new-entry' onClick={handleAddNewEntry}>
                <i className='far fa-calendar-plus fa-5x'></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>
            <JournalEntries />
            <div className="journal__sidebar-close" onClick={handleDrawer}>
              {
                  drawer ?  (  <i className="fas fa-caret-right"></i> )
                  : (  <i className="fas fa-caret-left"></i> )
              }   
            </div>    

        </aside>   
        </>

    )
}
