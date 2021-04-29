import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

export default function Timer() {
    const [days, setdays] = useState('');
    const [hours, sethours] = useState('');
    const [minutes, setminutes] = useState('');
    const [seconds, setseconds] = useState('');


    let countDownDate = new Date("May 1, 2021 18:30:25").getTime();

    // Update the count down every 1 second
    let x = setInterval(function () {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        setdays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        sethours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setminutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setseconds(Math.floor((distance % (1000 * 60)) / 1000));

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

    return (
        <div>
            <Typography variant="h3">{days + "d " + hours + "h "
                + minutes + "m " + seconds + "s "}</Typography>
        </div>
    )
}
