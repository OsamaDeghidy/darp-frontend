import { FC, useState } from 'react';
import { getString } from '@/src/utilities/string';
import { ITabsFilterModel } from '@/src/models/tabs-filter';

interface IProps {
	data: ITabsFilterModel[];
	onChange?: (value: any) => void;
	className?: string;
}

const TabsFilter: FC<IProps> = (props) => {
	const { data, onChange, className } = props;
	const [selectValue, setSelectedValue] = useState<any>(data[0].value);
	return (
		<ul className={'tabs-filter ' + getString(className)}>
			{data.map((item, index) => (
				<li
					key={index}
					className={item.value == selectValue ? 'active' : ''}
					onClick={() => {
						setSelectedValue(item.value);
						if (onChange) {
							onChange(item.value);
						}
					}}
				>
					<div className="flex items-center gap-[5px]">
						{item.label}
					</div>
				</li>
			))}
		</ul>
	);
};
export default TabsFilter;
