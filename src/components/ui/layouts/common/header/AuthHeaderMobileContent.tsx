import Link from 'next/link';
import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { HRef } from '@/src/utilities/href';
import LanguageChanger from '@/src/components/ui/LanguageChanger';
import UserDropdown from '@/src/components/ui/layouts/common/header/dropdowns/UserDropdown';
import HeaderSearch from '@/src/components/ui/layouts/common/header/HeaderSearch';
import { IHeaderModel } from '@/src/models/page';

interface IProps {
	data: IHeaderModel;
}

const HeaderMobileDrawer: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	return (
		<>
			<nav>
				<ul className={'flex flex-col gap-[25px]'}>
					<li>
						<Link href={HRef.home}>{t('home')}</Link>
					</li>
					{/*	<li>
						<Link href={HRef.products}>{t('products')}</Link>
					</li>*/}
					<li>
						<Link href={HRef.chooseAPath}>{data.hiking}</Link>
					</li>
					<li>
						<Link href={HRef.membership}>{data.membership}</Link>
					</li>
					<li>
						<Link href={HRef.tracksDeveloped}>{data.tracks}</Link>
					</li>
					<li>
						<Link href={HRef.callUs}>{data.callUs}</Link>
					</li>
				</ul>
			</nav>
			<div className="flex items-center justify-center gap-[10px]">
				<UserDropdown trigger={['click']} />
				{/*			<Link href={HRef.productsFavorite}>
					<IconWithNumber icon={<Favorite2Icon />} value={3} />
				</Link>{' '}
				<Link href={HRef.productCart}>
					<IconWithNumber icon={<CartIcon />} value={1} />
				</Link>*/}
				<LanguageChanger isButton={false} trigger={['click']} />
			</div>
			<HeaderSearch />
		</>
	);
};

export default HeaderMobileDrawer;
