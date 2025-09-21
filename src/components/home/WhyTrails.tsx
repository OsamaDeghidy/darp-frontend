import Image from 'next/image';
import React, { FC } from 'react';
import { BodyText16R, BodyText18B, SectionTitle } from '@/src/components/ui/typography/typography';
import { useI18n } from '@/src/locales';
import { IWhyWalkingTrailsModel } from '@/src/models/home';

interface IProps {
	data: IWhyWalkingTrailsModel;
}

const WhyTrails: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();

	return (
		<section className="section whyTrails">
			<div className="container">
				<SectionTitle text={data?.title || ''} className="section-title" />
				<div className="wh-container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{data?.whyWalkingTrailsList?.map((trail, index) => (
						<article
							key={index}
							className="wh-card px-[15px] py-[20px]"
							aria-labelledby={trail?.title || ''}
						>
							<figure className="wh-image text-center">
								<Image
									className="m-auto mb-[10px]"
									width={70}
									height={70}
									alt={trail?.title || ''}
									src={trail?.image?.url || ''}
									sizes="100vw"
								/>
								<figcaption className="sr-only">
									{trail?.title || ''}
								</figcaption>
							</figure>
							<BodyText18B
								text={trail?.title || ''}
								className="wh-title text-center mb-[5px]"
							/>
							<BodyText16R
								text={trail?.description || ''}
								className="wh-text text-center"
							/>
						</article>
					))}
				</div>
				{/*<div className="text-center mt-[30px]">
					<Link href="#" className="btn btn-primary ">
						{t('viewAll')}
					</Link>
				</div>*/}
			</div>
		</section>
	);
};

export default WhyTrails;
