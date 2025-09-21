import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/src/locales';
import { getString } from '@/src/utilities/string';
import { HRef } from '@/src/utilities/href';
import CustomImage from '@/src/components/ui/CustomImage';
import { IMembershipModel } from '@/src/models/membership';
import { useSelector } from 'react-redux';
import { selectAuthUserSlice } from '@/src/store/reducers/authUserSlice';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import NotAuthModal from '../modals/NotAuthModal';

interface IProps {
	data: IMembershipModel;
	className?: string;
}

const MembershipCard: FC<IProps> = (props) => {
	const { className, data } = props;
	const [isModalOpen, setIsModalOpen] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);
	const t = useI18n();
	const { user } = useSelector(selectAuthUserSlice);
	return (
		<>
			<div className={getString(className)}>
				<div
					className={
						'membership-card border rounded-[10px] p-[30px] bg-c_white h-full'
					}
				>
					<CustomImage
						src={data.image.url}
						imageClassName={'object-contain'}
						className={
							'flex items-center justify-center h-[80px] mx-auto mb-[15px] w-[80px]'
						}
					/>
					<h2 className={'f-18-700 c_004053 text-center mb-[10px]'}>
						{data.title}
					</h2>
					<p
						className={
							'f-14-500 c_black text-center mb-[15px] min-h-[54px]'
						}
					>
						{data.description}
					</p>
					<p className={'f-16-700 c_black text-center mb-[25px]'}>
						{data.price != '0' ? data.price + ' ' + t('SAR') : ''}
					</p>
					<div className="flex items-center gap-[15px]">
						<Link
							href={
								user
									? HRef.membership + '/' + data.id + '/cart'
									: '#'
							}
							className={'button button-secondary w-full'}
							aria-label={t('subscribe')}
							onClick={(e) => {
								if (!user?.id) {
									e.preventDefault(); 
									setIsModalOpen({
										statusChange: !isModalOpen.statusChange,
										value: true,
									}); 
								}
							}}
						>
							{t('subscribe')}
						</Link>
						<Link
							href={HRef.membership + '/' + data.id}
							className={'button button-outline w-full'}
							style={{ padding: '12px' }}
							aria-label={t('moreDetails')}
						>
							{t('moreDetails')}
						</Link>
					</div>
				</div>
			</div>
			<NotAuthModal openModal={isModalOpen} />
		</>
	);
};
export default MembershipCard;
