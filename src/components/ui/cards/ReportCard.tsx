import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import Image from 'next/image';
import { INextImageType } from '@/src/models/image';
import { getString } from '@/src/utilities/string';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import Link from 'next/link';
import PlaceIcon from '@/src/components/ui/icons/PlaceIcon';
import TimeIcon from '@/src/components/ui/icons/TimeIcon';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';

dayjs.extend(localizedFormat);

dayjs.extend(utc);

export interface IReportCardModel {
	image: INextImageType;
	title: string;
	place?: string;
	date?: Date;
	utc?: boolean;
}

interface IProps extends IReportCardModel {
	className?: string;
	href: string;
}

const ReportCard: FC<IProps> = (props) => {
	const { image, className, date, href, place, title, utc } = props;
	const t = useI18n();
	const [detailsModal, setDetailsModal] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);
	return (
		<div className={getString(className)}>
			<div className={'report-card border rounded-[10px] p-[15px]'}>
				<div
					className={
						'flex items-center justify-center h-[142px] py-[30px] px-[50px] mb-[15px] overflow-hidden relative'
					}
				>
					<Image
						fill
						className={'object-cover'}
						src={image}
						alt={title}
					/>
				</div>
				<h2 className={'f-18-700 c_black mb-[10px]'}>{title}</h2>
				<ul className={'mb-[20px]'}>
					{place && (
						<li>
							<PlaceIcon />
							<span>{place}</span>
						</li>
					)}
					{date && (
						<li>
							<TimeIcon />
							{utc ? (
								<span>{dayjs(date).utc().format('LLL')}</span>
							) : (
								<span>{dayjs(date).format('LLL')}</span>
							)}
						</li>
					)}
				</ul>
				<Link href={href} className={'button button-secondary w-full'} aria-label='more Details'>
					{t('moreDetails')}
				</Link>
			</div>
		</div>
	);
};
export default ReportCard;
