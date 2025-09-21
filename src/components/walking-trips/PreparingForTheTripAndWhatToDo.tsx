import React, { FC, useEffect, useState } from 'react';
import { useI18n } from '@/src/locales';
import Image from 'next/image';
import { IPreparingForHikingModel } from '@/src/models/track';

interface IProps {
	data: IPreparingForHikingModel;
}

const PreparingForTheTripAndWhatToDo: FC<IProps> = (props) => {
	const t = useI18n();
	const { data } = props;
	const [contentList, setContentList] = useState<string[]>();

	function splitParagraphIntoListItems(paragraph: string) {
		// Remove the <p> tags and split the paragraph by <br>
		const strippedParagraph = paragraph.replace(/<\/?p>/g, '');
		const paragraphArray = strippedParagraph.split('<br>');

		// Remove any empty strings from the array
		const filteredArray = paragraphArray.filter(
			(item) => item.trim() !== '',
		);

		// Create an array of <li> elements
		const listItems = filteredArray.map((sentence, index) => (
			<li key={index}>{sentence}</li>
		));
		setContentList(filteredArray);

		return <ul>{listItems}</ul>;
	}

	useEffect(() => {
		const paragraph = data.preparingForHikingTripsItems[0].content;
		const resultArray = splitParagraphIntoListItems(paragraph);
	}, [data.preparingForHikingTripsItems]);

	return (
		<section
			className={
				'border rounded-[10px] p-[25px] b-c_F1F2EC mb-[15px] bg-c_white'
			}
		>
			{data.preparingForHikingTripsItems.map((item, index) => (
				<div key={index}>
					<h2 className={'mb-[20px] c_004053 f-32-700'}>
						{item.title}
					</h2>
					<div
						className={
							'rounded-[10px] relative  h-[300px] w-full overflow-hidden mb-[20px]'
						}
					>
						<Image
							fill
							src={item.image?.url}
							alt={''}
							className={'object-cover '}
						/>
					</div>
					{/*<p className={'f-18-700'}*/}
					{/*   dangerouslySetInnerHTML={{ __html: splitParagraphIntoArray(item.content) }}></p>*/}
					<ul className={'hiking-list grid grid-cols-12 gap-[24px] '}>
						{contentList &&
							contentList.map((item, index) => (
								<li
									key={index}
									className={
										'f-18-700 col-span-12 xl:col-span-6'
									}
								>
									{item}
								</li>
							))}
					</ul>
				</div>
			))}
		</section>
	);
};
export default PreparingForTheTripAndWhatToDo;
