import { FC, SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {}

const Star3Icon: FC<IProps> = (props) => {
	return (
		<svg
			width="17"
			height="17"
			viewBox="0 0 17 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M9.25781 1.40234C8.93555 0.728516 7.93945 0.699219 7.58789 1.40234L5.6543 5.29883L1.37695 5.91406C0.615234 6.03125 0.292969 6.96875 0.849609 7.52539L3.95508 10.543L3.22266 14.791C3.10547 15.5527 3.89648 16.1387 4.59961 15.7871L8.4375 13.7656L12.2461 15.7871C12.9492 16.1387 13.7402 15.5527 13.623 14.791L12.8906 10.543L15.9961 7.52539C16.5527 6.96875 16.2305 6.03125 15.4688 5.91406L11.1914 5.29883L9.25781 1.40234Z"
				fill="#004053"
			/>
		</svg>
	);
};
export default Star3Icon;
