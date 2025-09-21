import React, { FC, useState } from 'react';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import { useI18n } from '@/src/locales';
import MediaVideoCard from '@/src/components/ui/cards/MediaVideoCard';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';
import MediaPDFCard from '@/src/components/ui/cards/MediaPDFCard';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import {
	IMediaMaterialItemModel,
	IMediaMaterialPageModel,
} from '@/src/models/media-center';
import VideosLibraryModal from '@/src/components/ui/modals/VideosLibraryModal';

interface IProps {
	data: IMediaMaterialPageModel;
}

const MediaMaterialsPage: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	const [videosLibraryModal, setVideoLibraryModal] =
		useState<IStatusChangeModel>(new StatusChangeModel());
	const [selectedItem, setSelectedItem] = useState<IMediaMaterialItemModel>();
	return (
		<>
			<section className={'media-materials-page mb-[60px]'}>
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
									title: t('mediaMaterials'),
								},
							]}
						/>
					</div>
					<div className="pictures-library-page__content">
						<h2 className={'c_004053 f-32-700 mb-[30px]'}>
							{data.title}
						</h2>
						<div className="cards">
							<ResponsiveMasonry
								columnsCountBreakPoints={{
									576: 2,
									1024: 3,
								}}
							>
								<Masonry gutter={'15px'}>
									{data.mediaMaterialsItems.map(
										(item, index) => (
											<div key={index}>
												{item.file && (
													<MediaPDFCard
														title={item.title}
														href={item.file.url}
													/>
												)}
												{item.videoYoutubeLink && (
													<MediaVideoCard
														title={item.title}
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
														href={
															item.videoYoutubeLink
														}
													/>
												)}
											</div>
										),
									)}
								</Masonry>
							</ResponsiveMasonry>
						</div>
					</div>
				</div>
			</section>
			{selectedItem && (
				<VideosLibraryModal
					data={{
						title: selectedItem.title,
						description: '',
						videoYoutubeLink: selectedItem.videoYoutubeLink || '',
					}}
					openModal={videosLibraryModal}
					onClose={() => {
						setSelectedItem(undefined);
					}}
				/>
			)}
		</>
	);
};

export default MediaMaterialsPage;
