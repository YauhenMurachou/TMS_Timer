import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import "./Timer.css";

function Timer() {

	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [isActive, setIsActive] = useState(false);

	function toggle() {
		setIsActive(!isActive);
	}

	function reset() {
		setSeconds(0);
		setMinutes(0);
		setIsActive(false);
	}

	const tick = () => {
		setSeconds(seconds === 59 ? 0 : seconds + 1);
		setMinutes(seconds === 59 ? minutes + 1 : minutes);
	};

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => tick(), 1000)
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	})

	return (
		<div className='wrapper'>
			<div className='timer-wrapper'>
				<div className='minutes'>{minutes} minutes
				</div>
				<div className='seconds'>{seconds} seconds
				</div>
			</div>

			<div className="row">
				<button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
					{isActive ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
				</button>
				<button className={`button button-${(seconds || minutes) ? 'reset-active' : 'reset-inactive'}`} onClick={reset}>
					<FontAwesomeIcon icon={faStop} />
				</button>
			</div>
		</div>
	);
}


export default Timer;