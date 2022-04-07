interface ButtonProps {
	url: string;
	name: string;
	children: React.ReactNode;
}

const Button = ({ url, name, children }: ButtonProps) => {
	return (
		<a className="SocialButton" href={url} target="_blank" rel="noreferrer">
			<div className="socialLink">
				{children}
				<p>{name}</p>
			</div>
		</a>
	);
};

export default Button;
