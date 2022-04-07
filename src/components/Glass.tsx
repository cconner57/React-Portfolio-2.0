interface GlassProps {
	children: React.ReactNode;
	className: string;
}

const Glass = ({ children, className }: GlassProps) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				background: '$glass',
				boxShadow: '$boxShadow',
				borderRadius: '10px',
			}}
			className={className}>
			{children}
		</div>
	);
};

export default Glass;
