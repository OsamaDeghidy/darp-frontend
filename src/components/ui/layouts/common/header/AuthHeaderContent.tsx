import Link from 'next/link';
import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { HRef } from '@/src/utilities/href';
import LanguageChanger from '@/src/components/ui/LanguageChanger';
import SearchIcon from '@/src/components/ui/icons/SearchIcon';
import { Popover } from 'antd/lib';
import UserDropdown from '@/src/components/ui/layouts/common/header/dropdowns/UserDropdown';
import { useRouter } from 'next/router';
import HeaderSearch from '@/src/components/ui/layouts/common/header/HeaderSearch';
import { IHeaderModel } from '@/src/models/page';

interface IProps {
	data: IHeaderModel;
}

const AuthHeaderContent: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	const router = useRouter();

	return (
		<>
			<div className="lg:flex hidden items-center gap-[30px]">
				<nav>
					<ul className={'flex items-center gap-[25px]'}>
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
							<Link href={HRef.membership}>
								{data.membership}
							</Link>
						</li>
						<li>
							<Link href={HRef.tracksDeveloped}>
								{data.tracks}
							</Link>
						</li>
						<li>
							<Link href={HRef.callUs}>{data.callUs}</Link>
						</li>
					</ul>
				</nav>
				<div className="flex items-center gap-[15px]">
					<Popover content={<HeaderSearch />}>
						<div>
							<SearchIcon className={'cursor-pointer'} />
						</div>
					</Popover>

					<UserDropdown />
					{/*<Link href={HRef.productsFavorite}>
						<IconWithNumber icon={<Favorite2Icon />} value={3} />
					</Link>
					<Link href={HRef.productCart}>
						<IconWithNumber icon={<CartIcon />} value={1} />
					</Link>*/}
					<LanguageChanger isButton={false} />
				</div>
			</div>
		</>
	);
};

export default AuthHeaderContent;
