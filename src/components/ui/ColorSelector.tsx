import { FC, useState } from 'react';
import { IColorSelectorModel } from '@/src/models/color-selector';
import { getString } from '@/src/utilities/string';

interface IProps {
	data: IColorSelectorModel[];
	onChange?: (value: any) => void;
	className?: string;
}

const ColorSelector: FC<IProps> = (props) => {
	const { data, onChange, className } = props;
	const [selectValue, setSelectedValue] = useState<any>(data[0].value);
	return (
		<ul
			className={
				'color-selector flex items-center gap-[10px] ' +
				getString(className)
			}
		>
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
					<div
						className="w-[15px] h-[15px] rounded-full shrink-0"
						style={{
							backgroundColor: item.color,
						}}
					></div>
				</li>
			))}
		</ul>
	);
};
export default ColorSelector;
