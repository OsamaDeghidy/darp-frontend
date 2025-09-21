import { CSSProperties, FC } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

const override: CSSProperties = {
	display: 'block',
	margin: '0 auto',
	borderColor: 'red',
};

const Spinner: FC = () => {
	return (
		<div className="sweet-loading">
			<BeatLoader
				color={'#004053'}
				loading={true}
				cssOverride={override}
				size={30}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};
export default Spinner;
