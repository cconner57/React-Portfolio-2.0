import React from 'react';
import styled from 'styled-components';

const InfoPill = ({ children }) => {
	return <PillList>{children}</PillList>;
};

export default InfoPill;

const PillList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	div {
		border: 10px;
		margin: 3px;
		padding: 2px 5px;
		border-radius: 15px;
		color: white;
		text-shadow: 0px -1px 2px hsla(0, 0%, 0%, 0.5);
		background: hsl(204, 100%, 50%);
		user-select: none;
		h4 {
			font-size: clamp(.75rem, 1vw, 1rem);
			user-select: none;
		}
	}
`;
