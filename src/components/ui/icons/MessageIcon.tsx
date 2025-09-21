import { FC, SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {}

const MessageIcon: FC<IProps> = (props) => {
    return (
        <svg
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.40625 0.75H13.5938C14.3555 0.75 15 1.39453 15 2.15625C15 2.625 14.7656 3.03516 14.4141 3.29883L8.05664 8.07422C7.70508 8.33789 7.26562 8.33789 6.91406 8.07422L0.556641 3.29883C0.205078 3.03516 0 2.625 0 2.15625C0 1.39453 0.615234 0.75 1.40625 0.75ZM0 4.03125L6.35742 8.83594C7.03125 9.33398 7.93945 9.33398 8.61328 8.83594L15 4.03125V10.125C15 11.1797 14.1504 12 13.125 12H1.875C0.820312 12 0 11.1797 0 10.125V4.03125Z"
                fill="#004053"
            />
        </svg>
    );
};
export default MessageIcon;
