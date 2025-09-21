import React, { FC, ReactNode } from 'react';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import CustomBreadcrumb, { ICustomBreadcrumbModel } from '@/src/components/ui/CustomBreadcrumb';
import { INextImageType } from '@/src/models/image';
import { IFooterModel, IHeaderModel } from '@/src/models/page';

interface IProps {
	name?: string;
	mainImage?: INextImageType;
	breadcrumb: ICustomBreadcrumbModel[];
	children: ReactNode;
	title?: string;
	sidebar: ReactNode;
	header?: IHeaderModel;
	footer?: IFooterModel;
}

const LayoutSidebar: FC<IProps> = (props) => {
	const {
		children,
		name,
		mainImage,
		breadcrumb,
		header,
		footer,
		sidebar,
		title,
	} = props;

	return (
		<MainLayout
			header={header}
			footer={footer}
			title={title}
			mainImage={mainImage}
			name={name}
		>
			<div className="container">
				<CustomBreadcrumb className={'mt-[20px]'} data={breadcrumb} />
				<div className="grid grid-cols-12 gap-[24px] mt-[30px] mb-[60px] ">
					<div className={'xl:col-span-3 lg:col-span-4 col-span-12'}>
						{sidebar}
					</div>
					<div className={'xl:col-span-9 lg:col-span-8 col-span-12'}>
						{children}
					</div>
				</div>
			</div>
		</MainLayout>
	);
};
export default LayoutSidebar;
