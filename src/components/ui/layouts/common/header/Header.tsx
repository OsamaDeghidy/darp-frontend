import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import HeaderTopPart from '@/src/components/ui/layouts/common/header/HeaderTopPart';
import { HRef } from '@/src/utilities/href';
import logoImage from '@/public/logo.png';
import HeaderMobileDrawer from '@/src/components/ui/layouts/common/header/HeaderMobileDrawer';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import MenuIcon from '@/src/components/ui/icons/MenuIcon';
import { useSelector } from 'react-redux';
import { selectAuthUserSlice } from '@/src/store/reducers/authUserSlice';
import NotAuthHeaderContent from '@/src/components/ui/layouts/common/header/NotAuthHeaderContent';
import { IHeaderModel } from '@/src/models/page';

interface IProps {
	data: IHeaderModel;
}

const Header: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	const [openDrawer, setOpenDrawer] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);
	const { user } = useSelector(selectAuthUserSlice);

	return (
		<>
			<HeaderTopPart data={data} />
			<header className={'bg-c_white py-[15px]'}>
				<div className="container">
					<div className="flex items-center justify-between gap-[20px]">
						<Link href={HRef.home}>
							<Image
								src={logoImage}
								width={95}
								height={50}
								alt="Darb Logo"
							/>
						</Link>
						<div className="lg:flex hidden items-center gap-[30px]">
							{/*{user ? (*/}
							{/*<AuthHeaderContent />*/}
							{/*) : (*/}
							<NotAuthHeaderContent user={!!user} data={data} />
							{/*)}*/}
						</div>
						<button
							aria-label="Open menu"
							type='button'
							className={'lg:hidden'}
							onClick={() => {
								setOpenDrawer({
									statusChange: !openDrawer.statusChange,
									value: true,
								});
							}}
						>
							<MenuIcon className={'stroke-c_F47B3D'} />
						</button>
					</div>
				</div>
			</header>
			<HeaderMobileDrawer statusChange={openDrawer} data={data} />
		</>
	);
};

export default Header;
