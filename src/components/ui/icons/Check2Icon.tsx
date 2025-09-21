import { FC, SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {}

const Check2Icon: FC<IProps> = (props) => {
	return (
		<svg
			{...props}
			width="10"
			height="8"
			viewBox="0 0 10 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.0625 2.08203C9.375 1.76953 9.375 1.28125 9.0625 0.96875C8.75 0.675781 8.26172 0.675781 7.96875 0.96875L3.51562 5.42188L1.5625 3.46875C1.25 3.17578 0.761719 3.17578 0.46875 3.46875C0.15625 3.78125 0.15625 4.26953 0.46875 4.58203L2.96875 7.08203C3.10547 7.23828 3.32031 7.31641 3.51562 7.31641C3.71094 7.31641 3.90625 7.23828 4.0625 7.08203L9.0625 2.08203Z"
				fill="#F47B3D"
			/>
		</svg>
	);
};
export default Check2Icon;
