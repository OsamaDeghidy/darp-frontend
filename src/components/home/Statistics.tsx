import React, { FC } from 'react';
import { SectionTitle } from '@/src/components/ui/typography/typography';
import { useI18n } from '@/src/locales';
import { IBeneficiariesModel } from '@/src/models/home';

interface IProps {
	data: IBeneficiariesModel;
}

const Statistics: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();

	return (
		<section className="section">
			<div className="container">
				<SectionTitle
					text={data?.title || ''}
					className="section-title text-center md:w-1/2 m-auto"
				/>
				<div className="statistics-container grid md:grid-cols-3">
					{data?.beneficiariesList?.map((statistic, index) => (
						<article
							key={index}
							className="st-card text-center px-6"
							aria-labelledby={statistic?.title || ''}
						>
							<h3 className="st-title text-[46px] leading-[56px] font-semibold">
								{statistic?.count || 0}
							</h3>{' '}
							<p className="st-description text-[18px] leading-24px font-bold mt-[20px]">
								{statistic?.title || ''}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Statistics;
