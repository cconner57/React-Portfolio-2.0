import React, { useState } from 'react';
import { SideBar, ProjectState } from '../projectState';

import Modal from '../components/Modal';
import SectionTitle from '../components/SectionTitle';
import Glass from '../components/Glass';
import SideBarItem from '../components/SideBarItem';
import Certificates from '../components/Certificates';
import TechItem from '../components/TechItem';
import ProjectItem from '../components/ProjectItem';
import Wave from '../components/Wave';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { scrollReveal } from '../animations';
import { useScroll } from '../components/UseScroll';

const ProjectsSection = () => {
	const [language, setLanguage] = useState('React');
	const [show, setShow] = useState(false);
	const [modalImg, setModalImg] = useState('');
	const [element, controls] = useScroll();

	const modalHandler = (slide) => {
		if (show) {
			document.body.style.overflow = 'hidden';
		}
		setShow(!show);
		setModalImg(slide);
	};

	return (
		<>
			<Wave flipped />
			<Container
				id='projects'
				variants={scrollReveal}
				animate={controls}
				initials='hidden'
				ref={element}>
				{show && (
					<Modal show={show} setShow={setShow}>
						<img
							src={process.env.PUBLIC_URL + `/images/certificates/${modalImg}`}
							alt='certificate'
						/>
					</Modal>
				)}
				<SectionTitle>Projects</SectionTitle>
				<TechContainer>
					<Technology>
						<SideBarContainer>
							{SideBar.map((item, key) => (
								<SideBarItem
									icon={item.icon}
									techLanguage={item.techLanguage}
									color={item.color}
									learned={item.learned}
									changeLanguage={() => setLanguage(item.techLanguage)}
									currentLanguage={language}
									key={key}
								/>
							))}
							<Certificates modalHandler={modalHandler} />
						</SideBarContainer>
						<TechList>
							<h2>Featured Apps</h2>
							<Featured>
								<TechItem
									picture='travel-buddy'
									name='Travel Buddy'
									tech={['React', 'Redux', 'Node.js', 'PostgreSQL']}
									github='https://github.com/cconner57/travel-app-frontend'
									site='https://travel-buddy.vacations/home'
								/>
								<TechItem
									picture='covid19-dashboard'
									name='Covid-19 Dashboard'
									tech={['React', 'Redux', 'Python(Flask)', 'SQL']}
									github='https://github.com/cconner57/Covid-Dashboard'
								/>
								<TechItem
									picture='imdb-game'
									name='IMDB Game Clone'
									tech={[
										'React',
										'Styled Components',
										'Framer Motion',
										'Redux',
									]}
									github='https://github.com/cconner57/games-imdb-clone'
								/>
							</Featured>
							<hr />
							<ProjectList>
								{ProjectState[0][language].map((project, key) => (
									<ProjectItem
										name={project.name}
										language={project.language}
										live={project.live}
										github={project.github}
										key={key}
									/>
								))}
							</ProjectList>
						</TechList>
					</Technology>
				</TechContainer>
			</Container>
		</>
	);
};

export default ProjectsSection;

const Container = styled(motion.div)`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
`;

const TechContainer = styled.div`
	min-height: 90vh;
	min-width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Technology = styled(Glass)`
	height: 80vh;
	width: 80vw;
	display: flex;
	flex-direction: row;
	border-radius: 10px;
	@media screen and (min-width: 360px) and (max-width: 765px) {
	}
`;

const SideBarContainer = styled(motion.div)`
	min-height: auto;
	min-width: 25%;
	max-width: 25%;
	padding: .5rem 0;
	background-color: hsla(200, 23%, 98%, 0.9);
	border-radius: 10px 0 0 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	box-shadow: 2px 0px 4px 1px hsla(236, 63%, 33%, 0.37);
	@media screen and (min-width: 360px) and (max-width: 765px) {
		min-width: 15%;
		div:last-child {
			display: none;
		}
	}
`;

const TechList = styled.div`
	min-height: 100%;
	min-width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	h2 {
		color: black;
		font-size: clamp(2rem, 2.5vw, 3rem);
		margin: 1rem 0 1.5rem;
		user-select: none;
	}
	hr {
		width: 35rem;
		height: 5px;
		margin: 1.5rem 0;
		background: hsla(0, 0%, 0%, 0.5);
		border: none;
		border-radius: 10px;
	}
	@media screen and (min-width: 360px) and (max-width: 765px) {
		text-align: center;
		h2 {
			margin: 1.5rem 0.5rem;
		}
		hr {
			display: none;
		}
	}
	@media (max-width: 1149px) {
		hr {
			display: none;
		}
	}
`;

const Featured = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 55vw;
	@media (max-width: 1149px) {
		div {
			display: none;
		}
	}
	@media (min-width: 1150px) and (max-width: 1250px) {
		justify-content: space-between;
	}
`;

const ProjectList = styled(motion.div)`
	max-height: 25rem;
	min-width: 50vw;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	@media screen and (min-width: 360px) and (max-width: 765px) {
		min-height: 68vh;
		min-width: 15rem;
		margin: 0 0.25rem;
	}
	@media (min-width: 766px) and (max-width: 1149px) {
		max-height: 35rem;
	}
`;
