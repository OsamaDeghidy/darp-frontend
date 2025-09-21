import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Pagination, Switch } from 'antd/lib';
import { Field, Form, Formik } from 'formik';

import { useI18n } from '@/src/locales';
import { HRef } from '@/src/utilities/href';
import { useWindowSize } from '@/src/hooks/useWindowSize';

import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import FilterIcon from '@/src/components/ui/icons/FilterIcon';
import SortIcon from '@/src/components/ui/icons/SortIcon';
import ResetIcon from '@/src/components/ui/icons/ResetIcon';
import TrackCard from '@/src/components/ui/cards/TrackCard';
import InputField from '@/src/components/ui/fields/InputField';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import TrackMap from '@/src/components/ui/maps/TrackMap';
import { GeneralLookup } from '@/src/components/ui/lookups/GeneralLookup';

import { useGetAllTracksQuery, useGetHomeMapTracksQuery } from '@/src/store/RTKQuery/track/trackApi';
import { IHomeMapTrackModel, ITrackParamModel } from '@/src/models/track';
import { LookupTypeEnum } from '@/src/enums/lookup-type-enum';

const TracksMainPage: FC = () => {
	const t = useI18n();
	const { width } = useWindowSize();
	const searchParams = useSearchParams();
	const title = searchParams.get('title');

	const [showMap, setShowMap] = useState(true);
	const [showFilter, setShowFilter] = useState(false);
	const [selectedTrack, setSelectedTrack] = useState<number>();
	const [params, setParams] = useState<ITrackParamModel>({
		pageSize: 5,
		pageNumber: 1,
		title: title || '',
	});

	const { data: points } = useGetHomeMapTracksQuery();
	const { data } = useGetAllTracksQuery({ params });

	useEffect(() => setSelectedTrack(undefined), [data, points]);

	const filteredMapPoints = (points?.data || [])
		.filter((p: IHomeMapTrackModel) => selectedTrack ? p.documentId === selectedTrack : true)
		.filter(p => p.firstPoint)
		.map(p => ({
			id: p.documentId,
			trackType: p.trackType,
			lat: Number(p.firstPoint?.Latitude),
			lng: Number(p.firstPoint?.Longitude),
		}));

	return (
		<section className="tracks-page mb-[60px]">
			<div className="container">
				<CustomBreadcrumb
					className="mt-[30px]"
					data={[
						{ title: <Link href={HRef.home}>{t('home')}</Link> },
						{ title: t('tracks') },
					]}
				/>

				<div className="main-content mt-[20px]">
					<div className="header flex-wrap gap-[15px] flex justify-between mb-[20px]">
						<div className="title gap-[20px] flex items-center">
							<h1 className="c_004053 f-32-700">{t('tracks')}</h1>
							<p className="f-20-700 c_004053">{data?.data?.totalCount || 0} {t('track')}</p>
						</div>

						<div className="flex items-center gap-[15px]">
							<button onClick={() => setShowFilter(prev => !prev)} className="button button-small b-c_004053 button-primary-outline no-style">
								<FilterIcon />
							</button>
							<button onClick={() => setParams(prev => ({ ...prev, orderBy: prev.orderBy === 'createdAt' ? '' : 'createdAt' }))} className="button button-small b-c_004053 button-primary-outline no-style">
								<SortIcon />
							</button>
							<div className="show-map flex items-center gap-[10px]">
								<span className="f-14-600 c_737373">{t('showMap')}</span>
								<Switch
									checked={showMap}
									onChange={() => setShowMap(prev => !prev)}
									className="react-switch"
									style={{
										backgroundColor: showMap ? '#F47B3D' : 'white',
										boxShadow: !showMap ? '0 0 1px 0 #00000026' : undefined,
									}}
								/>
							</div>
						</div>
					</div>

					{showFilter && (
						<Formik initialValues={{ difficulty: '', region: '' }} onSubmit={(values) => {
							setParams(prev => ({ ...prev, pageNumber: 1, ...values }));
						}}>
							<Form className="border rounded-[10px] py-[20px] px-[30px] b-c_F1F2EC mb-[15px]">
								<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
									<GeneralLookup
										className="2xl:col-span-5 xl:col-span-4 lg:col-span-6 col-span-12"
										name="region"
										label={t('theProvince')}
										placeholder={t('pleaseEnterYour', { fieldName: t('theProvince') })}
										type={LookupTypeEnum.Region}
									/>
									<GeneralLookup
										className="2xl:col-span-5 xl:col-span-4 lg:col-span-6 col-span-12"
										name="difficulty"
										label={t('howDifficultItIs')}
										placeholder={t('pleaseEnterYour', { fieldName: t('howDifficultItIs') })}
										type={LookupTypeEnum.DifficultyLevel}
									/>
									<div className="2xl:col-span-2 xl:col-span-4 col-span-12 flex items-end gap-[15px] h-full">
										<button type="reset" className="button button-primary-outline">
											<ResetIcon className="fill-c_F47B3D" />
										</button>
										<button type="submit" className="button button-secondary">{t('search')}</button>
									</div>
								</div>
							</Form>
						</Formik>
					)}

					<div className="collapse-container">
						<div className="collapse-content flex gap-[24px]">
							{(width && width <= 768 && showMap) ? null : (
								<div className="tracks-cards w-full">
									<Formik initialValues={{ search: '' }} onSubmit={(values) => {
										setParams(prev => ({ ...prev, title: values.search, pageNumber: 1 }));
									}}>
										<Form className="flex items-center gap-[24px] mb-[30px]">
											<Field name="search" component={InputField} placeholder={t('search') + '...'} className="w-full" />
											<CustomButton type="submit" className="button-secondary lg:min-w-[170px]" text={t('search')} />
										</Form>
									</Formik>

									{data && (
										<>
											<div className={showMap ? 'flex flex-wrap gap-[15px] overflow-y-scroll' : 'grid grid-cols-12 gap-[24px]'} style={showMap ? { maxHeight: 'calc(100vh - 337px)' } : {}}>
												{data.data.items.map((item, i) => (
													<TrackCard
														key={i}
														data={item}
														onClick={() => setSelectedTrack(item.id)}
														className={showMap ? 'w-full' : 'xl:col-span-6 lg:col-span-6 col-span-12'}
													/>
												))}
											</div>

											<div className="pagination flex mt-[30px] w-full justify-center">
												<Pagination
													total={data.data.totalCount}
													current={params.pageNumber}
													pageSize={params.pageSize}
													onChange={(page) => setParams(prev => ({ ...prev, pageNumber: page }))}
													className="flex items-center"
												/>
											</div>
										</>
									)}
								</div>
							)}
							{showMap && points?.data && (
								<div className={'aside-map ' + (width && width <= 768 ? 'w-full mobile' : 'flex-grow-0 flex-shrink-0 basis-[50%]')}>
									<TrackMap points={filteredMapPoints} />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TracksMainPage;
