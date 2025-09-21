import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import Image from 'next/image';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import { ITrackImportanceModel } from '@/src/models/track';

interface IProps {
	data: ITrackImportanceModel;
}

const TechnicalSpecificationsForDirectionalSigns: FC<IProps> = (props) => {
	const t = useI18n();
	const { data } = props;
	return (
		<section>
			<h2 className={'mb-[20px] c_004053 f-32-700 mt-[30px]'}>
				{data.technicalSpecificationsForDirectionalSigns?.title}
			</h2>
			<div
				className={
					'border rounded-[10px] p-[25px] b-c_F1F2EC bg-c_white'
				}
			>
				<span
					className="mb-[40px] block f-18-700 c_2D2D2D"
					dangerouslySetInnerHTML={{
						__html: data.technicalSpecificationsForDirectionalSigns
							?.content,
					}}
				></span>

				<div className="image relative w-[70%] h-[215px] mx-auto">
					<Image
						fill
						src={
							data.technicalSpecificationsForDirectionalSigns
								?.image.url
						}
						alt={
							data.technicalSpecificationsForDirectionalSigns
								?.title
						}
						className={'object-fill'}
					/>
				</div>
			</div>
			<h2 className={'mb-[20px] c_004053 f-32-700 mt-[30px]'}>
				{data.commentsAndSuggestions?.title}
			</h2>
			<div
				className={
					'border rounded-[10px] p-[25px] b-c_F1F2EC bg-c_white'
				}
			>
				<span className="mb-[40px] block f-18-700 c_2D2D2D">
					{data.commentsAndSuggestions?.description}
					<Link href={HRef.callUs} aria-label="التواصل معنا">
						<span className={'f-18-700 c_F47B3D underline'}>
							{t("contactUs")}
						</span>
					</Link>
				</span>
			</div>
		</section>
	);
};
export default TechnicalSpecificationsForDirectionalSigns;
