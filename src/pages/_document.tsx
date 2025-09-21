import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				{/* FavIcon */}
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/images/favicon/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/images/favicon/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#004053" />
				<meta name="theme-color" content="#004053" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
