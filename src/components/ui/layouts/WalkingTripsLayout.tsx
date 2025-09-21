import React, { FC, ReactNode } from 'react';
import { ICustomBreadcrumbModel } from '@/src/components/ui/CustomBreadcrumb';
import LayoutSidebar from '@/src/components/ui/layouts/base/LayoutSidebar';
import WalkingTripsSidebar from '@/src/components/walking-trips/WalkingTripsSidebar';
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

const WalkingTripsLayout: FC<IProps> = (props) => {
	const { children, name, breadcrumb, title, header } = props;
	return (
		<LayoutSidebar
			{...props}
			sidebar={<WalkingTripsSidebar data={header} />}
		>
			{children}
		</LayoutSidebar>
	);
};
export default WalkingTripsLayout;
