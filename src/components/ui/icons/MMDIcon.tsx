import { FC, SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {
}

const MMDIcon: FC<IProps> = (props) => {
    return (
        <svg
            {...props}
            id="logoSVG"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="300.001px"
            height="80px"
            viewBox="0 0 300.001 80"
            enableBackground="nnew 0 0 300.001 80"
            xmlSpace="preserve"
            className="drawsvg-initialized "
            {...props}
        >
            <g id="logo_outline" stroke="#FFF" strokeWidth={2} fill="none">
                <path
                    fill="none"
                    d="M266.159,0h-41.158h-2.086h-22.914v36.148L175.003,0l-0.002,0.004L150,0v36.15L125,0h-25v36.147L75,0H50              v36.15L25,0H0v80.1h25V43.951L50,80.1h25V43.953L100,80.1h25V43.951L150,80.1h25.001V43.951l25,36.148h22.914h2.086v-25V25              h37.283c7.021,0,12.717,6.738,12.717,15.051c0,8.311-5.695,15.049-12.717,15.049h-12.283v25h16.158              c18.688,0,33.842-17.932,33.842-40.049S284.847,0,266.159,0z"
                    style={{
                        strokeDasharray: '1317.87, 1317.87',
                        strokeDashoffset: 0,
                    }}
                />
            </g>
            <g
                id="logo_fill"
                style={{
                    opacity: 1,
                }}
            >
                <polygon
                    fill="#FFFFFF"
                    points="120.563,65.879 75,0 50,0 50,36.15 25,0 0,0 0,80.1 25,80.1 25,43.951 50,80.1 75,80.1 75,43.953     100,80.1  "
                />
                <g>
                    <linearGradient
                        id="SVGID_1_"
                        gradientUnits="userSpaceOnUse"
                        x1={-151.665}
                        y1={-305.0977}
                        x2={-195.9322}
                        y2={-370.1964}
                        gradientTransform="matrix(0.8528 -0.2129 -0.2129 0.6922 174.905 252.8124)"
                    >
                        <stop
                            offset={0}
                            style={{
                                stopColor: '#808285',
                            }}
                        />
                        <stop
                            offset={1}
                            style={{
                                stopColor: '#808285',
                                stopOpacity: 0,
                            }}
                        />
                    </linearGradient>
                    <polygon
                        fill="url(#SVGID_1_)"
                        points="75.175,44.203 100.002,80.1 120.563,65.881 95.736,29.98  "
                    />
                </g>
                <polygon
                    fill="#FFFFFF"
                    points="220.562,65.879 175.003,0 175.001,0.004 175.001,0 150,0 150,36.15 125,0 100,0 100,80.1 125,80.1     125,43.951 150,80.1 175.001,80.1 175.001,43.951 200.001,80.1  "
                />
                <g>
                    <linearGradient
                        id="SVGID_2_"
                        gradientUnits="userSpaceOnUse"
                        x1={-24.6533}
                        y1={-266.0322}
                        x2={-68.9216}
                        y2={-331.1326}
                        gradientTransform="matrix(0.8528 -0.2129 -0.2129 0.6922 174.905 252.8124)"
                    >
                        <stop
                            offset={0}
                            style={{
                                stopColor: '#808285',
                            }}
                        />
                        <stop
                            offset={1}
                            style={{
                                stopColor: '#808285',
                                stopOpacity: 0,
                            }}
                        />
                    </linearGradient>
                    <polygon
                        fill="url(#SVGID_2_)"
                        points="175.173,44.203 200.001,80.1 220.562,65.881 195.733,29.98  "
                    />
                </g>
                <path
                    fill="#FFFFFF"
                    d="M266.159,0h-41.158h-2.086h-22.914v80.1h22.914h2.086v-25V25h37.283c7.021,0,12.717,6.738,12.717,15.051     c0,8.311-5.695,15.049-12.717,15.049h-12.283v25h16.158c18.688,0,33.842-17.932,33.842-40.049S284.847,0,266.159,0z"
                    style={{
                        strokeDasharray: '477.07, 477.07',
                        strokeDashoffset: 0,
                    }}
                />
            </g>
        </svg>
    );
};
export default MMDIcon;
