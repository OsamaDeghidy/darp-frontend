import { useI18n } from '@/src/locales';
import { ITrackMyProfile, ITrackParamModel } from '@/src/models/track';
import React, { FC, useState } from 'react';
import TrackCard from '../ui/cards/TrackCard';
import { useGetTrackMyProfileQuery } from '@/src/store/RTKQuery/profile/profileApi';
import NoData from '../shared/NoData';
import NoDataIcon from '../ui/icons/NoDataIcon';
import Loader from '../ui/Loader';
import { Pagination } from 'antd/lib';
import { selectAuthUserSlice } from '@/src/store/reducers/authUserSlice';
import { useSelector } from 'react-redux';

interface IProps {
	trackProfileById?: ITrackMyProfile;
	isViewProfile?: boolean;
}

const TracksProfile: FC<IProps> = (props) => {
	const { trackProfileById, isViewProfile } = props;
	const t = useI18n();
	const { user } = useSelector(selectAuthUserSlice);

	const [params, setParams] = useState<ITrackParamModel>({
		pageNumber: 1,
		pageSize: 8,
	});

	const { data, isLoading, refetch } = useGetTrackMyProfileQuery(
		{ params },
		{ skip: !user },
	);

	return (
		<>
			{/* <div className="mb-[30px]">
				<h3 className={'f-24-700 c_004053 '}>{t('tracks')}</h3>
			</div> */}

			{isLoading ? (
				<div className="flex justify-center items-center">
					<Loader />
				</div>
			) : !data?.data?.items.length &&
			  !trackProfileById?.data?.items.length ? (
				<NoData
					icon={<NoDataIcon />}
					text={t('noData')}
					body={t('noDataBody')}
				/>
			) : (
				<>
					{isViewProfile ? (
						<>
							<div className="mb-[30px]">
								<h3 className={'f-24-700 c_004053 '}>
									{t('tracks')}
								</h3>
							</div>
							<div className="grid grid-cols-12 gap-[24px] mb-[60px]">
								{trackProfileById?.data?.items.map(
									(item, index) => (
										<TrackCard
											key={index}
											className={
												'md:col-span-6 col-span-12 lg:col-span-4 xl:col-span-3'
											}
											onLike={() => {
												refetch();
											}}
											vertical={true}
											data={item}
											showStart={true}
										/>
									),
								)}
							</div>
						</>
					) : (
						<>
							<div className="mb-[30px]">
								<h3 className={'f-24-700 c_004053 '}>
									{t('tracks')}
								</h3>
							</div>
							<div className="grid grid-cols-12 gap-[24px] mb-[60px]">
								{data?.data?.items.map((item, index) => (
									<TrackCard
										key={index}
										className={
											'md:col-span-6 col-span-12 lg:col-span-4 xl:col-span-3'
										}
										onLike={() => {
											refetch();
										}}
										vertical={true}
										data={item}
										showStart={true}
									/>
								))}
							</div>
							{data?.data.items &&
								data.data.totalCount > data.data.pageSize && (
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
					)}
					{/* <div className="grid grid-cols-12 gap-[24px] mb-[60px]">
					{data?.data?.items.map((item, index) => (
						<TrackCard
							key={index}
							className={
								'md:col-span-6 col-span-12 lg:col-span-4 xl:col-span-3'
							}
							onLike={() => {
								refetch();
							}}
							vertical={true}
							data={item}
							showStart={true}
						/>
					))}
				</div> */}
				</>
			)}
			{/* {data?.data.items && data.data.totalCount > data.data.pageSize && (
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
			)} */}
		</>
	);
};

export default TracksProfile;
