import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { IStandingCommitteesModel } from '@/src/models/about-us';
import CommitteCard from '@/src/components/ui/cards/CommitteCard';
import uuid4 from 'uuid4';

interface IProps {
	data: IStandingCommitteesModel;
}

const StandingCommittees: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	return (
		<>
			{data.standingCommittees.map((item, index) => (
				<section key={index} className={'mb-[40px]'}>
					<h1 className={'mb-[20px] c_004053 f-32-700'}>
						{item.title}
					</h1>
					{item.standingCommitteesListItemList
						.filter((x) => x.markAsTop)
						.map((item, index) => (
							<div
								key={index}
								className="cheif-card gap-[24px]  grid grid-cols-12 mb-[24px]"
							>
								<div className="card col-span-12 md:col-span-6 xl:col-span-4">
									<CommitteCard
										name={item.name}
										title={item.jobTitle}
									/>
								</div>
							</div>
						))}

					<div className="cards grid grid-cols-12 gap-[24px]">
						{item.standingCommitteesListItemList
							.filter((x) => !x.markAsTop)
							.map((listItem, index) => (
								// <div
								// 	key={index}
								// 	className={
								// 		'lg:col-span-4 md:col-span-6 col-span-12'
								// 	}
								// >
								// 	<div>
								// 		<h4>{listItem.name}</h4>
								// 		<p>{listItem.jobTitle}</p>
								// 	</div>
								// </div>
								<div
									key={uuid4()}
									className={
										'col-span-12 md:col-span-6 xl:col-span-4'
									}
								>
									<CommitteCard
										name={listItem.name}
										title={listItem.jobTitle}
									/>
								</div>
							))}
					</div>
				</section>
			))}
		</>
	);
};
export default StandingCommittees;
