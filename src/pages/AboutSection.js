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
import { color, fontSize } from '../Styles';

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
								With <span className='style'>Style</span> 
								&
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
	font-family: 'Roboto', Arial, Helvetica, sans-serif;
`;

const IntroGlass = styled(Glass)`
	min-width: 45vw;
	min-height: 45vh;
	z-index: 2;
	@media (min-width: 360px) and (max-width: 765px) {
		max-height: 50vh;
	}
`;

const Introduction = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	@media (min-width: 360px) and (max-width: 765px) {
		flex-direction: column;
	}
	.name {
		width: 20rem;
		height: 20rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: center;
		align-items: center;
		h1 {
			max-width: 10rem;
			margin-top: 3rem;
			font-size: ${fontSize.h1};
			user-select: none;
			-webkit-user-select: none;
		}
		@media (min-width: 360px) and (max-width: 765px) {
			width: 15rem;
			height: 13rem;
			h1 {
				margin: 0;
			}
			svg {
				display: none;
			}
		}
	}
	.bar {
		width: 1rem;
		height: 20rem;
		border-radius: 10px;
		background: hsl(199, 100%, 62%);
		box-shadow: 0 15px 20px 0 rgba(31, 38, 135, 0.37);
		@media (min-width: 360px) and (max-width: 765px) {
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
			padding: 1.5rem 2.5rem 0;
			font-size: ${fontSize.h2};
			user-select: none;
		}
		@media (min-width: 360px) and (max-width: 765px) {
			height: 6rem;
			margin-top: 1rem;
			h2 {
				display: none;
			}
			svg {
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
		color: ${color.altText};
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
