import React from 'react';

import { color, fontSize } from '../Styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionTitle = ({ children }) => {
	return (
		<>
			<Title >{children}</Title>
		</>
	);
};

export default SectionTitle;

const Title = styled(motion.h1)`
	font-size: ${fontSize.title};
	margin: 1.75rem 0 0 4rem;
	color: ${color.altText};
	text-shadow: 2px -2px 6px hsla(0, 0%, 0%, 0.5);
	user-select: none;
	z-index: 5;
	@media (max-width: 850px) {
		display: none;
	}
`;
