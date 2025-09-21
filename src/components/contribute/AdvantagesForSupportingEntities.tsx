import { FC } from 'react';
import { useI18n } from '@/src/locales';
import advantagesForSupportingEntitiesImage from '@/public/images/advantages-for-supporting-entities.jpeg';
import Image from 'next/image';

interface IProps {}

const AdvantagesForSupportingEntities: FC<IProps> = (props) => {
	const t = useI18n();
	return (
		<section>
			<h2 className={'mb-[20px] c_004053 f-32-700'}>
				{t('whatWeOfferToCompaniesAndEntitiesSupportingTheAssociation')}
			</h2>
			<div
				className={
					'border rounded-[10px] p-[25px] b-c_F1F2EC mb-[20px]'
				}
			>
				<p className={'f-16-700 c_2D2D2D mb-[20px]'}>
					{t('advantagesForSupportingEntitiesDescription')}
				</p>
				<ul className={'info-list'}>
					<li>
						{t('advantagesForSupportingEntitiesDescriptionList1')}
					</li>
					<li>
						{t('advantagesForSupportingEntitiesDescriptionList2')}
					</li>
					<li>
						{t('advantagesForSupportingEntitiesDescriptionList3')}
					</li>
					<li>
						{t('advantagesForSupportingEntitiesDescriptionList4')}
					</li>
				</ul>
			</div>
			<div className={'rounded-[10px] overflow-hidden mb-[20px]'}>
				<Image
					src={advantagesForSupportingEntitiesImage}
					alt={''}
					className={'object-cover h-[300px]'}
				/>
			</div>
			<h3 className={'f-24-700 c_004053 mb-[5px]'}>{t('notes')}:</h3>
			<div className={'border rounded-[10px] p-[25px] b-c_F1F2EC'}>
				<ul className={'info-list'}>
					<li>{t('advantagesForSupportingEntitiesNotesList1')}</li>
					<li>{t('advantagesForSupportingEntitiesNotesList2')}</li>
					<li>{t('advantagesForSupportingEntitiesNotesList3')}</li>
					<li>{t('advantagesForSupportingEntitiesNotesList4')}</li>
					<li>{t('advantagesForSupportingEntitiesNotesList5')}</li>
					<li>{t('advantagesForSupportingEntitiesNotesList6')}</li>
				</ul>
			</div>
		</section>
	);
};
export default AdvantagesForSupportingEntities;
