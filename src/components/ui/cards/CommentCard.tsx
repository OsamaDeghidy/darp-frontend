import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useI18n } from '@/src/locales';
import { BodyText16R, BodyText18B } from '@/src/components/ui/typography/typography';
import { Field, Form, Formik } from 'formik';
import TextAreaField from '@/src/components/ui/fields/TextAreaField';
import * as yup from 'yup';
import { useReplyCommentMutation } from '@/src/store/RTKQuery/track/trackApi';
import { useSelector } from 'react-redux';
import { selectAuthUserSlice } from '@/src/store/reducers/authUserSlice';
import { ITracksCommentModel } from '@/src/models/ITracksComment';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import { message } from 'antd/lib';
import utc from 'dayjs/plugin/utc';
import Link from 'next/link';

dayjs.extend(utc);
dayjs.extend(localizedFormat);

interface comment {
	image: any;
	name: string;
	date: string;
	comment: string;
	parentCommentId: number;
	childs?: ITracksCommentModel[];
	noReply?: boolean;
	userId?: number;
}

const CommentCard: React.FC<comment> = ({
	image,
	name,
	date,
	comment,
	parentCommentId,
	childs,
	noReply,
	userId,
}) => {
	const t = useI18n();
	const schema = () => {
		return yup.object().shape({});
	};
	const [replyComment, replyCommentResult] = useReplyCommentMutation();
	const { user } = useSelector(selectAuthUserSlice);
	const [reply, setReply] = useState<boolean>(false);

	useEffect(() => {
		if (replyCommentResult.isSuccess) {
			setReply(!reply);
			message.success(t('commentCreatedSuccessfully'));
		}
	}, [replyCommentResult]);
	return (
		<div className="comment-card flex flex-start align-top border rounded-[10px] p-[20px] bg-c_white box-shadow">
			<div className="commenter-image h-[50px] min-w-[50px] rounded-[50%] relative overflow-hidden">
				<Link href={`/profile/${userId}`}>
					<Image
						className={''}
						alt={`${name}`}
						src={image}
						objectFit="cover"
						layout="fill"
					/>
				</Link>
			</div>
			<div className="commenter-info w-full">
				<Link href={`/profile/${userId}`}>
					<BodyText18B text={name} className="mb-[8px]" />
				</Link>
				<div className="comment-date mb-[10px]">{date}</div>
				<div className="comment-details mb-[30px]">
					<BodyText16R text={comment} />
				</div>
				<div className={'flex flex-col gap-[10px]'}>
					{childs?.map((reply, index) => (
						<div key={index}>
							<CommentCard
								noReply={true}
								parentCommentId={reply.id}
								image={reply.user?.profileImage}
								name={reply.user?.name}
								date={dayjs(reply.createdAt)
									.utcOffset(6)
									.format('LLL')}
								comment={reply.comment}
								userId={reply?.user?.userId}
							/>
						</div>
					))}
				</div>
				{!noReply && (
					<>
						{user && user?.id && (
							<button
								type={'button'}
								aria-label={t('reply')}
								className={'c_F47B3D f-18-700'}
								onClick={() => {
									setReply(!reply);
								}}
							>
								{t('reply')}
							</button>
						)}
						{reply && (
							<div className="add-comment border rounded-[10px] p-[20px] w-full mt-[15px]">
								<Formik
									initialValues={{
										Comment: '',
									}}
									validationSchema={schema}
									onSubmit={(values) => {
										replyComment({
											comment: values.Comment,
											parentCommentId: parentCommentId,
										});
									}}
								>
									{({ values }) => (
										<Form>
											<div className="grid grid-cols-12 gap-[24px] mb-[20px]">
												<Field
													className={'col-span-12'}
													placeholder={t(
														'pleaseWriteYour',
														{
															fieldName:
																t(
																	'EnterYourComment',
																),
														},
													)}
													name={'Comment'}
													component={TextAreaField}
												/>
											</div>
											<div className="flex items-center gap-[10px]">
												<CustomButton
													type={'submit'}
													isLoading={
														replyCommentResult.isLoading
													}
													disabled={
														replyCommentResult.isLoading
													}
													className={
														'button button-orange'
													}
													text={t('send')}
												/>
												{user && user?.id ? (
													''
												) : (
													<span
														className={
															'text-[16px] c_warning'
														}
													>
														{t('pleaseLogin')}
													</span>
												)}
											</div>
										</Form>
									)}
								</Formik>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default CommentCard;
