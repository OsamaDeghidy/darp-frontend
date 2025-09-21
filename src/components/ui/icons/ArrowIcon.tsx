import { FC, SVGProps } from 'react';
import { getString } from '@/src/utilities/string';

interface IProps extends SVGProps<SVGSVGElement> {}

const ArrowIcon: FC<IProps> = (props) => {
	return (
		<svg
			width="17"
			height="9"
			viewBox="0 0 17 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			className={'arrow-icon ' + getString(props.className)}
		>
			<path
				d="M15.6875 1.63281L8.9375 8.10156C8.76172 8.24219 8.55078 8.3125 8.33984 8.3125C8.16406 8.3125 7.95312 8.24219 7.77734 8.10156L1.02734 1.63281C0.675781 1.31641 0.675781 0.753906 0.992188 0.4375C1.30859 0.0859375 1.87109 0.0859375 2.1875 0.402344L8.33984 6.30859L14.5273 0.402344C14.8438 0.0859375 15.4062 0.0859375 15.7227 0.4375C16.0391 0.753906 16.0391 1.31641 15.6875 1.63281Z"
				fill="black"
			/>
		</svg>
	);
};
export default ArrowIcon;
