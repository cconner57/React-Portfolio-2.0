import React from 'react';

import styled from 'styled-components';
import { color } from '../Styles';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBarItem = ({
	icon,
	techLanguage,
	learned,
	color,
	changeLanguage,
	currentLanguage,
}) => {
	return (
		<BarItem
			current={currentLanguage}
			tech={techLanguage}
			color={color}
			onClick={changeLanguage}>
			<FontAwesomeIcon icon={icon} size='2x' />
			<h2>
				{techLanguage} {learned || '(Learning Soon)'}
			</h2>
		</BarItem>
	);
};

export default SideBarItem;

const BarItem = styled(motion.div)`
	display: flex;
	align-items: center;
	width: 90%;
	border-radius: 10px;
	padding: 7px 7px 7px 1.5rem;
	color: ${(props) => props.color || 'black'};
	box-shadow: 2px 2px 4px 1px hsla(236, 63%, 33%, 0.37);
	cursor: pointer;
	transition: box-shadow 0.25s ease-in-out;
	svg {
		user-select: none;
	}
	h2 {
		width: 180px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: clamp(0.25rem, 1vw, 1rem);
		margin-left: 0.75rem;
		user-select: none;
		transition: color 0.1s ease;
	}
	@media only screen and (max-width: 320px) {
	}
	@media (max-width: 850px) {
		justify-content: center;
		max-width: 4rem;
		padding: 1rem;
		h2 {
			display: none;
		}
	}
	${(props) =>
		props.current === props.tech &&
		`color: ${color.primary};
		box-shadow: 2px 2px 5px 3px hsla(212, 92%, 43%, 0.6);
		h2 {
			color: hsl(212, 92%, 43%);
		}`}
	&:hover {
		color: ${color.primary};
		box-shadow: 2px 2px 5px 3px hsla(212, 92%, 43%, 0.6);
		h2 {
			color: hsl(212, 92%, 43%);
		}
	}
`;
