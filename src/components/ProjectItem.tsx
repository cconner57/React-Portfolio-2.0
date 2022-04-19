import { useState } from 'react';

import InfoPill from './InfoPill';

import { motion } from 'framer-motion';
import { CaretCircleDown, CaretCircleUp } from 'phosphor-react';

interface ProjectItemProps {
	github: string;
	language: string[];
	live: string;
	name: string;
}

const ProjectItem = ({ name, language, live, github }: ProjectItemProps) => {
	const [open, setOpen] = useState(false);
	return (
		<motion.div
			onClick={() => setOpen(!open)}
			className="Project"
			style={{
				alignItems: `${open || 'center'}`,
				maxHeight: `${open ? '6rem' : '2rem'}`,
				minHeight: `${open ? '6rem' : '2rem'}`,
			}}>
			<h3>{name}</h3>
			<InfoPill>
				{language &&
					language.map((tech, key) => (
						<div key={key}>
							<h4>{tech}</h4>
						</div>
					))}
			</InfoPill>
			{open ? <CaretCircleUp size={30} /> : <CaretCircleDown size={30} />}
			<div>
				{github && (
					<a href={github} target="_blank" rel="noopener noreferrer">
						Github
					</a>
				)}
				{live && (
					<a href={live} target="_blank" rel="noopener noreferrer">
						Live Site
					</a>
				)}
			</div>
		</motion.div>
	);
};

export default ProjectItem;
