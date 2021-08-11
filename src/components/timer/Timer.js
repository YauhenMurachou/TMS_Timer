import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {

	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);



	const tick = () => {
		setSeconds(seconds === 59 ? 0 : seconds + 1);
		setMinutes(seconds === 59 ? minutes + 1 : minutes);

	};

	useEffect(() => {
		const interval = setInterval(() => tick(), 1000)
		return () => clearInterval(interval);
	})

	return (
		<div className='timer-wrapper'>
			<div className='minutes'>Минуты: {minutes}
			</div>
			<div className='seconds'>Секунды: {seconds}
			</div>
		</div>
	);
}


export default Timer;