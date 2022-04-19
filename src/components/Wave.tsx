interface WaveProps {
	isClicked: boolean;
	flipped?: boolean;
}

const Wave = ({ isClicked, flipped }: WaveProps) => {
	return (
		<>
			{!flipped ? (
				<svg width="100%" height="300" className="Wave">
					<path
						fill="#0099ff"
						d="M0 67 C 273,183 822,-40 1920.00,106 V 359 H 0 V 67 Z">
						{isClicked && (
							<animate
								repeatCount="indefinite"
								attributeName="d"
								dur="15s"
								values="
						M0 67 C 473,283 822,-40  1920,116 V 359 H 0 V 67 Z; 
						M0 67 C 473,-40 1222,283 1920,136 V 359 H 0 V 67 Z;
						M0 67 C 973,260 1722,-53 1920,120 V 359 H 0 V 67 Z; 
						M0 67 C 473,283 822,-40  1920,116 V 359 H 0 V 67 Z"
							/>
						)}
					</path>
				</svg>
			) : (
				<div className="IntervertedWave">
					<div></div>
				</div>
			)}
		</>
	);
};

export default Wave;
