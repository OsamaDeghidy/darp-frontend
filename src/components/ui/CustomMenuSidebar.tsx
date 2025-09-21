import React, { FC } from 'react';
import { Menu } from 'antd/lib';
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon';
import { MenuProps } from 'antd';
import { usePathname } from 'next/navigation';

const getOpenMenuItem = (data: MenuProps['items'], key: string): string => {
    let value = '';

    const findKeyInItem = (item: any): boolean => {
        if (item.key === key) {
            value = item.key;
            return true;
        }

        if (item.children) {
            const child = item.children.find(
                (childItem: { key: string }) => childItem.key === key,
            );
            if (child) {
                value = item.key;
                return true;
            }
        }

        return false;
    };

    data?.find((item) => findKeyInItem(item));

    return value;
};

interface IProps {
    className?: string;
    items: MenuProps['items'];
}

const CustomMenuSidebar: FC<IProps> = (props) => {
    const {items, className} = props;
    const pathName = usePathname();
    return (
        <Menu
            expandIcon={<ArrowIcon/>}
            className={'custom-menu-aside'}
            defaultSelectedKeys={[pathName]}
            defaultOpenKeys={[getOpenMenuItem(items, pathName)]}
            mode="inline"
            items={items}
        />
    );
};
export default CustomMenuSidebar;
