import { FC, SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {}

const ArrowRigth: FC<IProps> = (props) => {
	return (
		<svg
			width={7}
			height={12}
			viewBox="0 0 7 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.46875 5.46875C0.177083 5.82292 0.177083 6.17708 0.46875 6.53125L5.46875 11.5312C5.82292 11.8229 6.17708 11.8229 6.53125 11.5312C6.82292 11.1771 6.82292 10.8229 6.53125 10.4688L2.0625 6L6.53125 1.53125C6.82292 1.17708 6.82292 0.822917 6.53125 0.46875C6.17708 0.177083 5.82292 0.177083 5.46875 0.46875L0.46875 5.46875Z"
				fill="#004053"
			/>
		</svg>
	);
};
export default ArrowRigth;
