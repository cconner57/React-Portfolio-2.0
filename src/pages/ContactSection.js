import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import SectionTitle from '../components/SectionTitle';
import Glass from '../components/Glass';
import Bubble from '../components/Bubble';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { scrollReveal } from '../animations';
import { useScroll } from '../components/UseScroll';
import { color } from '../Styles';
import {
	User,
	EnvelopeSimple,
	ChatCircleText,
	PaperPlaneTilt,
} from 'phosphor-react';

const ContactSection = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [element, controls] = useScroll();

	const { register, errors } = useForm();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
			}
		};
		xhr.send(data);
		setIsSubmitted(true);
	};

	return (
		<ContactContainer
			id='contact'
			variants={scrollReveal}
			animate={controls}
			initials='hidden'
			ref={element}>
			<SectionTitle>Contact</SectionTitle>
			{!isSubmitted && (
				<Contact>
					<form
						autoComplete='on'
						onSubmit={handleSubmit}
						action='https://formspree.io/mvorpvwb'
						method='POST'>
						<h1>Contact Me</h1>
						<div>
							<User size={40} />
							<FormInput>
								<label htmlFor='given-name'>Name</label>
								<input
									type='text'
									name='name'
									id='given-name'
									placeholder='Enter Name'
									onChange={handleChange}
									ref={register({
										required: { value: true, message: '• Name is required' },
										minLength: { value: 3, message: '• Name is too short' },
										maxLength: { value: 30, message: '• Name is too long' },
									})}
								/>
								{errors.name && <p className='Error'>{errors.name.message}</p>}
							</FormInput>
						</div>
						<div>
							<EnvelopeSimple size={40} />
							<FormInput>
								<label htmlFor='email'>Email</label>
								<input
									type='text'
									name='email'
									id='email'
									placeholder='Enter Email'
									onChange={handleChange}
									ref={register({
										required: true,
										pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									})}
								/>
								{errors.email && <p className='Error'>• Email must be valid</p>}
							</FormInput>
						</div>
						<div>
							<ChatCircleText size={40} />
							<FormInput>
								<label htmlFor='message'>Message</label>
								<textarea
									name='message'
									id='message'
									placeholder='Enter Message'
									onChange={handleChange}
									ref={register({
										required: { value: true, message: '• Message is required' },
										minLength: {
											value: 5,
											message: '• Message must be a minimum of 5 letters',
										},
										maxLength: {
											value: 500,
											message: '• Message must be less than 500 letters long',
										},
									})}></textarea>
								{errors.message && (
									<p className='Error'>{errors.message.message}</p>
								)}
							</FormInput>
						</div>
						<button>
							Send
							<PaperPlaneTilt size={38} color={color.altText} />
						</button>
					</form>
				</Contact>
			)}
			{isSubmitted && (
				<Message>
					<img
						src={process.env.PUBLIC_URL + `/images/message.png`}
						alt='Message Sent'
					/>
					<p>Message has been sent!</p>
				</Message>
			)}
			<Bubble />
		</ContactContainer>
	);
};

export default ContactSection;

const ContactContainer = styled(motion.div)`
	display: flex;
	position: relative;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	@media (max-width: 850px) {
		justify-content: center;
	}
`;

const Contact = styled(Glass)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 70vh;
	margin: 10vh auto;
	z-index: 4;
	backdrop-filter: blur(7px);
	-webkit-backdrop-filter: blur(7px);
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-width: 30vw;
		margin: 0 2rem;
		h1 {
			font-size: 4rem;
			margin: 1.5rem 0 0.75rem;
			color: ${color.altText};
			text-shadow: 2px -2px 6px hsla(0, 0%, 0%, 0.5);
		}
		div {
			display: flex;
			border-radius: 10px;
			background-color: hsla(200, 23%, 97%, 0.5);
			margin: 0.5rem 0;
			padding: 0.5rem;
			svg {
				margin: 2.5rem 0.15rem 0 0.5rem;
				@media (max-width: 850px) {
					display: none;
				}
			}
		}
		button {
			display: flex;
			font-size: 2rem;
			justify-content: center;
			color: ${color.altText};
			align-items: center;
			min-width: 12rem;
			margin: 0.5rem 0 1rem;
			padding: 1rem 2rem;
			border: none;
			border-radius: 7px;
			background: hsl(199, 100%, 62%);
			box-shadow: inset 20px 20px 60px hsl(199, 68%, 53%),
				inset -20px -20px 60px hsl(190, 100%, 64%);
			transition: background ease 0.75s, box-shadow ease 0.75s;
			svg {
				padding-left: 10px;
			}
		}
		button:hover {
			background-color: hsl(199, 100%, 40%);
			box-shadow: inset 20px 20px 60px hsl(199, 68%, 43%),
				inset -20px -20px 60px hsl(190, 100%, 44%);
			cursor: pointer;
		}
	}
`;

const FormInput = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	padding: 0 1rem 0 0;
	label {
		font-size: 1.5rem;
		user-select: none;
	}
	input {
		font-size: 1.5rem;
		border: none;
		border-bottom: 2px solid black;
		min-width: 30rem;
		padding: 0.5rem;
		background: none;
	}
	textarea {
		font-size: 1.5rem;
		resize: none;
		border: none;
		border-bottom: 2px solid black;
		min-width: 30rem;
		min-height: 10rem;
		padding: 0.5rem;
		background: none;
	}
	p {
		position: absolute;
		top: 0px;
		left: 180px;
		margin: 0.5rem 0;
		font-size: 1.5rem;
		color: ${color.error};
	}
`;

const Message = styled(Contact)`
	min-height: 55vh;
	min-width: auto;
	img {
		transition: fade 1s ease;
	}
	p {
		margin: 2rem 0 4rem;
		font-size: 2.5rem;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;