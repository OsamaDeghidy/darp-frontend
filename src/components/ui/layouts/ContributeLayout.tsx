import React, { FC, ReactNode } from 'react';
import { ICustomBreadcrumbModel } from '@/src/components/ui/CustomBreadcrumb';
import ContributeSidebar from '@/src/components/contribute/ContributeSidebar';
import LayoutSidebar from '@/src/components/ui/layouts/base/LayoutSidebar';
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

const ContributeLayout: FC<IProps> = (props) => {
	const { children, name, breadcrumb, title, header } = props;
	return (
		<LayoutSidebar {...props} sidebar={<ContributeSidebar data={header} />}>
			{children}
		</LayoutSidebar>
	);
};
export default ContributeLayout;
