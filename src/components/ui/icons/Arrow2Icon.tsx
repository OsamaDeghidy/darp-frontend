import { FC, SVGProps } from 'react';
import { getString } from '@/src/utilities/string';

interface IProps extends SVGProps<SVGSVGElement> {}

const Arrow2Icon: FC<IProps> = (props) => {
	return (
		<svg
			width="14"
			height="13"
			viewBox="0 0 14 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			className={'arrow2-icon ' + getString(props.className)}
		>
			<path
				d="M13.5332 6.42847C13.5332 6.01831 13.2402 5.72534 12.8301 5.72534H2.86914L6.76562 2.00464C7.05859 1.74097 7.05859 1.27222 6.79492 1.00854C6.53125 0.715576 6.0918 0.715576 5.79883 0.979248L0.642578 5.90112C0.496094 6.04761 0.4375 6.22339 0.4375 6.42847C0.4375 6.60425 0.496094 6.78003 0.642578 6.92651L5.79883 11.8484C6.0918 12.1121 6.53125 12.1121 6.79492 11.8191C7.05859 11.5554 7.05859 11.0867 6.76562 10.823L2.86914 7.13159H12.8301C13.2402 7.13159 13.5332 6.80933 13.5332 6.42847Z"
				fill="white"
			/>
		</svg>
	);
};
export default Arrow2Icon;
