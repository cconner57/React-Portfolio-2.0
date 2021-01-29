import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';

import Nav from './components/Nav';
import GlobalStyles from './GlobalStyles';

const About = lazy(() => import('./pages/AboutSection'));
const Projects = lazy(() => import('./pages/ProjectsSection'));
const Contact = lazy(() => import('./pages/ContactSection'));

const App = () => {
	return (
		<Background>
			<GlobalStyles />
			<Nav />
			<Suspense fallback={<div>Loading...</div>}>
				<About />
				<Projects />
				<Contact />
			</Suspense>
		</Background>
	);
};

const Background = styled.div`
	background-image: linear-gradient(
		hsl(184, 98%, 77%) 0%,
		hsl(215, 100%, 70%) 100%
	);
`;

export default App;
