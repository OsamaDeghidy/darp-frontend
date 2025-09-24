import { FC } from 'react';
import { useI18n } from '@/src/locales';
import Image from 'next/image';
import { IStrategicDirectionsModel } from '@/src/models/about-us';
import CustomImage from '@/src/components/ui/CustomImage';

interface IProps {
	data: IStrategicDirectionsModel | null;
}

const StrategicDirections: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	
	// Add null check for data
	if (!data) {
		return (
			<div className="text-center py-8">
				<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
					<p className="text-yellow-800 font-medium mb-2">⚠️ البيانات غير متاحة حالياً</p>
					<p className="text-yellow-700 text-sm">
						يبدو أن هناك مشكلة في الخادم. يرجى المحاولة مرة أخرى لاحقاً أو التواصل مع فريق الدعم الفني.
					</p>
				</div>
			</div>
		);
	}
	
	return (
		<>
			<section
				className={
					'border rounded-[10px] bg-c_white p-[30px] b-c_F1F2EC mb-[30px]'
				}
			>
				<article className="grid grid-cols-12 gap-[24px]">
					<div className="col-span-12 md:col-span-7 order-2 md:order-1">
						<h1 className={'mb-[20px] c_004053 f-32-700'}>
							{data.message?.title || 'Strategic Directions'}
						</h1>
						<p className={'f-16-500 c_2D2D2D'}>
							{data.message?.description || ''}
						</p>
					</div>
					<div className="col-span-12 md:col-span-4 md:col-start-9 relative h-[150px] order-1 md:order-2">
						{data.message.image?.url ? (
							<Image
								className={'h-full w-full'}
								fill
								src={data.message.image.url}
								alt={data.message?.title || ''}
							/>
						) : (
							<div className="h-full w-full bg-gray-200 flex items-center justify-center">
								<span className="text-gray-500 text-sm">No Image</span>
							</div>
						)}
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
							{data.vision?.title || 'Vision'}
						</h2>
						<p className={'f-16-500 c_2D2D2D'}>
							{data.vision?.description || ''}
						</p>
					</article>
					<div className="col-span-12 md:col-span-4 md:col-start-9 relative h-[150px] order-1 md:order-2">
						{data.vision.image?.url ? (
							<Image
								className={'h-full w-full'}
								fill
								src={data.vision.image.url}
								alt={data.vision?.title || ''}
							/>
						) : (
							<div className="h-full w-full bg-gray-200 flex items-center justify-center">
								<span className="text-gray-500 text-sm">No Image</span>
							</div>
						)}
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
							{data.mission?.title || 'Mission'}
					<p className={'f-20-700'}>{data.mission?.subtitle || ''}</p>
				</h2>
				<div
					className={
						'message-list mb-[40px] grid grid-cols-12 gap-[24px]'
					}
				>
					{data.mission?.missionList?.map((message, index) => (
						<article
							key={index}
							className={
								'flex flex-col gap-[8px] col-span-12 md:col-span-6'
							}
						>
							<span className="number f-32-700 c_F47B3D">
								{message?.title || ''}
							</span>
							<span className="message f-16-500 c_2D2D2D">
								{message?.description || ''}
							</span>
						</article>
					)) || []}
				</div>
			</section>

			<h2 className={'mb-[20px] c_004053 f-32-700'}>
				{data.associationValues?.title || 'Association Values'}
			</h2>

			<p className={'f-16-600 c_2D2D2D mb-[20px]'}>
				{data.associationValues?.subtitle || ''}
			</p>
			<ul className={'associationValues mb-[40px]'}>
				{data.associationValues?.associationValuesList?.map(
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
										src={item?.image?.url || ''}
										alt={item?.title || ''}
									/>
								</div>
								<div className="flex flex-col gap-[10px]">
									<h3 className={'f-18-700 c_004053'}>
										{item?.title || ''}
									</h3>
									{item?.description || ''}
								</div>
							</article>
						</li>
					)) || []}
			</ul>
		</>
	);
};
export default StrategicDirections;
