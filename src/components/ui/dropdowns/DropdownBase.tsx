import { FC, ReactNode } from 'react';
import { Dropdown, MenuProps } from 'antd/lib';
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon';

interface IProps {
	title: ReactNode;
	items: MenuProps['items'];
	showArrow?: boolean;
	trigger?: ('contextMenu' | 'click' | 'hover')[];
	className?: string;
	overlayClassName?: string;
}

const DropdownBase: FC<IProps> = (props) => {
	const { title, items, trigger, showArrow = true , className , overlayClassName} = props;
	return (
		<Dropdown
			menu={{ items }}
			overlayClassName={`base-dropdown-overlay ${overlayClassName}`}
			trigger={trigger}
			className={className}
		>
			<div className="flex items-center gap-[10px] cursor-pointer base-dropdown">
				<span className={'f-18-600'}>{title}</span>
				{showArrow && <ArrowIcon className={'fill-c_black'} />}
			</div>
		</Dropdown>
	);
};
export default DropdownBase;
