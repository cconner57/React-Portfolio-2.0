import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

import SectionTitle from '../components/SectionTitle';
import Bubble from '../components/Bubble';

import { motion } from 'framer-motion';
import { scrollReveal } from '../animations';
import { useScroll } from '../components/UseScroll';
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
		<motion.div
			className="ContactContainer"
			id="contact"
			variants={scrollReveal}
			animate={controls}
			initials="hidden"
			ref={element}>
			<SectionTitle>Contact</SectionTitle>
			{!isSubmitted && (
				<div className="Contact">
					<form autoComplete="on" onSubmit={(e) => e.preventDefault()}>
						<h1>Contact Me</h1>
						<div>
							<User size={40} />
							<div className="FormInput">
								<label htmlFor="given-name">Name</label>
								<input
									type="text"
									name="name"
									id="given-name"
									placeholder="Enter Name"
									onChange={handleChange}
									ref={register({
										required: { value: true, message: '• Name is required' },
										minLength: { value: 3, message: '• Name is too short' },
										maxLength: { value: 30, message: '• Name is too long' },
									})}
								/>
								{errors.name && <p className="Error">{errors.name.message}</p>}
							</div>
						</div>
						<div>
							<EnvelopeSimple size={40} />
							<div className="FormInput">
								<label htmlFor="email">Email</label>
								<input
									type="text"
									name="email"
									id="email"
									placeholder="Enter Email"
									onChange={handleChange}
									ref={register({
										required: true,
										pattern:
											/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									})}
								/>
								{errors.email && <p className="Error">• Email must be valid</p>}
							</div>
						</div>
						<div>
							<ChatCircleText size={40} />
							<div className="FormInput">
								<label htmlFor="message">Message</label>
								<textarea
									name="message"
									id="message"
									placeholder="Enter Message"
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
									<p className="Error">{errors.message.message}</p>
								)}
							</div>
						</div>
						<button onClick={handleSubmit(formHandler)}>
							Send
							<PaperPlaneTilt size={38} color={color.altText} />
						</button>
					</form>
				</div>
			)}
			{isSubmitted && (
				<div className="Message">
					<img
						src={process.env.PUBLIC_URL + `/images/message.png`}
						alt="Message Sent"
					/>
					<p>Message has been sent!</p>
				</div>
			)}
			<Bubble />
		</motion.div>
	);
};

export default ContactSection;
