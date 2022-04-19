interface InfoPillProps {
	children: React.ReactNode;
}

const InfoPill = ({ children }: InfoPillProps) => {
	return <div className="PillList">{children}</div>;
};

export default InfoPill;