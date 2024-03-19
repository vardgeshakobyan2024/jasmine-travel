import { useEffect, useRef, useState } from 'react';
import './timer.css';

const Timer = () => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let initerval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('April 18, 2024 00:00:00').getTime();

        initerval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(initerval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(initerval.current);
        }
    }, []);

    return (
        <div className="timerParent">
            <div className="container">
                <div className="heading">
                    <h4 className="heading1">վաճառքի մեկնարկը</h4>
                    <h4 className="headingDate">02.02.2024</h4>
                </div>
                <div className="heading">
                    <h4 className="heading1">դասերի սկիզբ</h4>
                    <h4 className="headingDate">18.04.2024</h4>
                </div>
                <div className="timer">
                    <h1>{timerDays} : {timerHours} : {timerMinutes} : {timerSeconds}</h1>
                </div>
                <a href="https://www.facebook.com/jasminetravel.am" target='_blank'>ուղարկել չեկը</a>
            </div>
        </div>
    )
}

export default Timer;