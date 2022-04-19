import { motion } from 'framer-motion';

const SectionTitle = ({ children }: any) => {
	return (
		<>
			<motion.h1 className="Title">{children}</motion.h1>
		</>
	);
};

export default SectionTitle;
