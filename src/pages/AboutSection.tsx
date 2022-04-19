import { useState, useEffect } from 'react';

import Glass from '../components/Glass';
import Button from '../components/Button';
import Wave from '../components/Wave';
import Sun from '../components/Sun';

import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../animations';
import { useScroll } from '../components/UseScroll';

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
			<motion.div
				className="Container"
				id="about"
				variants={scrollReveal}
				// animate={controls}
				// initials="hidden"
				// ref={element}
			>
				<div className="IntroGlass">
					<div
						className="Introduction"
						// textColor={colors}
					>
						<div className="name">
							<h1>Hi, I'm Chris</h1>
							<Button
								url="https://www.linkedin.com/in/chris-conner1/"
								name="LinkedIn">
								<LinkedinLogo
									size={40}
									// color={color.altText}
								/>
							</Button>
						</div>
						<div className="bar"></div>
						<div className="description">
							<h2>
								Front-End Developer Specializing In Developing Apps <br />
								With <span className="style">Style</span>&nbsp;&nbsp;&
								<span
									className="function"
									onClick={() => setIsClicked(!isClicked)}>
									{'{Function}'}
								</span>
							</h2>
							<Button url="https://github.com/cconner57" name="Github">
								<GithubLogo
									size={40}
									// color={color.altText}
								/>
							</Button>
						</div>
					</div>
				</div>
			</motion.div>
			{isClicked && <Sun />}
			<Wave isClicked={isClicked} />
		</>
	);
};

export default LandingSection;
