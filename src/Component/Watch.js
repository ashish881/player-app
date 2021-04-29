import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

export default function Watch() {
    return (

        <ReactHlsPlayer
            src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
            autoPlay={true}
            controls={true}
            width="90%"
            height="auto"
        />

    )
}
