import React from 'react';

export const NextArrow = (props: any) => {
	const { className, style, onClick } = props;

	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<svg
				width="10"
				height="16"
				viewBox="0 0 10 16"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.65234 0.9375C7.96875 0.585938 8.53125 0.585938 8.84766 0.902344C9.19922 1.21875 9.19922 1.78125 8.88281 2.09766L2.97656 8.28516L8.88281 14.4375C9.19922 14.7539 9.19922 15.3164 8.84766 15.6328C8.53125 15.9492 7.96875 15.9492 7.65234 15.5977L1.18359 8.84766C1.04297 8.67188 0.9375 8.46094 0.9375 8.28516C0.9375 8.07422 1.04297 7.86328 1.18359 7.6875L7.65234 0.9375Z"
					
				/>
			</svg>
		</div>
	);
};

export const PrevArrow = (props: any) => {
	const { className, style, onClick } = props;

	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<svg
				width="10"
				height="16"
				viewBox="0 0 10 16"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.34766 0.9375C2.03125 0.585938 1.46875 0.585938 1.15234 0.902344C0.800781 1.21875 0.800781 1.78125 1.11719 2.09766L7.02344 8.28516L1.11719 14.4375C0.800781 14.7539 0.800781 15.3164 1.15234 15.6328C1.46875 15.9492 2.03125 15.9492 2.34766 15.5977L8.81641 8.84766C8.95703 8.67188 9.0625 8.46094 9.0625 8.28516C9.0625 8.07422 8.95703 7.86328 8.81641 7.6875L2.34766 0.9375Z"
					
				/>
			</svg>
		</div>
	);
};
