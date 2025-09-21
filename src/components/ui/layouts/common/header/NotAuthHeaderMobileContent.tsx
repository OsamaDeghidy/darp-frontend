import Link from 'next/link';
import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { HRef } from '@/src/utilities/href';
import LanguageChanger from '@/src/components/ui/LanguageChanger';
import AboutAssociationDropdown from '@/src/components/ui/layouts/common/header/dropdowns/AboutAssociationDropdown';
import AuthLinksDropdown from '@/src/components/ui/layouts/common/header/dropdowns/AuthLinksDropdown';
import MembershipDropdown from '@/src/components/ui/layouts/common/header/dropdowns/MembershipDropdown';
import TracksDropdown from '@/src/components/ui/layouts/common/header/dropdowns/TracksDropdown';
import ElectronicServicesDropdown from '@/src/components/ui/layouts/common/header/dropdowns/ElectronicServicesDropdown';
import MediaCenterDropdown from '@/src/components/ui/layouts/common/header/dropdowns/MediaCenterDropdown';
import CallUsDropdown from '@/src/components/ui/layouts/common/header/dropdowns/CallUsDropdown';
import UserDropdown from '@/src/components/ui/layouts/common/header/dropdowns/UserDropdown';
import { IHeaderModel } from '@/src/models/page';

interface IProps {
	user: boolean;
	data: IHeaderModel;
}

const NotAuthHeaderMobileContent: FC<IProps> = (props) => {
	const { user, data } = props;
	const t = useI18n();
	return (
		<>
			<nav>
				<ul className={'flex flex-col gap-[25px]'}>
					<li>
						<AboutAssociationDropdown
							trigger={['click']}
							childrenType={'group'}
							data={data}
						/>
					</li>
					<li>
						<MembershipDropdown
							trigger={['click']}
							childrenType={'group'}
							data={data}
						/>
					</li>
					<li>
						<TracksDropdown trigger={['click']} data={data} />
					</li>
					<li>
						<ElectronicServicesDropdown
							trigger={['click']}
							data={data}
						/>
					</li>
					<li>
						<MediaCenterDropdown trigger={['click']} data={data} />
					</li>
					<li>
						<CallUsDropdown trigger={['click']} data={data} />
					</li>
				</ul>
			</nav>
			<div className="flex items-center gap-[10px]">
				<Link
					href={HRef.membership}
					className={'button button-orange !rounded-[30px]'}
				>
					{t('membership')}
				</Link>

				{user ? (
					<UserDropdown trigger={['click']} />
				) : (
					<AuthLinksDropdown trigger={['click']} />
				)}
				<LanguageChanger trigger={['click']} />
			</div>
		</>
	);
};

export default NotAuthHeaderMobileContent;
