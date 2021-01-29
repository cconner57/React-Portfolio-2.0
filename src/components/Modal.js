import React from 'react';
import ReactDom from 'react-dom';

import styled from 'styled-components';

const Modal = ({ setShow, children }) => {
	const closeModal = (e) => {
		const outsideModal = document.querySelector('.ModalContainer');
		const exitModal = document.querySelector('.ModalClose');
		if (e.target === outsideModal || e.target === exitModal) setShow(false);
	};

	return ReactDom.createPortal(
		<ModalContainer
			className='ModalContainer'
			onClick={(e) => {
				closeModal(e);
			}}
			aria-modal='true'
			tabIndex='-1'>
			<div>
				<p
					className='ModalClose'
					onClick={(e) => {
						closeModal(e);
					}}>
					&#x2715;
				</p>
				{children}
			</div>
		</ModalContainer>,
		document.getElementById('modal')
	);
};

export default Modal;

const ModalContainer = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 15;
	background-color: hsla(0, 0%, 0%, 0.5);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	div {
		position: relative;
		width: 50%;
		height: auto;
		border-radius: 10px;
		padding: 1rem;
		overflow: hidden;
		background-color: hsl(0, 0%, 100%);
		p {
			position: absolute;
			top: 0.5rem;
			right: 1.25rem;
            font-size: 2rem;
            text-align: center;
            padding-top: 4px;
            width: 3rem;
			height: 3rem;
			border-radius: 50%;
			font-weight: bolder;
			cursor: pointer;
			transition: all .1s ease-in-out;
		}
		p:hover {
            color: hsl(0,0%, 100%);
			background-color: hsla(0, 0%, 0%, 0.5);
			border-radius: 50%;
		}
		img {
			width: 100%;
		}
	}
`;
