import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import Image from 'next/image';
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon';
import { getString } from '@/src/utilities/string';
import Link from 'next/link';
import Time2Icon from '@/src/components/ui/icons/Time2Icon';
import { INewsModel } from '@/src/models/news';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { HRef } from '@/src/utilities/href';

dayjs.extend(relativeTime);

interface IProps {
	className?: string;
	data: INewsModel;
}

const NewsCard: FC<IProps> = (props) => {
	const { data, className } = props;
	const t = useI18n();
	return (
		<div className={getString(className)}>
			<article className={'news-card'}>
				<div
					className={
						'relative overflow-hidden h-[180px] mb-[15px] rounded-[15px]'
					}
				>
					<Image
						className={'h-full w-full object-cover'}
						fill
						src={data.image.url}
						alt={data.title}
					/>
				</div>
				<div className={''}>
					<p className={'flex items-center gap-[10px] mb-[10px]'}>
						<Time2Icon className={'fill-c_898989'} />
						<span className={'f-14-600 c_898989'}>
							{dayjs(data.createdAt).fromNow()}
						</span>
					</p>
					<h2 className={'f-18-700 c_black mb-[10px]  min-h-[48px]'}>
						{data.title}
					</h2>
					<p
						className="f-14-400 c_2D2D2D mb-[15px] line-clamp-2 min-h-[36px]"
						dangerouslySetInnerHTML={{ __html: data.content }}
					></p>
					<div className="flex mt-[15px]">
						<Link
							href={HRef.news + '/' + data.id}
							className={'flex items-center gap-[5px]'}
							aria-label={t('moreDetails')}
						>
							<span className={'f-16-600 c_004053'}>
								{t('moreDetails')}
							</span>
							<ArrowIcon className={'rotate-90 fill-c_004053'} />
						</Link>
					</div>
				</div>
			</article>
		</div>
	);
};
export default NewsCard;
