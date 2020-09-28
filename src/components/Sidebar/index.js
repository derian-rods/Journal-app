import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { JournalEntries } from '../JournalEntries'

export const Sidebar = ({active, handleDrawer}) => {



    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (   
        <>
        <aside className={
            active ? 'journal__sidebar close' 
            : 'journal__sidebar active'
        }>
            <div className='journal__sidebar-navbar'>
                <h3 className="mt-5">
                    <i className='far fa-moon'></i>
                    <span> Derian</span>
                </h3>
                <button className="mt-5 btn btn__logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className='journal__new-entry'>
                <i className='far fa-calendar-plus fa-5x'></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>
            <JournalEntries />
            <div className="journal__sidebar-close" onClick={handleDrawer}>
              {
                  active ?  (  <i className="fas fa-caret-right"></i> )
                  : (  <i className="fas fa-caret-left"></i> )
              }   
            </div>    

        </aside>   
        </>

    )
}
