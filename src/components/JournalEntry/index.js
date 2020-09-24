import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            <div 
                className='journal__entry--picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(http://1.bp.blogspot.com/-u51G7ZCh44o/VnAxOtananI/AAAAAAAAAD8/VYMdFtn49mA/s1600/1.jpeg)'
                }}
            > 
            </div>
            <div className='journal_entry-body'>
                <p className='jounal__entry-title'>
                    Un Nuevo dia
                </p>
                <p className='journal__entry-content'>
                    Dolor non id magna excepteur. Laboris veniam magna non cupidatat anim veniam cillum quis occaecat Lorem. 
                </p>
            </div>
            <div className='journal__entry-data-box'>
                <span>Monday</span>
                <h4>24/05/2020</h4>
            </div>
        </div>
    )
}
