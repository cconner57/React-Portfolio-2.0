export const scrollReveal = {
	hidden: {
		opacity: 0,
		scale: .8,
		transition: { duration: 1, delayChildren: 1, staggerChildren: 0.5 },
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			staggerChildren: 1,
			delayChildren: 0.5,
		},
	},
};

export const animateCerts = {
	hidden: {
		opacity: 0,
		
	},
	show: {
		opacity: 1,
		transition: {duration: 1}
	}
};
