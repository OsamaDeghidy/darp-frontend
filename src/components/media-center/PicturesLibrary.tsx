import React, { FC, useState } from 'react';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import { useI18n } from '@/src/locales';
import PictureLibraryCard from '@/src/components/ui/cards/PictureLibraryCard';
import PicturesLibraryModal from '@/src/components/ui/modals/PicturesLibraryModal';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';
import {
	IPhotosLibraryItemModel,
	IPhotosLibraryPageModel,
} from '@/src/models/media-center';

interface IProps {
	data: IPhotosLibraryPageModel;
}

const PicturesLibrary: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	const [pictureLibraryModal, setPictureLibraryModal] =
		useState<IStatusChangeModel>(new StatusChangeModel());
	const [selectedItem, setSelectedItem] = useState<IPhotosLibraryItemModel>();
	const [viewAll, setViewAll] = useState(false);
	return (
		<>
			<section className={'pictures-library-page'}>
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
									title: t('picturesLibrary'),
								},
							]}
						/>
					</div>
					<div className="pictures-library-page__content">
						<h1 className={'c_004053 f-32-700 mb-[30px]'}>
							{data.title}
						</h1>
						<div className="cards mb-[60px]">
							<div className="grid grid-cols-12 gap-[24px]">
								{!!viewAll
									? data.photosLibraryItems.map(
											(item, index) => (
												<div
													key={index}
													className="col-span-12 md:col-span-6 lg:col-span-4"
												>
													<PictureLibraryCard
														data={item}
														handleClick={() => {
															setSelectedItem(
																item,
															);
															setPictureLibraryModal(
																{
																	statusChange:
																		!pictureLibraryModal.statusChange,
																	value: true,
																},
															);
														}}
													/>
												</div>
											),
										)
									: data.photosLibraryItems
											.slice(0, 9)
											.map((item, index) => (
												<div
													key={index}
													className="col-span-12 md:col-span-6 lg:col-span-4"
												>
													<PictureLibraryCard
														data={item}
														handleClick={() => {
															setSelectedItem(
																item,
															);
															setPictureLibraryModal(
																{
																	statusChange:
																		!pictureLibraryModal.statusChange,
																	value: true,
																},
															);
														}}
													/>
												</div>
											))}
							</div>
							{!viewAll && data.photosLibraryItems.length > 9 && (
								<div className="flex justify-center  mt-[30px]">
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
				<PicturesLibraryModal
					data={selectedItem}
					openModal={pictureLibraryModal}
					onClose={() => {
						setSelectedItem(undefined);
					}}
				/>
			)}
		</>
	);
};
export default PicturesLibrary;
