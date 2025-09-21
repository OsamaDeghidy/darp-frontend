import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import CommitteCard from '@/src/components/ui/cards/CommitteCard';
import uuid4 from 'uuid4';

const data = [
	{
		name: 'د. عبدالله بن ابراهيم القويز',
		title: 'عضو اللجنة',
	},
	{
		name: 'د. عبدالله بن ابراهيم القويز',
		title: 'عضو اللجنة',
	},
	{
		name: 'د. عبدالله بن ابراهيم القويز',
		title: 'عضو اللجنة',
	},
	{
		name: 'د. عبدالله بن ابراهيم القويز',
		title: 'عضو اللجنة',
	},
	{
		name: 'د. عبدالله بن ابراهيم القويز',
		title: 'عضو اللجنة',
	},
	{
		name: 'د. عبدالله بن ابراهيم القويز',
		title: 'عضو اللجنة',
	},
];
const ProjectsCommittee: FC = () => {
	const t = useI18n();
	return (
		<>
			<section className="projects-committee mb-[40px]">
				<h2 className={'mb-[20px] c_004053 f-32-700'}>
					{t('projectsCommittee')}
				</h2>

				<div className="committee-cards">
					<div className="cheif-card  grid grid-cols-12 mb-[24px]">
						<div className="card col-span-12 md:col-span-6 xl:col-span-4">
							<CommitteCard
								name={'د. عبدالله بن ابراهيم القويز'}
								title={'رئيس اللجنة'}
							/>
						</div>
					</div>
					<div className="cards grid grid-cols-12 gap-[24px]">
						{data.map((card) => (
							<div
								key={uuid4()}
								className={
									'col-span-12 md:col-span-6 xl:col-span-4'
								}
							>
								<CommitteCard
									name={card.name}
									title={card.title}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="projects-committee mb-[40px]">
				<h2 className={'mb-[20px] c_004053 f-32-700'}>
					{t('financeAndInvestmentCommittee')}
				</h2>
				<div className="committee-cards">
					<div className="cheif-card  grid grid-cols-12 mb-[24px]">
						<div className="card col-span-12 md:col-span-6 xl:col-span-4">
							<CommitteCard
								name={'د. عبدالله بن ابراهيم القويز'}
								title={'رئيس اللجنة'}
							/>
						</div>
					</div>
					<div className="cards grid grid-cols-12 gap-[24px]">
						{data.map((card) => (
							<div
								key={uuid4()}
								className={
									'col-span-12 md:col-span-6 xl:col-span-4'
								}
							>
								<CommitteCard
									name={card.name}
									title={card.title}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
export default ProjectsCommittee;
