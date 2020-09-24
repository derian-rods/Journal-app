import React from 'react'
import { NotesAppBar } from '../../components/NotesAppBar'

export const NotesScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />
            <div className='notes__content'>
                <input type='text' placeholder='Some awesome title' className='notes__title-input' autoComplete='off'/>
                <textarea className='notes__textarea' placeholder='What happened today'></textarea>
                <div className='notes__image'>
                    <img src='https://i.vimeocdn.com/video/703876203_1280x720.jpg'  alt='preview' />
                </div>
            </div>
        </div>
    )
}
