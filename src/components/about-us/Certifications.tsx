import { FC } from 'react';
import { useI18n } from '@/src/locales';
import { IAsssociationLicenseCertificateModel } from '@/src/models/about-us';
import CustomImage from '@/src/components/ui/CustomImage';

interface IProps {
	data: IAsssociationLicenseCertificateModel;
}

const CertificationPage: FC<IProps> = (props) => {
	const { data } = props;

	const t = useI18n();
	
	// Safe data access with fallback
	const safeData = data || {};
	
	return (
		<section className={'certification-page'}>
			<h1 className={'f-32-700 c_004053 mb-[30px]'}>
				{safeData.title || 'Certification'}
			</h1>
			{safeData.image?.url && (
				<div
					className={
						'border rounded-[10px] bg-c_white p-[20px] md:p-[50px] b-c_F1F2EC relative'
					}
				>
					<CustomImage
						className={'object-contain h-[530px]  w-full'}
						src={safeData.image.url}
						alt={safeData.title || 'Certification'}
					/>
				</div>
			)}
		</section>
	);
};
export default CertificationPage;
