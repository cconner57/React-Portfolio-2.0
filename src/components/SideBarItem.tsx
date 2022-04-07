import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SideBarItemProps {
	icon: any;
	techLanguage: string;
	learned: string;
	color: string;
	changeLanguage: any;
	currentLanguage: any;
}

const SideBarItem = ({
	icon,
	techLanguage,
	learned,
	color,
	changeLanguage,
	currentLanguage,
}: SideBarItemProps) => {
	return (
		<motion.div
			className="BarItem"
			// current={currentLanguage}
			// tech={techLanguage}
			color={color}
			onClick={changeLanguage}
			style={{ color: `${color}` || 'black' }}>
			<FontAwesomeIcon icon={icon} size="2x" />
			<h2>
				{techLanguage} {learned || '(Learning Soon)'}
			</h2>
		</motion.div>
	);
};

export default SideBarItem;
