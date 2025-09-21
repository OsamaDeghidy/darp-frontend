import React, { FC, useEffect, useState } from 'react';
import { useI18n } from '@/src/locales';
import { DetailsTitle } from '@/src/components/ui/typography/typography';
import { Field, Form, Formik } from 'formik';
import TextAreaField from '@/src/components/ui/fields/TextAreaField';
import * as yup from 'yup';
import CommentCard from '@/src/components/ui/cards/CommentCard';
import { ITrackCommentParamModel } from '@/src/models/track';
import {
	useCreateCommentMutation,
	useGetTrackCommentsQuery,
} from '@/src/store/RTKQuery/track/trackApi';
import dayjs from 'dayjs';
import { selectAuthUserSlice } from '@/src/store/reducers/authUserSlice';
import { useSelector } from 'react-redux';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import { message } from 'antd/lib';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';

import utc from 'dayjs/plugin/utc';
import Loader from '../ui/Loader';
import NotAuthModal from '../ui/modals/NotAuthModal';
import { TrackTypeEnum } from '@/src/enums/track-type-enum';
import { ITracksCommentModel } from '@/src/models/ITracksComment';

dayjs.extend(utc);
dayjs.extend(localizedFormat);
interface IProps {
	trackId: number;
	trackType: TrackTypeEnum;
}

export const TrackComments: FC<IProps> = (props) => {
	const { trackId, trackType } = props;

	const t = useI18n();
	const [params, setParams] = useState<ITrackCommentParamModel>({
		pageSize: 5,
		pageNumber: 1,
		trackId: trackId,
		trackType: trackType,
	});
	const [removeValueNow, setRemoveValueNow] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);
	const [createComment, createCommentResult] = useCreateCommentMutation();
	const schema = () => {
		return yup.object().shape({});
	};
	const { user } = useSelector(selectAuthUserSlice);
	const [isModalOpen, setIsModalOpen] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);

	useEffect(() => {
		if (createCommentResult.isSuccess) {
			message.success(t('commentCreatedSuccessfully'));
			setRemoveValueNow({
				statusChange: !removeValueNow.statusChange,
				value: true,
			});
		}
	}, [createCommentResult.isSuccess]);
	const { data, isLoading } = useGetTrackCommentsQuery({
		params: params,
	});
	const [comments, setComments] = useState<ITracksCommentModel[]>([]);
	useEffect(() => {
		if (data) {
			setComments([...comments, ...data.data.items]);
		}
	}, [data]);
	return (
		<div>
			<DetailsTitle text={t('leaveComment')} className="mt-[30px]" />
			<div className="add-comment border rounded-[10px] p-[20px] bg-c_white box-shadow">
				<Formik
					initialValues={{
						Comment: '',
					}}
					validationSchema={schema}
					onSubmit={(values) => {
						createComment({
							comment: values.Comment,
							trackId: trackId,
							trackType: trackType,
						});
					}}
				>
					{({ values }) => (
						<Form>
							<div className="grid grid-cols-12 gap-[24px] mb-[20px]">
								<Field
									className={'col-span-12'}
									label={t('leaveComment')}
									placeholder={t('pleaseWriteYour', {
										fieldName: t('EnterYourComment'),
									})}
									name={'Comment'}
									removeValueNow={removeValueNow}
									component={TextAreaField}
								/>
							</div>
							<div className="flex items-center gap-[10px]">
								<CustomButton
									type={'submit'}
									isLoading={createCommentResult.isLoading}
									disabled={createCommentResult.isLoading}
									className={'button button-orange'}
									text={t('send')}
									onClick={(e) => {
										if (!user?.id) {
											e.preventDefault();
											setIsModalOpen({
												statusChange:
													!isModalOpen.statusChange,
												value: true,
											});
										}
									}}
								/>
								{user && user?.id ? (
									''
								) : (
									<span className={'text-[16px] c_warning'}>
										{t('pleaseLogin')}
									</span>
								)}
							</div>
						</Form>
					)}
				</Formik>
			</div>
			<DetailsTitle text={t('comments')} className="mt-[30px]" />
			<div className="comments-section flex flex-col gap-[20px]">
				{isLoading ? (
					<Loader />
				) : (
					<>
						{comments.map((comment, index) => (
							<div key={index}>
								<CommentCard
									childs={comment.childs}
									parentCommentId={comment.id}
									image={comment.user?.profileImage}
									name={comment.user?.name}
									date={dayjs(comment.createdAt)
										.utcOffset(6)
										.format('LLL')}
									comment={comment.comment}
									userId={comment.user?.userId}
								/>
							</div>
						))}
					</>
				)}
			</div>

			{data && data.data.pageNumber < data.data.totalPages && (
				<div className={'flex justify-center mt-[30px]'}>
					<CustomButton
						text={t('showMore')}
						className={'button button-orange'}
						isLoading={isLoading}
						disabled={isLoading}
						onClick={() => {
							setParams({
								...params,
								pageNumber: params.pageNumber + 1,
							});
						}}
					/>
				</div>
			)}
			<NotAuthModal openModal={isModalOpen} />
		</div>
	);
};
