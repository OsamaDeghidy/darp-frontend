import React, { FC, ReactNode } from 'react';
import AboutUsSidebar from '@/src/components/about-us/AboutUsSidebar';
import { ICustomBreadcrumbModel } from '@/src/components/ui/CustomBreadcrumb';
import LayoutSidebar from '@/src/components/ui/layouts/base/LayoutSidebar';
import { IFooterModel, IHeaderModel } from '@/src/models/page';

interface IProps {
	name?: string;
	breadcrumb: ICustomBreadcrumbModel[];
	children: ReactNode;
	title: string;
	mainImage?: string;
	header: IHeaderModel;
	footer?: IFooterModel;
}

const AboutUsLayout: FC<IProps> = (props) => {
	const { children, mainImage, header } = props;

	return (
		<LayoutSidebar {...props} sidebar={<AboutUsSidebar data={header} />}>
			{children}
		</LayoutSidebar>
	);
};
export default AboutUsLayout;
