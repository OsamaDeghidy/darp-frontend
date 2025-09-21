import React from 'react';

export const NextArrow = (props: any) => {
	const { className, style, onClick } = props;

	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="15" cy="15" r="14" transform="matrix(-1 0 0 1 30 0)" stroke="white" strokeWidth="2" />
				<path
					d="M10.752 14.877C10.4785 15.209 10.4785 15.541 10.752 15.873L16.377 21.498C16.709 21.7715 17.041 21.7715 17.373 21.498C17.6465 21.166 17.6465 20.834 17.373 20.502L12.2461 15.375L17.373 10.248C17.6465 9.91602 17.6465 9.58398 17.373 9.25195C17.041 8.97852 16.709 8.97852 16.377 9.25195L10.752 14.877Z"
					fill="white" />
			</svg>

		</div>
	);
};

export const PrevArrow = (props: any) => {
	const { className, style, onClick } = props;

	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="15" cy="15" r="14" stroke="white" strokeWidth="2" />
				<path
					d="M19.248 14.877C19.5215 15.209 19.5215 15.541 19.248 15.873L13.623 21.498C13.291 21.7715 12.959 21.7715 12.627 21.498C12.3535 21.166 12.3535 20.834 12.627 20.502L17.7539 15.375L12.627 10.248C12.3535 9.91602 12.3535 9.58398 12.627 9.25195C12.959 8.97852 13.291 8.97852 13.623 9.25195L19.248 14.877Z"
					fill="white" />
			</svg>


		</div>
	);
};
