import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import { Form, Formik } from 'formik';
import ResetIcon from '@/src/components/ui/icons/ResetIcon';
import FilterIcon from '@/src/components/ui/icons/FilterIcon';
import SortIcon from '@/src/components/ui/icons/SortIcon';
import { useGetAllTracksQuery } from '@/src/store/RTKQuery/track/trackApi';
import { ITrackParamModel } from '@/src/models/track';
import { useSearchParams } from 'next/navigation';
import TrackCard from '@/src/components/ui/cards/TrackCard';
import Loader from '../ui/Loader';
import { Pagination } from 'antd/lib';
import { GeneralLookup } from '@/src/components/ui/lookups/GeneralLookup';
import { LookupTypeEnum } from '@/src/enums/lookup-type-enum';

interface IProps {}

const ChooseAPath: FC<IProps> = (props) => {
	const t = useI18n();
	const searchParams = useSearchParams();
	const title = searchParams.get('title');
	const [showFilter, setShowFilter] = useState<boolean>(false);
	const [params, setParams] = useState<ITrackParamModel>({
		pageSize: 9,
		pageNumber: 1,
	});
	const { data, isLoading } = useGetAllTracksQuery({ params: params });
	return (
		<>
			<section
				className={
					'border rounded-[10px] p-[25px] b-c_F1F2EC mb-[15px] bg-c_white'
				}
			>
				<div className="flex items-center justify-between gap-[20px] mb-[20px]">
					<h1 className={'c_004053 f-32-700'}>{t('chooseAPath')}</h1>
					<div className="flex items-center gap-[15px]">
						<button
							aria-label="filter"
							type="button"
							className={
								'button button-small button-orange-outline'
							}
							onClick={() => {
								setShowFilter(!showFilter);
							}}
						>
							<FilterIcon />
						</button>
						<button
							aria-label="sort"
							type="button"
							className={
								'button button-small button-orange-outline'
							}
						>
							<SortIcon />
						</button>
					</div>
				</div>
				{showFilter && (
					<Formik
						initialValues={{
							region: '',
							difficulty: '',
						}}
						onSubmit={(values) => {
							setParams((prevState: any) => ({
								...prevState,
								pageNumber: 1,
								region: values.region,
								difficulty: values.difficulty,
							}));
						}}
					>
						{({ values }) => (
							<Form>
								<div
									className={
										'border rounded-[10px] py-[20px] px-[30px] b-c_F1F2EC mb-[15px]'
									}
								>
									<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
										<GeneralLookup
											className={
												'2xl:col-span-5 xl:col-span-4 lg:col-span-6 col-span-12'
											}
											label={t('theProvince')}
											placeholder={t('pleaseEnterYour', {
												fieldName: t('theProvince'),
											})}
											name={'region'}
											type={LookupTypeEnum.Region}
										/>
										<GeneralLookup
											className={
												'2xl:col-span-5 xl:col-span-4 lg:col-span-6 col-span-12'
											}
											label={t('howDifficultItIs')}
											placeholder={t('pleaseEnterYour', {
												fieldName:
													t('howDifficultItIs'),
											})}
											name={'difficulty'}
											type={
												LookupTypeEnum.DifficultyLevel
											}
										/>
										<div
											className={
												'2xl:col-span-2 xl:col-span-4 col-span-12'
											}
										>
											<div className="flex items-end gap-[15px] h-full">
												<button
													type={'reset'}
													className={
														'button button-orange-outline'
													}
												>
													<ResetIcon
														className={
															'fill-c_F47B3D'
														}
													/>
												</button>
												<button
													type={'submit'}
													className={
														'button button-orange'
													}
												>
													{t('search')}
												</button>
											</div>
										</div>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				)}
				{isLoading ? (
					<Loader />
				) : (
					<div className="grid grid-cols-12 gap-[24px]">
						{data?.data.items.map((item, index) => (
							<TrackCard
								data={item}
								key={index}
								className={
									'xl:col-span-4 lg:col-span-6 col-span-12'
								}
								vertical={true}
								showStart={true}
							/>
						))}
					</div>
				)}
			</section>
			{data?.data.items && data.data.totalCount > data.data.pageSize && (
				<Pagination
					current={data.data.pageNumber}
					pageSize={data.data.pageSize}
					total={data.data.totalCount}
					onChange={(page, pageSize) => {
						setParams((prevState: any) => ({
							...prevState,
							pageNumber: page,
						}));
					}}
					className="pagination"
				/>
			)}
		</>
	);
};
export default ChooseAPath;
