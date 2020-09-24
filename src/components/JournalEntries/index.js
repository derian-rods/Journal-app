import React from 'react'
import { JournalEntry } from '../JournalEntry'

export const JournalEntries = () => {
    const entries = [1,2,3,4,5,6,7, 9 ,10, 23, 30]
    return (
        <div className='journal__entries'>
            {
                entries.map(entry => (
                    <JournalEntry />
                ))
            }
        </div>
    )
}
