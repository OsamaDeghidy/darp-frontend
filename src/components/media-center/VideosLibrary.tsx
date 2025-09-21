import React, { FC, useState } from 'react';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import { useI18n } from '@/src/locales';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';
import uuid4 from 'uuid4';
import VideoLibraryCard from '@/src/components/ui/cards/VideoLibraryCard';
import VideosLibraryModal from '@/src/components/ui/modals/VideosLibraryModal';
import {
	IVideosLibraryItemModel,
	IVideosLibraryPageModel,
} from '@/src/models/media-center';

interface IProps {
	data: IVideosLibraryPageModel;
}

const VideosLibrary: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	const [videosLibraryModal, setVideoLibraryModal] =
		useState<IStatusChangeModel>(new StatusChangeModel());
	const [selectedItem, setSelectedItem] = useState<IVideosLibraryItemModel>();
	const [viewAll, setViewAll] = useState(false);

	return (
		<>
			<section className={'videos-library-page'}>
				<div className="container">
					<div className="bread-crumb mt-[20px] mb-[30px]">
						<CustomBreadcrumb
							data={[
								{
									title: (
										<Link href={HRef.home}>
											{t('home')}
										</Link>
									),
								},
								{
									title: t('videoLibrary'),
								},
							]}
						/>
					</div>
					<div className="videos-library-page__content ">
						<h1 className={'c_004053 f-32-700 mb-[30px]'}>
							{data.title}
						</h1>
						<div className="cards  mb-[60px]">
							<div className="grid grid-cols-12 gap-[24px]">
								{!!viewAll
									? data.videosLibraryItems.map(
											(item, index) => (
												<div
													key={uuid4()}
													className="col-span-12 md:col-span-6 lg:col-span-4"
												>
													<VideoLibraryCard
														data={item}
														handleClick={() => {
															setSelectedItem(
																item,
															);
															setVideoLibraryModal(
																{
																	statusChange:
																		!videosLibraryModal.statusChange,
																	value: true,
																},
															);
														}}
													/>
												</div>
											),
										)
									: data.videosLibraryItems
											.slice(0, 9)
											.map((item, index) => (
												<div
													key={uuid4()}
													className="col-span-12 md:col-span-6 lg:col-span-4"
												>
													<VideoLibraryCard
														data={item}
														handleClick={() => {
															setSelectedItem(
																item,
															);
															setVideoLibraryModal(
																{
																	statusChange:
																		!videosLibraryModal.statusChange,
																	value: true,
																},
															);
														}}
													/>
												</div>
											))}
							</div>
							{!viewAll && data.videosLibraryItems.length > 9 && (
								<div className="flex justify-center mt-[30px]">
									<button
										aria-label={t('showMore')}
										type={'button'}
										className={'button button-secondary'}
										onClick={() => setViewAll(true)}
									>
										{t('showMore')}
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
			{selectedItem && (
				<VideosLibraryModal
					data={selectedItem}
					openModal={videosLibraryModal}
					onClose={() => {
						setSelectedItem(undefined);
					}}
				/>
			)}
		</>
	);
};
export default VideosLibrary;
