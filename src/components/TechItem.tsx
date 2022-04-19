import InfoPill from './InfoPill';

interface TechItemProps {
	github: string;
	name: string;
	picture: string;
	site: string;
	tech: string[];
}

const TechItem = ({ picture, name, tech, github, site }: TechItemProps) => {
	return (
		<div className="TechItem">
			<picture>
				<source
					srcSet={
						process.env.PUBLIC_URL + `/images/projects/react/${picture}.webp`
					}
					type="image/webp"
				/>
				<img
					width={192}
					height={106}
					src={process.env.PUBLIC_URL + `/images/projects/react/${picture}.jpg`}
					alt={picture}
				/>
			</picture>
			<h3>{name}</h3>
			<InfoPill>
				{tech.map((name, key) => (
					<div key={key}>
						<h4>{name}</h4>
					</div>
				))}
			</InfoPill>
			<div className="ProjectLink">
				{github && <a href={github}>Github</a>}
				{site && <a href={site}>Live Site</a>}
			</div>
		</div>
	);
};

export default TechItem;
