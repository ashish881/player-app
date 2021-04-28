import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import moment from 'moment'
import Timer from './Timer'

export default function Player() {

    const date = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(date)
    return (
        <div>
            <div className="player-container">
                    <ReactHlsPlayer
                        src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                        autoPlay={false}
                        controls={true}
                        width="60%"
                        height="60%"
                    />
            </div>

        </div>
    )
}
