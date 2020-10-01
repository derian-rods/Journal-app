import React from 'react'
import { useSelector } from 'react-redux'
import { NothingSelected } from '../../components/NothingSelected'
import {Sidebar} from '../../components/Sidebar'
import { NotesScreen } from '../NotesScreen'


export const JournalScreen = () => {


    const {active} = useSelector(state => state.note)

    return (
        <div className="journal__main-content">
            <Sidebar />
            <main>
                {
                    active ?  <NotesScreen />
                    :
                    <NothingSelected /> 
                 }
               
            </main>
        </div>
    )
}
