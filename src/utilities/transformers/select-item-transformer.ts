import { ISelectItemModel } from '@/src/models/select-item';
import { ILookupModel } from '@/src/models/lookups';

export const toSelectItems = (options: ILookupModel[]): ISelectItemModel[] => {
	let items: ISelectItemModel[] = [];
	options.map((option) => {
		items.push({
			label: option.title,
			value: option.id.toString(),
		});
	});
	return items;
};

export const toLookupsModel = (option: ISelectItemModel): ILookupModel => {
	return { id: Number(option.value), title: option.label };
};
