import React, {useState} from 'react'
// import { NothingSelected } from '../../components/NothingSelected'
import {Sidebar} from '../../components/Sidebar'
import { NotesScreen } from '../NotesScreen'


export const JournalScreen = () => {
    const [show, setshow] = useState(false)
    const handleDrawer = () => {
        setshow(!show)
    }
    return (
        <div className="journal__main-content">
            <Sidebar  active={show} handleDrawer= {handleDrawer}/>
            <main>
                {/* <NothingSelected />  */}
                <NotesScreen />
            </main>
        </div>
    )
}
