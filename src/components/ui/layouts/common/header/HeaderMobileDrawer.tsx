import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { useI18n } from '@/src/locales';
import { HRef } from '@/src/utilities/href';
import logoImage from '@/public/logo.png';
import { Drawer } from 'antd/lib';
import { IStatusChangeModel } from '@/src/models/status-change';
import { useSelector } from 'react-redux';
import { selectAuthUserSlice } from '@/src/store/reducers/authUserSlice';
import NotAuthHeaderMobileContent from '@/src/components/ui/layouts/common/header/NotAuthHeaderMobileContent';
import { IHeaderModel } from '@/src/models/page';

interface IProps {
	statusChange: IStatusChangeModel;
	data: IHeaderModel;
}

const HeaderMobileDrawer: FC<IProps> = (props) => {
	const { statusChange, data } = props;
	const t = useI18n();
	const { user } = useSelector(selectAuthUserSlice);

	const [open, setOpen] = useState<boolean>(false);
	useEffect(() => {
		setOpen(statusChange.value);
	}, [statusChange.statusChange, statusChange.value]);
	return (
		<Drawer
			width={300}
			className={'header-mobile-drawer'}
			title={
				<div className="logo flex">
					<Link href={HRef.home}>
						<Image
							src={logoImage}
							width={95}
							height={50}
							alt="Darb Logo"
						/>
					</Link>
				</div>
			}
			placement={'left'}
			open={open}
			onClose={() => {
				setOpen(false);
			}}
		>
			<div className="flex flex-col gap-[30px]">
				{/*{user ? (*/}
				{/*<AuthHeaderMobileContent />*/}
				{/*) : (*/}
				<NotAuthHeaderMobileContent user={!!user} data={data} />
				{/*)}*/}
			</div>
		</Drawer>
	);
};

export default HeaderMobileDrawer;
