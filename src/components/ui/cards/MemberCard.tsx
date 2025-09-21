import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import Image from 'next/image';
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon';
import { INextImageType } from '@/src/models/image';
import { getString } from '@/src/utilities/string';
import MemberDetailsModal from '@/src/components/ui/modals/MemberDetailsModal';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import { ILinkModel } from '@/src/models/link';
import Link from 'next/link';

export interface IMemberCardModel {
	image: INextImageType;
	name: string;
	jobTitle: string;
	description?: string;
	email?: string;
	showMore?: boolean;
	link?: ILinkModel;
}

interface IProps extends IMemberCardModel {
	className?: string;
}

const MemberCard: FC<IProps> = (props) => {
	const {
		image,
		className,
		name,
		showMore = true,
		email,
		jobTitle,
		link,
	} = props;
	const t = useI18n();
	const [detailsModal, setDetailsModal] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);
	return (
		<div className={getString(className)}>
			<div className={'member-card relative'}>
				<div className="member-card-image-container relative h-[268px] w-full">
					<Image
						className={'member-card-image'}
						sizes="100vw"
						fill={true}
						src={image}
						alt={name}
					/>
				</div>
				<div className={'member-card-content'}>
					<h2>{name}</h2>
					<p className="member-card-job-title">{jobTitle}</p>
					{email && (
						<p className={'f-16-600 c_737373 mt-[5px]'}>{email}</p>
					)}
					{showMore && !link && (
						<div className="flex mt-[15px]">
							<button
								type='button'
								className={'flex items-center gap-[5px]'}
								onClick={() => {
									setDetailsModal({
										statusChange:
											!detailsModal.statusChange,
										value: true,
									});
								}}
							>
								<span className={'f-16-600 c_F47B3D'}>
									{t('showMore')}
								</span>
								<ArrowIcon
									className={'rotate-90 fill-c_F47B3D'}
								/>
							</button>
						</div>
					)}
					{link && (
						<div className="flex mt-[15px]">
							<Link
								href={link.href}
								className={'flex items-center gap-[5px]'}
								aria-label={link.text}
							>
								
								<span className={'f-16-600 c_F47B3D'}>
									{link.text}
								</span>
								<ArrowIcon
									className={'rotate-90 fill-c_F47B3D'}
								/>
							</Link>
						</div>
					)}
				</div>
			</div>
			{showMore && (
				<MemberDetailsModal
					openModal={detailsModal}
					data={{
						...props,
					}}
				/>
			)}
		</div>
	);
};
export default MemberCard;
