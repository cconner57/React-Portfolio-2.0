import { useState, useEffect } from 'react';

const Nav = () => {
	const [show, handleNav] = useState(false);

	const windowTransition = () => {
		if (window.scrollY > 10) {
			handleNav(true);
		} else handleNav(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', windowTransition);
		return () => {
			window.removeEventListener('scroll', windowTransition);
		};
	}, []);

	return (
		<div className="Container">
			<div className="Navbar" active={show}>
				<div className="Logo" active={show}>
					<a href="#about">{show ? '< CC >' : '< Chris Conner >'}</a>
				</div>
				<div className="StyledLink" active={show}>
					<a nav href="#projects">
						PROJECTS
					</a>
					<a nav href="#contact">
						CONTACT
					</a>
				</div>
			</div>
		</div>
	);
};

export default Nav;
