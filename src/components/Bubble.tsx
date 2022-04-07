import { memo } from 'react';

const randomNum = (min: number, max: number) => {
	return Math.floor(Math.random() * max) + min;
};

const Bubble = () => {
	return (
		<>
			<div
				className="Circles"
				style={{
					left: `${randomNum(0, 100)}vw` || '0vw',
					width: `${randomNum(5, 200)}px` || '80px',
					height: `${randomNum(5, 200)}px`,
					animation:
						`animate ${randomNum(5, 20)}s linear infinite` ||
						'animate 20s linear infinite',
					animationDelay: `${randomNum(0, 10)}s`,
					boxShadow:
						`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
							0,
							20
						)}px ${randomNum(15, 30)}px ${randomNum(
							0,
							5
						)}px rgba(255, 255, 255, 1)` ||
						`0 20px 30px rgba(0, 0, 0, 0.2),
						inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`,
				}}
			/>
			<div
				className="Circles"
				style={{
					left: `${randomNum(0, 100)}vw` || '0vw',
					width: `${randomNum(5, 200)}px` || '80px',
					height: `${randomNum(5, 200)}px`,
					animation:
						`animate ${randomNum(5, 20)}s linear infinite` ||
						'animate 20s linear infinite',
					animationDelay: `${randomNum(0, 10)}s`,
					boxShadow:
						`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
							0,
							20
						)}px ${randomNum(15, 30)}px ${randomNum(
							0,
							5
						)}px rgba(255, 255, 255, 1)` ||
						`0 20px 30px rgba(0, 0, 0, 0.2),
						inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`,
				}}
			/>
			<div
				className="Circles"
				style={{
					left: `${randomNum(0, 100)}vw` || '0vw',
					width: `${randomNum(5, 200)}px` || '80px',
					height: `${randomNum(5, 200)}px`,
					animation:
						`animate ${randomNum(5, 20)}s linear infinite` ||
						'animate 20s linear infinite',
					animationDelay: `${randomNum(0, 10)}s`,
					boxShadow:
						`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
							0,
							20
						)}px ${randomNum(15, 30)}px ${randomNum(
							0,
							5
						)}px rgba(255, 255, 255, 1)` ||
						`0 20px 30px rgba(0, 0, 0, 0.2),
						inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`,
				}}
			/>
			<div
				className="Circles"
				style={{
					left: `${randomNum(0, 100)}vw` || '0vw',
					width: `${randomNum(5, 200)}px` || '80px',
					height: `${randomNum(5, 200)}px`,
					animation:
						`animate ${randomNum(5, 20)}s linear infinite` ||
						'animate 20s linear infinite',
					animationDelay: `${randomNum(0, 10)}s`,
					boxShadow:
						`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
							0,
							20
						)}px ${randomNum(15, 30)}px ${randomNum(
							0,
							5
						)}px rgba(255, 255, 255, 1)` ||
						`0 20px 30px rgba(0, 0, 0, 0.2),
						inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`,
				}}
			/>
			<div
				className="Circles"
				style={{
					left: `${randomNum(0, 100)}vw` || '0vw',
					width: `${randomNum(5, 200)}px` || '80px',
					height: `${randomNum(5, 200)}px`,
					animation:
						`animate ${randomNum(5, 20)}s linear infinite` ||
						'animate 20s linear infinite',
					animationDelay: `${randomNum(0, 10)}s`,
					boxShadow:
						`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
							0,
							20
						)}px ${randomNum(15, 30)}px ${randomNum(
							0,
							5
						)}px rgba(255, 255, 255, 1)` ||
						`0 20px 30px rgba(0, 0, 0, 0.2),
						inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`,
				}}
			/>
			<div
				className="Circles"
				style={{
					left: `${randomNum(0, 100)}vw` || '0vw',
					width: `${randomNum(5, 200)}px` || '80px',
					height: `${randomNum(5, 200)}px`,
					animation:
						`animate ${randomNum(5, 20)}s linear infinite` ||
						'animate 20s linear infinite',
					animationDelay: `${randomNum(0, 10)}s`,
					boxShadow:
						`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
							0,
							20
						)}px ${randomNum(15, 30)}px ${randomNum(
							0,
							5
						)}px rgba(255, 255, 255, 1)` ||
						`0 20px 30px rgba(0, 0, 0, 0.2),
						inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`,
				}}
			/>
			<div
				className="Circles"
				style={{
					left: `${randomNum(0, 100)}vw` || '0vw',
					width: `${randomNum(5, 200)}px` || '80px',
					height: `${randomNum(5, 200)}px`,
					animation:
						`animate ${randomNum(5, 20)}s linear infinite` ||
						'animate 20s linear infinite',
					animationDelay: `${randomNum(0, 10)}s`,
					boxShadow:
						`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
							0,
							20
						)}px ${randomNum(15, 30)}px ${randomNum(
							0,
							5
						)}px rgba(255, 255, 255, 1)` ||
						`0 20px 30px rgba(0, 0, 0, 0.2),
						inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`,
				}}
			/>
			<div
				className="Circles"
				style={{
					left: `${randomNum(0, 100)}vw` || '0vw',
					width: `${randomNum(5, 200)}px` || '80px',
					height: `${randomNum(5, 200)}px`,
					animation:
						`animate ${randomNum(5, 20)}s linear infinite` ||
						'animate 20s linear infinite',
					animationDelay: `${randomNum(0, 10)}s`,
					boxShadow:
						`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
							0,
							20
						)}px ${randomNum(15, 30)}px ${randomNum(
							0,
							5
						)}px rgba(255, 255, 255, 1)` ||
						`0 20px 30px rgba(0, 0, 0, 0.2),
						inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`,
				}}
			/>
			<div
				className="Circles"
				style={{
					left: `${randomNum(0, 100)}vw` || '0vw',
					width: `${randomNum(5, 200)}px` || '80px',
					height: `${randomNum(5, 200)}px`,
					animation:
						`animate ${randomNum(5, 20)}s linear infinite` ||
						'animate 20s linear infinite',
					animationDelay: `${randomNum(0, 10)}s`,
					boxShadow:
						`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
							0,
							20
						)}px ${randomNum(15, 30)}px ${randomNum(
							0,
							5
						)}px rgba(255, 255, 255, 1)` ||
						`0 20px 30px rgba(0, 0, 0, 0.2),
						inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`,
				}}
			/>
			<div
				className="Circles"
				style={{
					left: `${randomNum(0, 100)}vw` || '0vw',
					width: `${randomNum(5, 200)}px` || '80px',
					height: `${randomNum(5, 200)}px`,
					animation:
						`animate ${randomNum(5, 20)}s linear infinite` ||
						'animate 20s linear infinite',
					animationDelay: `${randomNum(0, 10)}s`,
					boxShadow:
						`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
							0,
							20
						)}px ${randomNum(15, 30)}px ${randomNum(
							0,
							5
						)}px rgba(255, 255, 255, 1)` ||
						`0 20px 30px rgba(0, 0, 0, 0.2),
						inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`,
				}}
			/>
			<div
				className="Circles"
				style={{
					left: `${randomNum(0, 100)}vw` || '0vw',
					width: `${randomNum(5, 200)}px` || '80px',
					height: `${randomNum(5, 200)}px`,
					animation:
						`animate ${randomNum(5, 20)}s linear infinite` ||
						'animate 20s linear infinite',
					animationDelay: `${randomNum(0, 10)}s`,
					boxShadow:
						`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
							0,
							20
						)}px ${randomNum(15, 30)}px ${randomNum(
							0,
							5
						)}px rgba(255, 255, 255, 1)` ||
						`0 20px 30px rgba(0, 0, 0, 0.2),
						inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`,
				}}
			/>
			<div
				className="Circles"
				style={{
					left: `${randomNum(0, 100)}vw` || '0vw',
					width: `${randomNum(5, 200)}px` || '80px',
					height: `${randomNum(5, 200)}px`,
					animation:
						`animate ${randomNum(5, 20)}s linear infinite` ||
						'animate 20s linear infinite',
					animationDelay: `${randomNum(0, 10)}s`,
					boxShadow:
						`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
							0,
							20
						)}px ${randomNum(15, 30)}px ${randomNum(
							0,
							5
						)}px rgba(255, 255, 255, 1)` ||
						`0 20px 30px rgba(0, 0, 0, 0.2),
						inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`,
				}}
			/>
		</>
	);
};

export default memo(Bubble);
