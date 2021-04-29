import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

export default function Watch() {
    return (

        // <ReactHlsPlayer
        //     src="/video"
        //     autoPlay={true}
        //     controls={true}
        //     width="70%"
        //     height="auto"
        // />
        <video id="videoPlayer" width="60%" controls muted="muted" autoplay>
            <source src="/video" type="video/mp4" />
        </video>

    )
}
