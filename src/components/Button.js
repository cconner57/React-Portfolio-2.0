import React from 'react';
import styled from 'styled-components';
import { color } from '../Styles';

const Button = (props) => {
	return (
		<SocialButton href={props.url} target='_blank' rel='noreferrer'>
			<div className='socialLink'>
				{props.children}
				<p>{props.name}</p>
			</div>
		</SocialButton>
	);
};

export default Button;

const SocialButton = styled.a`
	text-decoration: none;
	.socialLink {
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 12rem;
		padding: 1rem 2rem;
		border-radius: 7px;
		background: hsl(199, 100%, 62%);
		box-shadow: inset 20px 20px 60px hsl(199, 68%, 53%),
			inset -20px -20px 60px hsl(190, 100%, 64%);
		transition: background ease 0.75s, box-shadow ease 0.75s;
	}
	.socialLink:hover {
		background-color: hsl(199, 100%, 40%);
		box-shadow: inset 20px 20px 60px hsl(199, 68%, 43%),
			inset -20px -20px 60px hsl(190, 100%, 44%);
		cursor: pointer;
	}
	p {
		font-size: 2rem;
		color: ${color.altText};
	}
	@media (max-width: 850px) {
		max-width: 12rem;
	}
`;
