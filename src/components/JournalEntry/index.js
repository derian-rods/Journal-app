import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { controlDrawer } from '../../actions/ui';

export const JournalEntry = ({id, date, title, body, url}) => {
    
    const noteDate = moment(date);
    const dispatch = useDispatch();
    const {screenWidth} = useSelector(state => state.ui)
    const hiddenDrawer = () => {
        (screenWidth <= 768)&& dispatch(controlDrawer(false))
    }   
    const handleShowEntries = () => {

        dispatch(activeNote(id,{
            date, 
            title, 
            body, 
            url
        }));
        hiddenDrawer()
    }

    return (
        <div className='journal__entry' onClick={handleShowEntries}>
            <div 
                className='journal__entry--picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: url ? (`url(${url}`)
                    : ('url(http://1.bp.blogspot.com/-u51G7ZCh44o/VnAxOtananI/AAAAAAAAAD8/VYMdFtn49mA/s1600/1.jpeg)')
                }}
            > 
            </div>
            <div className='journal_entry-body'>
                <p className='jounal__entry-title'>
                    {title}
                </p>
                <p className='journal__entry-content'>
                    {body}. 
                </p>
            </div>
            <div className='journal__entry-data-box'>
                <h5>{noteDate.format('ddd')}</h5>
                <h4>{noteDate.format('MMM/D/Y')}</h4>
            </div>
        </div>
    )
}
