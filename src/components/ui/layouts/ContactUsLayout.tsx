import React, { FC, ReactNode } from 'react';
import { ICustomBreadcrumbModel } from '@/src/components/ui/CustomBreadcrumb';
import LayoutSidebar from '@/src/components/ui/layouts/base/LayoutSidebar';
import ContactUsSidebar from '@/src/components/contact-us/ContactUsSidebar';
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

const ContactUsLayout: FC<IProps> = (props) => {
	const { children, name, breadcrumb, title, header } = props;
	return (
		<LayoutSidebar {...props} sidebar={<ContactUsSidebar data={header} />}>
			{children}
		</LayoutSidebar>
	);
};
export default ContactUsLayout;
