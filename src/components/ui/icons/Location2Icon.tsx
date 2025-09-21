import { FC, SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {}

const Location2Icon: FC<IProps> = (props) => {
    return (
        <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6 0.875C2.86523 0.875 0.375 3.39453 0.375 6.5293C0.375 8.78516 1.13672 9.42969 5.41406 15.582C5.67773 15.9922 6.29297 15.9922 6.55664 15.582C10.834 9.42969 11.625 8.78516 11.625 6.5293C11.625 3.39453 9.10547 0.875 6 0.875ZM6 8.84375C4.68164 8.84375 3.65625 7.81836 3.65625 6.5C3.65625 5.21094 4.68164 4.15625 6 4.15625C7.28906 4.15625 8.34375 5.21094 8.34375 6.5C8.34375 7.81836 7.28906 8.84375 6 8.84375Z"
                fill="#004053"
            />
        </svg>
    );
};
export default Location2Icon;
