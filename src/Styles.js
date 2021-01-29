import styled from 'styled-components';

export const color = {
	primary: 'hsl(212, 92%, 43%)',
	neutral: 'hsl(211, 12%, 43%)',
	supporting: 'hsl(180, 77%, 47%)',
	error: 'hsl(14, 89%, 55%)',
	text: 'hsl(0, 0%, 13%)',
	altText: 'hsl(0, 0%, 100%)',
	boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
};

export const Link = styled.a`
	font-size: clamp(1.5rem, 1.5vw, 2rem);
	font-weight: bold;
	text-decoration: none;
	color: ${color.text};
	&:hover {
		color: ${color.neutral};
	}
`;
