import React from 'react';

import { color } from '../Styles';
import styled from 'styled-components';

const randomNum = (min, max) => {
	return Math.floor(Math.random() * max) + min;
};

const Bubble = () => {
	return (
		<>
			<Circles
				location={`${randomNum(0, 100)}vw`}
				height={`${randomNum(5, 200)}px`}
				width={`${randomNum(5, 200)}px`}
				delay={`${randomNum(0, 10)}s`}
				duration={`animate ${randomNum(5, 20)}s linear infinite`}
				shadow={`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
					0,
					20
				)}px ${randomNum(15, 30)}px ${randomNum(
					0,
					5
				)}px rgba(255, 255, 255, 1)`}
			/>
			<Circles
				location={`${randomNum(0, 100)}vw`}
				height={`${randomNum(5, 200)}px`}
				width={`${randomNum(5, 200)}px`}
				delay={`${randomNum(0, 10)}s`}
				duration={`animate ${randomNum(5, 20)}s linear infinite`}
				shadow={`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
					0,
					20
				)}px ${randomNum(15, 30)}px ${randomNum(
					0,
					5
				)}px rgba(255, 255, 255, 1)`}
			/>
			<Circles
				location={`${randomNum(0, 100)}vw`}
				height={`${randomNum(5, 200)}px`}
				width={`${randomNum(5, 200)}px`}
				delay={`${randomNum(0, 10)}s`}
				duration={`animate ${randomNum(5, 20)}s linear infinite`}
				shadow={`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
					0,
					20
				)}px ${randomNum(15, 30)}px ${randomNum(
					0,
					5
				)}px rgba(255, 255, 255, 1)`}
			/>
			<Circles
				location={`${randomNum(0, 100)}vw`}
				height={`${randomNum(5, 200)}px`}
				width={`${randomNum(5, 200)}px`}
				delay={`${randomNum(0, 10)}s`}
				duration={`animate ${randomNum(5, 20)}s linear infinite`}
				shadow={`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
					0,
					20
				)}px ${randomNum(15, 30)}px ${randomNum(
					0,
					5
				)}px rgba(255, 255, 255, 1)`}
			/>
			<Circles
				location={`${randomNum(0, 100)}vw`}
				height={`${randomNum(5, 200)}px`}
				width={`${randomNum(5, 200)}px`}
				delay={`${randomNum(0, 10)}s`}
				duration={`animate ${randomNum(5, 20)}s linear infinite`}
				shadow={`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
					0,
					20
				)}px ${randomNum(15, 30)}px ${randomNum(
					0,
					5
				)}px rgba(255, 255, 255, 1)`}
			/>
			<Circles
				location={`${randomNum(0, 100)}vw`}
				height={`${randomNum(5, 200)}px`}
				width={`${randomNum(5, 200)}px`}
				delay={`${randomNum(0, 10)}s`}
				duration={`animate ${randomNum(5, 20)}s linear infinite`}
				shadow={`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
					0,
					20
				)}px ${randomNum(15, 30)}px ${randomNum(
					0,
					5
				)}px rgba(255, 255, 255, 1)`}
			/>
			<Circles
				location={`${randomNum(0, 100)}vw`}
				height={`${randomNum(5, 200)}px`}
				width={`${randomNum(5, 200)}px`}
				delay={`${randomNum(0, 10)}s`}
				duration={`animate ${randomNum(5, 20)}s linear infinite`}
				shadow={`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
					0,
					20
				)}px ${randomNum(15, 30)}px ${randomNum(
					0,
					5
				)}px rgba(255, 255, 255, 1)`}
			/>
			<Circles
				location={`${randomNum(0, 100)}vw`}
				height={`${randomNum(5, 200)}px`}
				width={`${randomNum(5, 200)}px`}
				delay={`${randomNum(0, 10)}s`}
				duration={`animate ${randomNum(5, 20)}s linear infinite`}
				shadow={`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
					0,
					20
				)}px ${randomNum(15, 30)}px ${randomNum(
					0,
					5
				)}px rgba(255, 255, 255, 1)`}
			/>
			<Circles
				location={`${randomNum(0, 100)}vw`}
				height={`${randomNum(5, 200)}px`}
				width={`${randomNum(5, 200)}px`}
				delay={`${randomNum(0, 10)}s`}
				duration={`animate ${randomNum(5, 20)}s linear infinite`}
				shadow={`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
					0,
					20
				)}px ${randomNum(15, 30)}px ${randomNum(
					0,
					5
				)}px rgba(255, 255, 255, 1)`}
			/>
			<Circles
				location={`${randomNum(0, 100)}vw`}
				height={`${randomNum(5, 200)}px`}
				width={`${randomNum(5, 200)}px`}
				delay={`${randomNum(0, 10)}s`}
				duration={`animate ${randomNum(5, 20)}s linear infinite`}
				shadow={`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
					0,
					20
				)}px ${randomNum(15, 30)}px ${randomNum(
					0,
					5
				)}px rgba(255, 255, 255, 1)`}
			/>
			<Circles
				location={`${randomNum(0, 100)}vw`}
				height={`${randomNum(5, 200)}px`}
				width={`${randomNum(5, 200)}px`}
				delay={`${randomNum(0, 10)}s`}
				duration={`animate ${randomNum(5, 20)}s linear infinite`}
				shadow={`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
					0,
					20
				)}px ${randomNum(15, 30)}px ${randomNum(
					0,
					5
				)}px rgba(255, 255, 255, 1)`}
			/>
			<Circles
				location={`${randomNum(0, 100)}vw`}
				height={`${randomNum(5, 200)}px`}
				width={`${randomNum(5, 200)}px`}
				delay={`${randomNum(0, 10)}s`}
				duration={`animate ${randomNum(5, 20)}s linear infinite`}
				shadow={`0 10px 30px rgba(0, 0, 0, 0.2),
                    inset ${randomNum(0, 15)}px ${randomNum(
					0,
					20
				)}px ${randomNum(15, 30)}px ${randomNum(
					0,
					5
				)}px rgba(255, 255, 255, 1)`}
			/>
		</>
	);
};

export default React.memo(Bubble);

const Circles = styled.div`
	position: absolute;
	bottom: -200px;
	left: ${(props) => props.location || '0vw'};
	width: ${(props) => props.width || '80px'};
	height: ${(props) => props.width || '80px'};
	z-index: 1;
	border-radius: 50%;
	background-color: ${color.bubble};
	animation: ${(props) => props.duration || 'animate 20s linear infinite;'};
	animation-delay: ${(props) => props.delay || '5s'};
	box-shadow: ${(props) =>
		props.shadow ||
		`0 20px 30px rgba(0, 0, 0, 0.2),
		inset 0px 5px 30px 5px rgba(255, 255, 255, 1)`};

	@keyframes animate {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-60vh);
		}
		100% {
			transform: translateY(-125vh);
		}
	}
`;
