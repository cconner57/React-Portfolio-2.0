import { Suspense, lazy } from 'react';

import Nav from './components/Nav';

const About = lazy(() => import('./pages/AboutSection'));
const Projects = lazy(() => import('./pages/ProjectsSection'));
const Contact = lazy(() => import('./pages/ContactSection'));

const App = () => {
	return (
		<>
			<Nav />
			<Suspense fallback={<div>Loading...</div>}>
				<About />
				<Projects />
				<Contact />
			</Suspense>
		</>
	);
};

export default App;
