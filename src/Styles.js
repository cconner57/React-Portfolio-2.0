import styled from 'styled-components';

export const color = {
	primary: 'hsl(203, 100%, 50%)',
	neutral: 'hsl(211, 12%, 43%)',
	supporting: 'hsl(180, 77%, 47%)',
	error: 'hsl(14, 89%, 55%)',
	text: 'hsl(0, 0%, 13%)',
	altText: 'hsl(0, 0%, 100%)',
	bubble: 'hsl(212, 92%, 43%)',
	glass: 'hsla(200, 23%, 97%, 0.5)',
	boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
};

// @media screen and (min-width: 360px) and (max-width: 765px) {
// }
// @media screen and (min-width: 766px) and (max-width: 1023px) {
// }
// @media screen and (min-width: 1024px) {
// }

export const fontSize = {
	logo: 'clamp(.9rem, 2vw, 2.25rem)',
	title: 'clamp(1.5rem, 3vw, 4rem)',
	a: 'clamp(.9rem, 2vw, 2rem)',
	p: '',
	h1: 'clamp(3rem,2vw,3.75rem)',
	h2: 'clamp(1.5rem, 1.5vw, 2rem)',
	h3: '',
	h4: '',
	h5: '',
};

export const Link = styled.a`
	font-size: ${fontSize.a};
	font-weight: bold;
	text-decoration: none;
	color: ${color.altText};
	&:hover {
		color: ${color.neutral};
	}
`;
