import { FC } from 'react';
import { useI18n } from '@/src/locales';
import Image from 'next/image';
import { IStrategicDirectionsModel } from '@/src/models/about-us';
import CustomImage from '@/src/components/ui/CustomImage';

interface IProps {
	data: IStrategicDirectionsModel;
}

const StrategicDirections: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	return (
		<>
			<section
				className={
					'border  rounded-[10px] bg-c_white p-[30px] b-c_F1F2EC mb-[30px]'
				}
			>
				<article className="grid grid-cols-12 gap-[24px]">
					<div className="col-span-12 md:col-span-7 order-2 md:order-1">
						<h1 className={'mb-[20px] c_004053 f-32-700'}>
							{data.message.title}
						</h1>
						<p className={'f-16-500 c_2D2D2D'}>
							{data.message.description}
						</p>
					</div>
					<div className="col-span-12 md:col-span-4 md:col-start-9 relative h-[150px] order-1 md:order-2">
						<Image
							className={'h-full w-full'}
							fill
							src={data.message.image.url}
							alt={data.message.title}
						/>
					</div>
				</article>
			</section>
			<section
				className={
					'border rounded-[10px] bg-c_white p-[30px] b-c_F1F2EC mb-[30px]'
				}
			>
				<div className="grid grid-cols-12 gap-[24px]">
					<article className="col-span-12 md:col-span-7 order-2 md:order-1">
						<h2 className={'mb-[20px] c_004053 f-32-700'}>
							{data.vision.title}
						</h2>
						<p className={'f-16-500 c_2D2D2D'}>
							{data.vision.description}
						</p>
					</article>
					<div className="col-span-12 md:col-span-4 md:col-start-9 relative h-[150px] order-1 md:order-2">
						<Image
							className={'h-full w-full'}
							fill
							src={data.vision.image.url}
							alt={data.vision.title}
						/>
					</div>
				</div>
			</section>
			<section
				className={
					'border rounded-[10px] p-[30px] bg-c_white b-c_F1F2EC mb-[30px]'
				}
			>
				<h2
					className={
						'mb-[20px] flex items-end gap-[8px] c_004053 f-32-700'
					}
				>
					{data.mission.title}
					<p className={'f-20-700'}>{data.mission.subtitle}</p>
				</h2>
				<div
					className={
						'message-list mb-[40px] grid grid-cols-12 gap-[24px]'
					}
				>
					{data.mission.missionList.map((message, index) => (
						<article
							key={index}
							className={
								'flex flex-col gap-[8px]  col-span-12 md:col-span-6'
							}
						>
							<span className="number f-32-700 c_F47B3D">
								{message.title}
							</span>
							<span className="message f-16-500 c_2D2D2D">
								{message.description}
							</span>
						</article>
					))}
				</div>
			</section>

			<h2 className={'mb-[20px] c_004053 f-32-700'}>
				{data.associationValues.title}
			</h2>

			<p className={'f-16-600 c_2D2D2D mb-[20px]'}>
				{data.associationValues.subtitle}
			</p>
			<ul className={'associationValues mb-[40px]'}>
				{data.associationValues.associationValuesList.map(
					(item, index) => (
						<li
							key={index}
							className={
								'border rounded-[10px] p-[20px] bg-c_white b-c_F1F2EC flex gap-[15px]'
							}
						>
							<article>
								<div className="icon">
									<CustomImage
										className={'w-[50px] h-[50px]'}
										src={item.image.url}
										alt={item.title}
									/>
								</div>
								<div className="flex flex-col gap-[10px]">
									<h3 className={'f-18-700 c_004053'}>
										{item.title}
									</h3>
									{item.description}
								</div>
							</article>
						</li>
					),
				)}
			</ul>
		</>
	);
};
export default StrategicDirections;
