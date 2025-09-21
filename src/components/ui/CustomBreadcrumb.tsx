import React, { FC, ReactNode } from 'react';
import { Breadcrumb } from 'antd/lib';
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon';
import { getString } from '@/src/utilities/string';

export interface ICustomBreadcrumbModel {
    title: ReactNode;
}

interface IProps {
    className?: string;
    data: ICustomBreadcrumbModel[];
}

const CustomBreadcrumb: FC<IProps> = (props) => {
    const {data, className} = props;
    return (
        <Breadcrumb
            className={'custom-breadcrumb' + getString(className)}
            separator={<ArrowIcon className={'rotate-90'}/>}
            items={data}
        />
    );
};
export default CustomBreadcrumb;
