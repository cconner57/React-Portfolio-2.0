import { useEffect, useState, useCallback } from 'react';

import { motion } from 'framer-motion';
import { CaretLeft, CaretRight } from 'phosphor-react';

const certs = [
	'AWS.jpg',
	'20-javascript-projects.jpg',
	'50-javascript-projects.jpg',
	'mern-ecommerce.jpg',
	'modern-javascript-beginning.jpg',
	'modern-javascript-bootcamp.jpg',
	'modern-react-bootcamp.jpg',
	'react-front-back.jpg',
	'react-native-guide.jpg',
];

interface CertificatesProps {
	modalHandler: (modal: string) => void;
}

const Certificates = ({ modalHandler }: CertificatesProps) => {
	const [slide, setSlide] = useState(0);

	const changeSlide = useCallback(
		(direction: any) => {
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
		<div className="Certificates">
			<h2>Certificates</h2>
			<motion.img
				key={slide}
				height="180"
				width="240"
				onClick={() => modalHandler(certs[slide])}
				src={process.env.PUBLIC_URL + `/images/certificates/${certs[slide]}`}
				alt={certs[slide]}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			/>
			<CaretLeft
				className="leftArrow"
				size={45}
				onClick={() => changeSlide('previous')}
			/>
			<CaretRight
				className="rightArrow"
				size={45}
				onClick={() => changeSlide('next')}
			/>
		</div>
	);
};

export default Certificates;
