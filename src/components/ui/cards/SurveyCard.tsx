import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon';
import { INextImageType } from '@/src/models/image';
import { getString } from '@/src/utilities/string';

import Time2Icon from '../icons/Time2Icon';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

export interface ISurveyCardModel {
	image?: INextImageType;
	title: string;
	linkName: string;
	link: string;
	date?: Date;
	article?: boolean;
}

interface IProps extends ISurveyCardModel {
	className?: string;
}

const SurveyCard: FC<IProps> = (props) => {
	const { image, linkName, title, className, link, date, article } = props;
	const t = useI18n();

	// Handle empty or invalid image URLs
	const hasValidImage = image && typeof image === 'string' && image.trim() !== '' && image !== 'undefined';

	return (
		<article
			className={
				article === true
					? 'survey-card article-card' + getString(className)
					: 'survey-card' + getString(className)
			}
			role="article"
		>
			<figure className="relative w-full h-full">
				{hasValidImage ? (
					<Image
						fill
						className={'survey-card-image'}
						src={image}
						alt={title}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				) : (
					<div className="survey-card-image bg-gray-200 flex items-center justify-center">
						<span className="text-gray-500 text-sm">No Image</span>
					</div>
				)}
				<figcaption className="sr-only">{title}</figcaption>
			</figure>
			<div className={'survey-card-content'}>
				{date && (
					<div
						className={
							'date flex justify-start items-center mb-[15px] gap-[5px]'
						}
					>
						<Time2Icon />
						<time
							dateTime={dayjs(date).format('YYYY-MM-DD')}
							className="text-white text-[14px] font-semibold leading-[18px]"
						>
							{dayjs(date).format('LLL')}
						</time>
					</div>
				)}
				<h3>{title}</h3>
				<div className="flex">
					<Link
						aria-label={`Read more about ${title}`}
						href={link}
						className={
							'flex items-center gap-[5px] survey-card-link'
						}
					>
						<span className={'f-16-600 c_white'}>{linkName}</span>
						<ArrowIcon className={'rotate-90 fill-c_white'} />
					</Link>
				</div>
			</div>
		</article>
	);
};
export default SurveyCard;
