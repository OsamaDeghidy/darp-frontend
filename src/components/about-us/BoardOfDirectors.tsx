import { useI18n } from '@/src/locales';
import MemberCard from '@/src/components/ui/cards/MemberCard';
import { IBoardOfDirectorsModel } from '@/src/models/about-us';
import { FC } from 'react';

interface IProps {
	data: IBoardOfDirectorsModel;
}

const BoardOfDirectors: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	return (
		<section>
			<h1
				className={
					'mb-[20px] c_004053 f-32-700 md:flex items-end gap-[5px]'
				}
			>
				{data.title}
				<span className={'f-20-700 block'}>{data.subtitle}</span>
			</h1>

			<div className="grid grid-cols-12 gap-[24px]">
				{data.boardOfDirectorsList
					.filter((x) => x.markAsTop)
					.map((item, index) => (
						<MemberCard
							className={
								'xl:col-span-4 lg:col-span-6 col-span-12'
							}
							key={index}
							image={item.image.url}
							name={item.name}
							jobTitle={item.jobTitle}
							description={item.description}
						/>
					))}
			</div>

			<div className="grid grid-cols-12 gap-[24px]">
				{data.boardOfDirectorsList
					.filter((x) => !x.markAsTop)
					.map((item, index) => (
						<MemberCard
							className={
								'xl:col-span-4 lg:col-span-6 col-span-12'
							}
							key={index}
							image={item.image.url}
							name={item.name}
							jobTitle={item.jobTitle}
							description={item.description}
						/>
					))}
			</div>
		</section>
	);
};
export default BoardOfDirectors;
