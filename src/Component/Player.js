import React from 'react';
import moment from 'moment'
import Timer from './Timer'
import Watch from './Watch'

export default function Player() {

    const date = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(date)
    return (
        <div className="player-container">
            <div className="timer">
                <Timer></Timer>
            </div>
            <div className="player">
                <Watch></Watch>
            </div>
        </div>
    )
}
