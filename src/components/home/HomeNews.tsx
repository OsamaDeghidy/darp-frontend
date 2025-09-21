import React, { FC } from 'react';
import { SectionTitle } from '@/src/components/ui/typography/typography';
import { useI18n } from '@/src/locales';
import SurveyCard from '@/src/components/ui/cards/SurveyCard';
import { getString } from '@/src/utilities/string';
import { INewsModel } from '@/src/models/news';
import { HRef } from '@/src/utilities/href';
import Link from 'next/link';

interface IProps {
	data: INewsModel[];
	className?: string;
}

const HomeNews: FC<IProps> = (props) => {
	const { data, className } = props;
	const t = useI18n();
	return (
		<section className={'home-news section ' + getString(className)}>
			<div className="container">
				<SectionTitle
					text={t('latestNews')}
					className="text-right text-white"
				/>
				<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
					{data?.slice(0, 3)?.map((item, index) => (
						<SurveyCard
							key={index}
							link={HRef.news + '/' + item?.id}
							className={
								'lg:col-span-4 md:col-span-6 col-span-12 min-h-[300px] h-full'
							}
							image={item?.image?.url || ''}
							title={item?.title || ''}
							linkName={t('readMore')}
							date={item?.createdAt}
							article={false}
						/>
					))}
				</div>
				<div className="flex justify-center">
					<Link
						href={HRef.news}
						className="btn btn-secondary"
						aria-label={t('viewAll')}
					>
						{t('viewAll')}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeNews;
