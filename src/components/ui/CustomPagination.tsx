import React, { FC, ReactNode } from 'react';
import { Pagination, PaginationProps } from 'antd/lib';
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon';
import { getString } from '@/src/utilities/string';

export interface ICustomBreadcrumbModel {
    title: ReactNode;
}

interface IProps {
    className?: string;
    pagination?: PaginationProps;
}

const CustomPagination: FC<IProps> = (props) => {
    const {className, pagination} = props;
    return (
        <div
            className={
                'custom-pagination flex justify-center' + getString(className)
            }
        >
            <Pagination
                {...pagination}
                nextIcon={<ArrowIcon className={'rotate-90'}/>}
                prevIcon={<ArrowIcon className={'-rotate-90'}/>}
            />
        </div>
    );
};
export default CustomPagination;
