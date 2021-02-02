import React, { useEffect, useState, useCallback } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CaretLeft, CaretRight } from 'phosphor-react';

const certs = [
	'AWS.jpg',
	'20-javascript-projects.jpg',
	'50-javascript-projects.jpg',
	'modern-javascript-beginning.jpg',
	'modern-javascript-bootcamp.jpg',
	'modern-react-bootcamp.jpg',
	'react-front-back.jpg',
	'react-native-guide.jpg',
];

const Certificates = ({ modalHandler }) => {
	const [slide, setSlide] = useState(0);

	const changeSlide = useCallback(
		(direction) => {
			if (direction === 'next') {
				slide === certs.length - 1
					? setSlide(0)
					: setSlide((slide) => slide + 1);
			}
			if (direction === 'previous') {
				slide < 1 ? setSlide(certs.length - 1) : setSlide((slide) => slide - 1);
			}
		},
		[slide]
	);

	useEffect(() => {
		const interval = setInterval(() => {
			changeSlide('next');
		}, 5000);
		return () => clearInterval(interval);
	}, [changeSlide]);

	return (
		<Container>
			<h2>Certificates</h2>
				<motion.img
					key={slide}
					height='180'
					width='240'
					onClick={() => modalHandler(certs[slide])}
					src={process.env.PUBLIC_URL + `/images/certificates/${certs[slide]}`}
					alt={certs[slide]}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				/>
			<CaretLeft
				className='leftArrow'
				size={45}
				onClick={() => changeSlide('previous')}
			/>
			<CaretRight
				className='rightArrow'
				size={45}
				onClick={() => changeSlide('next')}
			/>
		</Container>
	);
};

export default Certificates;

const Container = styled.div`
	position: relative;
	width: 90%;
	max-height: 17.5rem;
	border-radius: 10px;
	padding: 3px 7px;
	overflow: hidden;
	box-shadow: 0 4px 15px 0 rgba(31, 38, 135, 0.37);
	h2 {
		text-align: center;
		user-select: none;
		letter-spacing: 0.5px;
	}
	img {
		width: 100%;
		height: 90%;
		cursor: pointer;
	}
	.leftArrow {
		left: 2px;
	}
	.rightArrow {
		right: 2px;
	}
	.leftArrow,
	.rightArrow {
		position: absolute;
		top: 40%;
		cursor: pointer;
		border-radius: 50%;
		transition: all 0.1s ease-in-out;
	}
	.leftArrow:hover,
	.rightArrow:hover {
		background: hsla(0, 0%, 0%, 0.3);
		border-radius: 50%;
	}
`;
