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

	return (
		<section>
			<h1 className={'mb-[20px] c_004053 f-32-700'}>
				{data.title}
				<span className={'f-20-700 d-inline-block mr-2'}>
					{data.subtitle}
				</span>
			</h1>
			{data && (
				<article>
					<figure className="grid h-[300px] w-full relative mb-[20px] ">
						<Image
							className={' rounded-[10px]  object-cover'}
							src={data.image.url}
							alt={data.title}
							sizes="100vw"
							fill={true}
						/>
						<figcaption className="sr-only">
							{data.title}
						</figcaption>
					</figure>
					<div
						className={'f-16-600 c_2D2D2D'}
						dangerouslySetInnerHTML={createMarkupArticle(
							data.content,
						)}
					></div>
				</article>
			)}
		</section>
	);
};
export default IntroductionToTheAssociation;
