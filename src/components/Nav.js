import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { color, fontSize, Link } from '../Styles';

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
		<Container>
			<Navbar active={show}>
				<Logo active={show}>
					<Link href='#about'>{show ? '< CC >' : '< Chris Conner >'}</Link>
				</Logo>
				<StyledLink active={show}>
					<Link nav href='#projects'>
						PROJECTS
					</Link>
					<Link nav href='#contact'>
						CONTACT
					</Link>
				</StyledLink>
			</Navbar>
		</Container>
	);
};

const Container = styled.nav`
	display: flex;
	justify-content: center;
	min-width: 100vw;
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
	background: ${color.primary};
	box-shadow: 0 0.5rem 2rem 0 hsla(236, 63%, 32%, 0.37);
	transition: all ease 1s;
	@media (min-width: 360px) and (max-width: 430px) {
		justify-content: center;
	}
	/* @media (min-width: 1200px) {
		justify-content: space-around;
	} */
	${({ active }) =>
		active &&
		`
		min-height: 8vh;
		min-width: 60vw;
		margin: 1.5rem 0 0;
		border-radius: 15px;
		background: hsla(200, 100%, 85%, .5);
		backdrop-filter: blur( 7px );
		-webkit-backdrop-filter: blur( 7px );
		@media (min-width: 360px) and (max-width: 430px) {
			min-width: 100vw;
			margin: 0;
		}
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
	${Link} {
		font-size: ${fontSize.logo};
		font-family: 'Nanum Gothic', sans-serif;
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
	min-width: 35vw;
	${({ active }) =>
		active &&
		`
		min-width: 40vw;
		@media (max-width: 850px) {
			width: 60vw;
			justify-content: space-evenly;
		}
	`}
	${Link} {
		transition: color ease 0.5s;
		${({ active }) =>
			active &&
			`
			color: ${color.text};
		`}
	}
	${Link}:hover {
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
	@media (min-width: 360px) and (max-width: 430px) {
		${Link} {
			margin-left: 0.5rem;
		}
	}
	@media (max-width: 1200px) {
		min-width: 50vw;
		padding: 0 0.5rem;
	}
`;

export default Nav;
