import React from 'react';

import InfoPill from './InfoPill';
import styled from 'styled-components';

const TechItem = ({ picture, name, tech, github, site }) => {
	return (
		<TechItemContainer>
			<picture>
				<source
					srcSet={
						process.env.PUBLIC_URL + `/images/projects/react/${picture}.webp`
					}
					type='image/webp'
				/>
				<img
					width={192}
					height={106}
					src={process.env.PUBLIC_URL + `/images/projects/react/${picture}.jpg`}
					alt={picture}
				/>
			</picture>
			<h3>{name}</h3>
			<InfoPill>
				{tech.map((name, key) => (
					<div key={key}>
						<h4>{name}</h4>
					</div>
				))}
			</InfoPill>
			<ProjectLink>
				{github && (
					<a href={github} alt='Github Link'>
						Github
					</a>
				)}
				{site && (
					<a href={site} alt='Live Site Link'>
						Live Site
					</a>
				)}
			</ProjectLink>
		</TechItemContainer>
	);
};

export default TechItem;

const TechItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 15rem;
	width: 12.5rem;
	border-radius: 10px;
	box-shadow: 2px 2px 4px 1px hsla(236, 63%, 33%, 0.37);
	overflow: hidden;
	text-align: center;
	transition: box-shadow 0.25s ease-in-out;
	background-color: hsl(207, 100%, 98%);
	&:hover {
		box-shadow: 2px 2px 5px 3px hsla(0, 0%, 0%, 0.6);
	}
	img {
		user-select: none;
	}
	h3 {
		font-size: 1.25rem;
		user-select: none;
	}
	@media (max-width: 850px) {
		display: none;
		height: 13rem;
		h3 + div {
			display: none;
		}
	}
`;

const ProjectLink = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 5px 0;
	min-width: 100%;
	a {
		color: black;
		text-decoration: none;
		font-weight: bold;
		font-size: 1.2em;
		padding: 0 3px;
		transition: all 0.5s ease-in-out;
	}
	a:hover {
		box-shadow: 1px 1px 15px 7px hsl(212, 92%, 80%);
		background: hsl(212, 92%, 80%);
		padding: 0 3px;
		border-radius: 10px;
		color: hsl(0, 0%, 50%);
	}
`;
