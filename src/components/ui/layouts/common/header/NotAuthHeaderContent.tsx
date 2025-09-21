import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import LanguageChanger from '@/src/components/ui/LanguageChanger';
import AuthLinksDropdown from '@/src/components/ui/layouts/common/header/dropdowns/AuthLinksDropdown';
import AboutAssociationDropdown from '@/src/components/ui/layouts/common/header/dropdowns/AboutAssociationDropdown';
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

const NotAuthHeaderContent: FC<IProps> = (props) => {
	const { user, data } = props;
	const t = useI18n();

	return (
		<>
			<nav>
				<ul className={'flex items-center gap-[25px]'}>
					<li>
						<AboutAssociationDropdown data={data} />
					</li>
					<li>
						<MembershipDropdown data={data} />
					</li>
					<li>
						<TracksDropdown data={data} />
					</li>
					<li>
						<ElectronicServicesDropdown data={data} />
					</li>
					<li>
						<MediaCenterDropdown data={data} />
					</li>
					<li>
						<CallUsDropdown data={data} />
					</li>
				</ul>
			</nav>
			<div className="flex items-center gap-[10px]">
				{user ? <UserDropdown /> : <AuthLinksDropdown />}
				<LanguageChanger />
			</div>
		</>
	);
};

export default NotAuthHeaderContent;
