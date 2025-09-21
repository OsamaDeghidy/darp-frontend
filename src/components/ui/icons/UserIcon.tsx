import { FC, SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {
}

const UserIcon: FC<IProps> = (props) => {
    return (
        <svg
            {...props}
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 6.5C4.33594 6.5 3 5.16406 3 3.5C3 1.85938 4.33594 0.5 6 0.5C7.64062 0.5 9 1.85938 9 3.5C9 5.16406 7.64062 6.5 6 6.5ZM7.17188 7.625C9.42188 7.625 11.25 9.45312 11.25 11.7031C11.25 12.1484 10.875 12.5 10.4297 12.5H1.54688C1.10156 12.5 0.75 12.1484 0.75 11.7031C0.75 9.45312 2.55469 7.625 4.80469 7.625H7.17188Z"
                fill="#F47B3D"
            />
        </svg>
    );
};
export default UserIcon;
