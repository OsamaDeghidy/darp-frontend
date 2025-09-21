import { FC } from 'react';

interface IProps {
	name: string;
	title: string;
}

const CommitteeCard: FC<IProps> = (props) => {
	const { name, title } = props;
	return (
		<div
			className={
				'committee-card p-[25px] border rounded-[10px] bg-c_white flex flex-col gap-[5px] items-center'
			}
		>
			<span className="name f-18-700 c_000000">{name}</span>
			<span className="title f-16-600 c_C4C4C4">{title}</span>
		</div>
	);
};
export default CommitteeCard;
