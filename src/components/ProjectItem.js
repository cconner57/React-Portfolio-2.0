import React, { useState } from 'react';

import InfoPill from './InfoPill';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CaretCircleDown, CaretCircleUp } from 'phosphor-react';

const ProjectItem = ({ name, language, live, github }) => {
	const [open, setOpen] = useState(false);
	return (
		<Project
			isOpen={open}
			onClick={() => setOpen(!open)}>
			<h3>{name}</h3>
			<InfoPill>
				{language &&
					language.map((tech, key) => (
						<div key={key}>
							<h4>{tech}</h4>
						</div>
					))}
			</InfoPill>
			{open ? <CaretCircleUp size={30} /> : <CaretCircleDown size={30} />}
			<ProjectLink>
				{github && (
					<a
						href={github}
						alt='Github Link'
						target='_blank'
						rel='noopener noreferrer'>
						Github
					</a>
				)}
				{live && (
					<a
						href={live}
						alt='Live Site Link'
						target='_blank'
						rel='noopener noreferrer'>
						Live Site
					</a>
				)}
			</ProjectLink>
		</Project>
	);
};

export default ProjectItem;

const Project = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	align-items: ${(props) => props.isOpen || 'center'};
	max-height: ${(props) => (props.isOpen ? '5rem' : '3rem')};
	min-height: ${(props) => (props.isOpen ? '5rem' : '3rem')};
	margin: 5px 1rem;
	padding: 3px;
	border-radius: 5px;
	box-shadow: 2px 2px 4px 1px hsla(236, 63%, 33%, 0.37);
	transition: all 0.25s ease-in-out;
	cursor: pointer;
	overflow: hidden;
	background-color: hsl(207, 100%, 98%);
	&:hover {
		box-shadow: 2px 2px 5px 3px hsla(0, 0%, 0%, 0.6);
	}
	h3 {
		min-width: 12rem;
		font-size: 1.3rem;
		margin: 1px 1rem;
		padding-top: ${(props) => props.isOpen && '5px'};
		user-select: none;
	}
	h4 {
		font-size: 1.3rem;
		margin: 1px 1rem;
		user-select: none;
	}
	svg {
		margin-left: auto;
		margin-right: 1rem;
	}
	@media (max-width: 850px) {
		max-width: 30rem;
		min-height: 3rem;
		cursor: unset;
		h3 + div {
			display: none;
		}
		svg {
			display: none;
		}
	}
`;

const ProjectLink = styled.div`
	display: flex;
	justify-content: center;
	margin: 5px 0;
	min-width: 100%;
	a {
		color: black;
		text-decoration: none;
		font-weight: bold;
		font-size: 1.2em;
		margin: 0 1rem;
		padding: 0 3px;
		transition: all 0.35s ease-in-out;
	}
	a:hover {
		box-shadow: 1px 1px 15px 7px hsl(212, 92%, 80%);
		background: hsl(212, 92%, 80%);
		padding: 0 3px;
		border-radius: 10px;
		color: hsl(0, 0%, 50%);
	}
	@media (max-width: 850px) {
		min-width: 50%;
	}
`;
