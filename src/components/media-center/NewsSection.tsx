import React, { FC, useEffect, useState } from 'react';
import { INewsFilterModel, INewsModel } from '../../models/news';
import { useI18n } from '../../locales';
import NewsCard from '../../components/ui/cards/NewsCard';
import { useGetNewsQuery } from '@/src/store/RTKQuery/news/newsApi';

interface IProps {
	data: INewsModel[];
	title: string;
	className?: string;
	type: 'Main News' | 'News';
}

const NewsSection: FC<IProps> = (props) => {
	const { data, title, className, type } = props;
	const t = useI18n();
	const [componentData, setComponentData] = useState(data);
	const [filter, setFilter] = useState<INewsFilterModel>({
		pageNumber: 1,
		pageSize: 8,
		type: type,
	});
	const { data: serverData } = useGetNewsQuery(filter);
	useEffect(() => {
		if (serverData) {
			setComponentData((prevData) => {
				const newData = serverData.data.items.filter(
					(item) =>
						!prevData.some(
							(existingItem) => existingItem.id === item.id,
						),
				);
				return [...prevData, ...newData];
			});
		}
	}, [serverData]);
	return (
		<section className={className}>
			<div className="container">
				<h1 className={'mb-[30px] f-32-700 c_004053'}>{title}</h1>
				<div className="grid grid-cols-12 gap-[24px]">
					{componentData.map((item, index) => (
						<NewsCard
							className={
								'xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12'
							}
							key={index}
							data={item}
						/>
					))}
				</div>
				{serverData &&
					serverData.data.totalCount > componentData.length && (
						<div className="flex justify-center  mt-[30px]">
							<button
								aria-label="showMore"
								type={'button'}
								className={'button button-secondary'}
								onClick={() => {
									setFilter({
										...filter,
										pageNumber: filter.pageNumber + 1,
									});
								}}
							>
								{t('showMore')}
							</button>
						</div>
					)}
			</div>
		</section>
	);
};
export default NewsSection;
