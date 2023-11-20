import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed, className }) => {
	if (completed) {
		return (
			<span className={`countdown ${className}`}>
				<div className="item">
					<span className="subtitle">0</span>
					<span>Days</span>
				</div>
				<div className="item">
					<span className="subtitle">
						0
					</span>
					<span>Hours</span>
				</div>
				<div className="item">
					<span className="subtitle">
						0
					</span>
					<span>Minutes</span>
				</div>
				<div className="item">
					<span className="subtitle">
						0
					</span>
					<span>Seconds</span>
				</div>
			</span>
		);
	} else {
		return (
			<span className={`countdown ${className}`}>
				<div className="item">
					<span className="subtitle">{days < 10 ? `0${days}` : days}</span>
					<span>Days</span>
				</div>
				<div className="item">
					<span className="subtitle">
						{hours < 10 ? `0${hours}` : hours}
					</span>
					<span>Hours</span>
				</div>
				<div className="item">
					<span className="subtitle">
						{minutes < 10 ? `0${minutes}` : minutes}
					</span>
					<span>Minutes</span>
				</div>
				<div className="item">
					<span className="subtitle">
						{seconds < 10 ? `0${seconds}` : seconds}
					</span>
					<span>Seconds</span>
				</div>
			</span>
		);
	}
};

export const CountdownWrapper = ({ className, timeLeft }) => {
	const convertDate = (date, tzString) => {
		return new Date(date*1000)
		// 	(typeof date === "string" ? new Date(date*1000) : date).toLocaleString(
		// 		"en-US",
		// 		{ timeZone: tzString }
		// 	)
		// );
	};
	return (
		<>
			<Countdown
				date={convertDate(timeLeft, "America/Toronto")}
				renderer={renderer}
				className={className}
				// intervalDelay={1000}
			/>
		</>
	);
};
