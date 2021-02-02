import React from 'react';
import styled from 'styled-components';
import TopWave from '../images/wave1.png';

const Wave = ({ isClicked, flipped }) => {
	return (
		<>
			{!flipped ? (
				<Container width='100%' height='300'>
					<path
						fill='#0099ff'
						d='M0 67 C 273,183 822,-40 1920.00,106 V 359 H 0 V 67 Z'>
						{isClicked && (
							<animate
								repeatCount='indefinite'
								attributeName='d'
								dur='15s'
								values='
						M0 67 C 473,283 822,-40  1920,116 V 359 H 0 V 67 Z; 
						M0 67 C 473,-40 1222,283 1920,136 V 359 H 0 V 67 Z;
						M0 67 C 973,260 1722,-53 1920,120 V 359 H 0 V 67 Z; 
						M0 67 C 473,283 822,-40  1920,116 V 359 H 0 V 67 Z'
							/>
						)}
					</path>
				</Container>
			) : (
				<InvertedWave>
					<div></div>
				</InvertedWave>
			)}
		</>
	);
};

const Container = styled.svg`
	position: absolute;
	bottom: 0;
`;

const InvertedWave = styled.div`
	position: relative;
	div {
		position: absolute;
		top: -1;
		left: 0;
		width: 100%;
		height: 350px;
		background: url(${TopWave}) no-repeat;
	}
`;

export default Wave;
