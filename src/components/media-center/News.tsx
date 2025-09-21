import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import PageHeroSection from '@/src/components/ui/layouts/common/PageHeroSection';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import { INewsModel, INewsPageModel } from '@/src/models/news';
import NewsSection from '@/src/components/media-center/NewsSection';

interface IProps {
	data: INewsPageModel;
	mainNews: INewsModel[];
	latestNews: INewsModel[];
}

const News: FC<IProps> = (props) => {
	const { data, mainNews, latestNews } = props;
	const t = useI18n();
	return (
		<>
			<PageHeroSection
				pageName={data.mainTitle}
				image={data.mainImage?.url}
			/>
			<div className="container">
				<CustomBreadcrumb
					className={'mt-[20px] mb-[30px]'}
					data={[
						{
							title: (
								<Link href={HRef.home} aria-label="home">
									{t('home')}
								</Link>
							),
						},
						{
							title: t('news'),
						},
					]}
				/>
			</div>
			<NewsSection
				data={mainNews}
				title={t('mainNews')}
				className={'mb-[60px]'}
				type={'Main News'}
			/>
			<NewsSection
				data={latestNews}
				title={t('latestNews')}
				className={'mb-[60px]'}
				type={'News'}
			/>
		</>
	);
};
export default News;
