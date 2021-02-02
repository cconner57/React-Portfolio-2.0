import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

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

	const { register, handleSubmit, errors } = useForm();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const formHandler = () => {
		try {
			let templateParams = {
				name: form.name,
				email: form.email,
				message: form.message,
			};
			emailjs
				.send(
					'service_nltgfcr',
					'template_51ckd9k',
					templateParams,
					'user_f3DauivAi5VTbaLdtvUKS'
				)
				.then(
					function (response) {
						console.log('SUCCESS!', response.status, response.text);
					},
					function (error) {
						console.log('FAILED...', error);
					}
				);
		} catch (error) {
			console.log(error);
		}
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
					<form autoComplete='on' onSubmit={(e) => e.preventDefault()}>
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
						<button onClick={handleSubmit(formHandler)}>
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
	@media screen and (min-width: 360px) and (max-width: 765px) {
		justify-content: center;
	}
`;

const Contact = styled(Glass)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-height: 80vh;
	margin: 5vh auto;
	z-index: 4;
	backdrop-filter: blur(7px);
	-webkit-backdrop-filter: blur(7px);
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-width: 30vw;
		min-height: 80vh;
		margin: 0 2rem;
		h1 {
			font-size: 4rem;
			color: ${color.altText};
			text-shadow: 2px -2px 6px hsla(0, 0%, 0%, 0.5);
		}
		div {
			display: flex;
			border-radius: 10px;
			background-color: hsla(200, 23%, 97%, 0.5);
			margin: 0.45rem 0;
			padding: 0.5rem;
			svg {
				margin: 2.5rem 0.15rem 0 0.5rem;
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
	@media screen and (min-width: 360px) and (max-width: 765px) {
		margin: 10vh auto 0;
		form {
			h1 {
				margin: 1rem 0;
				font-size: clamp(2rem, 1vw, 3rem);
			}
			svg {
				display: none;
			}
		}
	}
`;

const FormInput = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	label {
		font-size: clamp(1rem, 2vw, 1.25rem);
		user-select: none;
	}
	input {
		font-size: clamp(1rem, 2vw, 1.25rem);
		border: none;
		border-bottom: 2px solid black;
		min-width: 30rem;
		padding: 0.5rem;
		background: none;
	}
	textarea {
		font-size: clamp(1rem, 2vw, 1.25rem);
		resize: none;
		border: none;
		border-bottom: 2px solid black;
		min-width: 30rem;
		min-height: 8rem;
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
	@media screen and (min-width: 360px) and (max-width: 765px) {
		input, textarea {
			min-width: 70vw;
		}
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
