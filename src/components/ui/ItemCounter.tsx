import React, { FC, useState } from 'react';
import AddIcon from '@/src/components/ui/icons/AddIcon';
import RemoveIcon from '@/src/components/ui/icons/RemoveIcon';
import { getString } from '@/src/utilities/string';

interface IProps {
	className?: string;
}

const ItemCounter: FC<IProps> = (props) => {
	const { className } = props;
	const [value, setValue] = useState<number>(1);
	return (
		<div
			className={
				'flex items-center gap-[5px] item-counter ' +
				getString(className)
			}
		>
			<button
				className={'button add-button'}
				onClick={() => {
					setValue(value + 1);
				}}
			>
				<AddIcon />
			</button>
			<div className={'value'}>{value}</div>
			<button
				className={'button add-button'}
				onClick={() => {
					if (value > 1) {
						setValue(value - 1);
					}
				}}
			>
				<RemoveIcon />
			</button>
		</div>
	);
};
export default ItemCounter;
