import React from 'react';
import styled from 'styled-components';
import { color } from '../Styles';

const Glass = ({ children, className }) => {
	return (
		<GlassContainer className={className}>
			{children}
		</GlassContainer>
	);
};

export default Glass;

const GlassContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${color.glass};
	box-shadow: ${color.boxShadow};
	border-radius: 10px;
`;
