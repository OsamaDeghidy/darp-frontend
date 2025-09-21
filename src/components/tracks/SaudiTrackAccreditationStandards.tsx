import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { ITrackImportanceModel } from '@/src/models/track';
import Image from 'next/image';

interface IProps {
	data: ITrackImportanceModel;
}

const SaudiTrackAccreditationStandards: FC<IProps> = (props) => {
	const t = useI18n();
	const { data } = props;
	const importanceOfTracks = data.importanceOfTracksSection;
	const criteriaOfChoice = data.criteriaForSelectingTracks;
	return (
		<section>
			<h1 className={'mb-[20px] c_004053 f-32-700'}>
				{importanceOfTracks?.title}
			</h1>
			<div
				className={
					'border rounded-[10px] p-[25px] b-c_F1F2EC mb-[30px] bg-c_white'
				}
			>
				<ul className={'tracks-importance-list'}>
					{importanceOfTracks?.importanceOfTracksSectionList.map(
						(item, i) => (
							<li key={i}>
								<h2 className="category">{item.title}</h2>
								<p className={'content'}>{item.description}</p>
							</li>
						),
					)}
				</ul>
			</div>

			<h2 className={'mb-[20px] c_004053 f-32-700'}>
				{criteriaOfChoice?.title}
			</h2>
			<div className="grid grid-cols-12 gap-[24px] mb-[20px]">
				{criteriaOfChoice?.criteriaForSelectingTracksList.map(
					(item, index) => (
						<article
							key={index}
							className={
								'xl:col-span-4 md:col-span-6 col-span-12 bg-c_white rounded-[10px]'
							}
							style={{ boxShadow: '0px 0px 10px #00000005' }}
						>
							<div
								className={
									'h-full flex items-center justify-center flex-col p-[15px] border b-c_F1F2EC rounded-[10px] gap-[10px]'
								}
							>
								<div className="image relative h-[50px] w-[50px]">
									<Image
										className={'object-fill'}
										alt={item.title}
										fill
										src={item.image.url}
									/>
								</div>
								<h3 className={'f-18-700 c_004053 text-center'}>
									{item.title}
								</h3>
								<p className={'f-16-600 c_black text-center'}>
									{item.description}
								</p>
							</div>
						</article>
					),
				)}
			</div>
		</section>
	);
};
export default SaudiTrackAccreditationStandards;
