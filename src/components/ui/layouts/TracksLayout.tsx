import React, { FC, ReactNode } from 'react';
import { ICustomBreadcrumbModel } from '@/src/components/ui/CustomBreadcrumb';
import LayoutSidebar from '@/src/components/ui/layouts/base/LayoutSidebar';
import TracksSidebar from '@/src/components/tracks/TracksSidebar';
import { IFooterModel, IHeaderModel } from '@/src/models/page';

interface IProps {
	name: string;
	breadcrumb: ICustomBreadcrumbModel[];
	children: ReactNode;
	title: string;
	mainImage?: string;
	header: IHeaderModel;
	footer?: IFooterModel;
}

const TracksLayout: FC<IProps> = (props) => {
	const { children, name, breadcrumb, title, header } = props;
	return (
		<LayoutSidebar {...props} sidebar={<TracksSidebar data={header} />}>
			{children}
		</LayoutSidebar>
	);
};
export default TracksLayout;
