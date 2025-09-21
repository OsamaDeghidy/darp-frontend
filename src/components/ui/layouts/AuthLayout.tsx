import { FC, ReactNode } from 'react';
import Image from 'next/image';
import authLayoutImage from '@/public/images/auth-layout.jpeg';
import { getString } from '@/src/utilities/string';
import Header from '@/src/components/ui/layouts/common/header/Header';
import Footer from '@/src/components/ui/layouts/common/Footer';
import { IPageModel } from '@/src/models/page';

interface IProps {
	children: ReactNode;
	width?: string;
	data: IPageModel;
}

const AuthLayout: FC<IProps> = (props) => {
	const { children, width, data } = props;
	return (
		<>
			{data?.header && <Header data={data.header} />}
			<main>
				<div className={'auth-layout min-h-[100vh]'}>
					<Image
						src={authLayoutImage}
						alt={''}
						className={'auth-layout-image'}
					/>
					<div className="container h-full">
						<div className="flex items-center justify-center min-h-full p-[30px]">
							<div
								className={
									'auth-layout-content w-full' +
									getString(width)
								}
							>
								{children}
							</div>
						</div>
					</div>
				</div>
			</main>
			{data?.footer && <Footer data={data.footer} />}
		</>
	);
};
export default AuthLayout;
