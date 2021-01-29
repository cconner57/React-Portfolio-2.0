import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { FileText } from 'phosphor-react';
import { color, Link } from '../Styles';

const Nav = () => {
	const [show, handleNav] = useState(false);

	const windowTransition = () => {
		if (window.scrollY > 10) {
			handleNav(true);
		} else handleNav(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', windowTransition);
		return () => {
			window.removeEventListener('scroll', windowTransition);
		};
	}, []);

	return (
		<NavContainer>
			<Navbar active={show}>
				<Logo active={show}>
					<a href='#about'>{show ? '< CC >' : '< Chris Conner >'}</a>
				</Logo>
				<StyledLink active={show}>
					<Link nav href='#projects'>
						PROJECTS
					</Link>
					<Link nav href='#contact'>
						CONTACT
					</Link>
					<Resume active={show}>
						<FileText size={28} color={show ? 'black' : 'white'} />
						<a href='/images/Chris-Conner-Resume-Online.pdf' alt='Resume'  target="_blank" rel="noopener noreferrer">
							RESUME
						</a>
					</Resume>
				</StyledLink>
			</Navbar>
		</NavContainer>
	);
};

const NavContainer = styled.nav`
	display: flex;
	justify-content: center;
	
`;

const Navbar = styled.div`
	position: fixed;
	top: 0;
	z-index: 10;
	display: flex;
	min-width: 100vw;
	min-height: 10vh;
	align-items: center;
	justify-content: space-around;
	background: hsl(203, 100%, 50%);
	box-shadow: 0 0.5rem 2rem 0 hsla(236, 63%, 32%, 0.37);
	font-family: 'Roboto', sans-serif;
	transition: all ease 1s;
	@media (min-width: 1200px) {
		justify-content: space-around;
	}
	${({ active }) =>
		active &&
		`
		min-height: 8vh;
		min-width: max(530px, 60vw);
		margin: 1.5rem 0 0;
		border-radius: 15px;
		background: hsla(200, 100%, 85%, .5);
		backdrop-filter: blur( 7px );
		-webkit-backdrop-filter: blur( 7px );
		@media (max-width: 850px) {
			a {
				margin-left: 1rem;
			}
		}
		@media (max-width: 1200px) {
			justify-content: space-around;
		}
	`}
`;

const Logo = styled.div`
	${({ active }) =>
		active &&
		`
		margin-left: 3rem;
		color: ${color.text};
		@media (max-width: 850px) {
			margin: 0;
		}
	`}
	a {
		font-size: clamp(1.5rem, 2vw, 2.25rem);
		color: ${color.altText};
		font-family: 'Nanum Gothic', sans-serif;
		text-decoration: none;
		transition: all ease 0.25s;
		${({ active }) =>
			active &&
			`
			color: ${color.text};
		`}
	}
`;

const StyledLink = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: 30vw;
	a {
		font-size: clamp(1.15rem, 2vw, 2rem);
		text-decoration: none;
		font-family: 'Nanum Gothic', sans-serif;
		color: ${color.altText};
		transition: all ease 0.5s;
		${({ active }) =>
			active &&
			`
			color: ${color.text};
		`}
	}
	a:hover {
		color: hsla(0, 0%, 90%, 0.5);
		margin-bottom: -7px;
		border-bottom: 7px solid ${color.altText};
		${({ active }) =>
			active &&
			`
			color: hsla(0, 0%, 40%, .5);
			margin-bottom: -7px;
			border-bottom: 7px solid ${color.text};
		`}
	}
	${({ active }) =>
		active &&
		`
		min-width: 40vw;
		@media (max-width: 850px) {
			width: 60vw;
			justify-content: space-evenly;
		}
	`}
	@media (max-width: 1200px) {
		min-width: 50vw;
		padding: 0 0.5rem;
	}
`;

const Resume = styled(StyledLink)`
	min-width: 1vw;
	cursor: pointer;
	align-items: center;
	a {
		margin-left: 0.5rem;
	}
	@media (max-width: 1200px) {
		svg {
			display: none;
		}
	}
	${({ active }) =>
		active &&
		`
		margin-right: 3rem;
		@media (max-width: 850px) {
			margin: 0;
			max-width: 15vw;
		}
	`}
`;

export default Nav;
