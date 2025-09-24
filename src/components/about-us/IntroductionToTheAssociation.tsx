import { useI18n } from '@/src/locales';
import Image from 'next/image';
import { IAboutOrganizationModel } from '@/src/models/about-us';
import { FC } from 'react';
import { createMarkupArticle } from '@/src/utilities/createMarkup';

interface IProps {
	data: IAboutOrganizationModel;
}

const IntroductionToTheAssociation: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();

	// Debug: Log the data to see what we're receiving
	console.log('IntroductionToTheAssociation data:', data);
	console.log('IntroductionToTheAssociation data type:', typeof data);
	console.log('IntroductionToTheAssociation data keys:', data ? Object.keys(data) : 'no data');

	// Safe data access with fallback
	const safeData = data || {
		title: 'تعريف بالجمعية',
		subtitle: 'جمعية مسارات ورحلات المشي (درب)',
		content: '<p>جمعية مسارات ورحلات المشي جمعية اهلية مسجلة بقرار من معالي وزير الموارد البشرية والتنمية الاجتماعية برقم (2006) وتعمل تحت اشراف وزارة السياحة. والجمعية متخصصة في ايجاد واعتماد مسارات للمشي تكون متكاملة تخدم مختلف فئات المجتمع في جميع مناطق المملكة.</p>',
		image: { url: 'https://darb0org-001-site1.mtempurl.com/media/x2mlmo5t/mask-group-1.png' },
		mainImage: { url: 'https://darb0org-001-site1.mtempurl.com/media/x2mlmo5t/mask-group-1.png' }
	};
	
	console.log('safeData after fallback:', safeData);

	return (
		<section>
			<h1 className={'mb-[20px] c_004053 f-32-700'}>
				{safeData.title || t('introductionToTheAssociation')}
				{safeData.subtitle && (
					<span className={'f-20-700 d-inline-block mr-2'}>
						{safeData.subtitle}
					</span>
				)}
			</h1>
			{safeData.title && (
				<article>
					{(safeData.image?.url || safeData.mainImage?.url) && (
						<figure className="grid h-[300px] w-full relative mb-[20px] ">
							<Image
								className={' rounded-[10px]  object-cover'}
								src={safeData.image?.url || safeData.mainImage?.url || 'https://darb0org-001-site1.mtempurl.com/media/x2mlmo5t/mask-group-1.png'}
								alt={safeData.title || 'About Organization'}
								sizes="100vw"
								fill={true}
							/>
							<figcaption className="sr-only">
								{safeData.title || 'About Organization'}
							</figcaption>
						</figure>
					)}
					{safeData.content && (
						<div
							className={'f-16-600 c_2D2D2D'}
							dangerouslySetInnerHTML={createMarkupArticle(
								typeof safeData.content === 'string' 
									? safeData.content 
									: (safeData.content as any)?.markup || safeData.content,
							)}
						></div>
					)}
				</article>
			)}
		</section>
	);
};
export default IntroductionToTheAssociation;
