import React, { useState, useEffect } from 'react';

import Glass from '../components/Glass';
import Button from '../components/Button';
import Wave from '../components/Wave';
import Sun from '../components/Sun';

import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { scrollReveal } from '../animations';
import { useScroll } from '../components/UseScroll';
import { color } from '../Styles';

const LandingSection = () => {
	const [colors, setColors] = useState('#7209b7');
	const [isClicked, setIsClicked] = useState(false);
	const [element, controls] = useScroll();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setColors(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
		}, 1500);
		return () => clearTimeout(timeoutId);
	}, [colors]);

	return (
		<>
			<Container
				id='about'
				variants={scrollReveal}
				animate={controls}
				initials='hidden'
				ref={element}>
				<IntroGlass>
					<Introduction textColor={colors}>
						<div className='name'>
							<h1>Hi, I'm Chris</h1>
							<Button
								url='https://www.linkedin.com/in/chris-conner1/'
								name='LinkedIn'>
								<LinkedinLogo size={40} color={color.altText} />
							</Button>
						</div>
						<div className='bar'></div>
						<div className='description'>
							<h2>
								Front-End Developer Specializing In Developing Apps <br />
								With <span className='style'>Style</span> <br />
								And{' '}
								<span
									className='function'
									onClick={() => setIsClicked(!isClicked)}>
									{'{Function}'}
								</span>
							</h2>
							<Button url='https://github.com/cconner57' name='Github'>
								<GithubLogo size={40} color={color.altText} />
							</Button>
						</div>
					</Introduction>
				</IntroGlass>
			</Container>
				{isClicked && <Sun />}
				<Wave isClicked={isClicked} />
		</>
	);
};

const Container = styled(motion.div)`
	position: relative;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
	font-family: 'Roboto', Arial, Helvetica, sans-serif;;
	@media screen and (max-width: 767px) {
	}
	@media screen and (min-width: 768px) and (max-width: 1023px) {
	}
	@media screen and (min-width: 1024px) {
	}
`;

const IntroGlass = styled(Glass)`
	min-width: 45vw;
	min-height: 45vh;
	z-index: 2;
	@media screen and (max-width: 767px) {
		min-height: 40vh;
	}
	@media screen and (min-width: 768px) and (max-width: 1023px) {
	}
	@media screen and (min-width: 1024px) {
	}
`;

const Introduction = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	@media (max-width: 850px) {
		flex-direction: column;
	}
	.name {
		width: 20rem;
		display: flex;
		height: 20rem;
		flex-direction: column;
		justify-content: space-between;
		text-align: center;
		align-items: center;
		h1 {
			margin-top: 3rem;
			font-size: 3.75em;
			user-select: none;
			-webkit-user-select: none;
		}
		@media (max-width: 850px) {
			height: 15rem;
			h1 {
				margin: 0;
			}
		}
	}
	.bar {
		width: 1rem;
		height: 20rem;
		border-radius: 10px;
		background: hsl(199, 100%, 62%);
		box-shadow: 0 15px 20px 0 rgba(31, 38, 135, 0.37);
		@media (max-width: 850px) {
			display: none;
		}
	}
	.description {
		width: 20rem;
		height: 20rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		h2 {
			width: 20rem;
			height: 13rem;
			padding: 0 1.5rem;
			font-size: clamp(1.5rem, 1.5vw, 2rem);
			user-select: none;
		}
		@media (max-width: 850px) {
			height: 6rem;
			margin-top: 1rem;
			h2 {
				display: none;
			}
		}
	}
	.style {
		color: ${(props) => props.textColor || 'black'};
		font-family: 'Lobster', cursive;
		font-size: 2.5rem;
		user-select: none;
		-webkit-user-select: none;
		transition: color ease 1s;
		transform: skewX(-10deg);
		display: inline-block;
		text-shadow: 3px -2px 2px hsla(0, 0%, 0%, 0.25);
	}
	.function {
		color: white;
		font-size: 2rem;
		font-family: 'Audiowide', cursive;
		cursor: pointer;
		text-shadow: 2px -2px 8px hsla(0, 0%, 0%, 0.25);
	}
	.function:hover {
		text-shadow: 2px -2px 8px hsla(0, 0%, 0%, 0.45);
	}
`;

export default LandingSection;
