import { FC, SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {}

const RemoveIcon: FC<IProps> = (props) => {
	return (
		<svg
			width="10"
			height="2"
			viewBox="0 0 10 2"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 0.625C0 0.279825 0.279825 0 0.625 0H9.375C9.72019 0 10 0.279825 10 0.625C10 0.970187 9.72019 1.25 9.375 1.25H0.625C0.279825 1.25 0 0.970187 0 0.625Z"
				fill="white"
			/>
		</svg>
	);
};
export default RemoveIcon;
