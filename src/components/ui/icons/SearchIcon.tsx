import { FC, SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {}

const SearchIcon: FC<IProps> = (props) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clipPath="url(#clip0_1429_11484)">
				<path
					d="M19.8106 18.9119L14.6469 13.8308C15.9991 12.3616 16.83 10.4187 16.83 8.28068C16.8293 3.7071 13.0622 0 8.41484 0C3.76749 0 0.000366211 3.7071 0.000366211 8.28068C0.000366211 12.8543 3.76749 16.5614 8.41484 16.5614C10.4228 16.5614 12.2645 15.8668 13.7111 14.7122L18.8948 19.8134C19.1474 20.0622 19.5574 20.0622 19.81 19.8134C20.0632 19.5646 20.0632 19.1607 19.8106 18.9119ZM8.41484 15.2873C4.48268 15.2873 1.29505 12.1504 1.29505 8.28068C1.29505 4.41101 4.48268 1.27403 8.41484 1.27403C12.347 1.27403 15.5346 4.41101 15.5346 8.28068C15.5346 12.1504 12.347 15.2873 8.41484 15.2873Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1429_11484">
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
export default SearchIcon;
