import React, { FC } from 'react';
import NewsCard from '@/src/components/ui/cards/NewsCard';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import { useI18n } from '@/src/locales';
import Time2Icon from '@/src/components/ui/icons/Time2Icon';
import Image from 'next/image';
import Share from '@/src/components/ui/Share';
import { INewsModel } from '@/src/models/news';
import dayjs from 'dayjs';
import { useDirection } from '@/src/hooks/useDirection';

interface IProps {
	data: INewsModel;
	latestNews: INewsModel[];
}

const ArticlePage: FC<IProps> = (props) => {
	const t = useI18n();
	const { data, latestNews } = props;
	const direction = useDirection();
	return (
		<section className={'article-page section-padding '}>
			<div className="container">
				<CustomBreadcrumb
					data={[
						{
							title: <Link href={HRef.home}>{t('home')}</Link>,
						},
						{
							title: <Link href={HRef.news}>{t('news')}</Link>,
						},
						{
							title: t('details'),
						},
					]}
				/>
				<div className={'with-aside-container ' + direction}>
					<article className="article-page__content with-aside__content">
						<h1 className={'f-40-800 c_004053 mb-[20px] mt-[30px]'}>
							{data?.title || ''}
						</h1>
						<p className={'flex items-center gap-[10px] mb-[20px]'}>
							<Time2Icon className={'fill-c_898989'} />
							<span className={'f-14-600 c_898989'}>
								{dayjs(data?.createdAt).fromNow()}
							</span>
						</p>
						<figure className="image-container relative w-full h-[510px] rounded-[10px] mb-[15px]">
							<Image
								className={
									'object-cover w-full rounded-[10px] h-full'
								}
								fill={true}
								src={data?.image?.url || ''}
								alt={data?.title || ''}
							/>
							<figcaption className="sr-only">
								{data?.imageDescription || ''}
							</figcaption>
						</figure>
						<div className="article-content pb-[20px] mb-[20px] border-b-[1px]  b-c_F1F2EC">
							<span
								className={
									'f-18-500 c_004053 text-center block mb-[20px]'
								}
							>
								{data?.imageDescription || ''}
							</span>
							<div
								dangerouslySetInnerHTML={{
									__html: data?.content || '',
								}}
							></div>
						</div>
						<Share shareTitle={data?.title || ''} shareUrl={''} />
					</article>

					<aside>
						<h2
							className={
								'f-24-700 c_004053 mb-[15px] pb-[15px] border-b-[1px] b-c_F1F2EC'
							}
						>
							{t('relatedNews')}
						</h2>
						<div className="widgets gap-[24px] flex flex-col">
							{latestNews.slice(0, 4).map((item, index) => (
								<NewsCard key={index} data={item} />
							))}
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
};
export default ArticlePage;
