import {
	useFollowUserMutation,
	useUnfollowUserMutation,
} from '@/src/store/RTKQuery/profile/profileApi';
import React, { FC, useEffect, useState } from 'react';
import FollowIcon from '../ui/icons/FollowIcon';
import DropdownBase from '../ui/dropdowns/DropdownBase';
import UnFollowIcon from '../ui/icons/UnFollowIcon';
import { useI18n } from '@/src/locales';
import NotAuthModal from '../ui/modals/NotAuthModal';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';
import { selectAuthUserSlice } from '@/src/store/reducers/authUserSlice';
import { useSelector } from 'react-redux';
import Loader from '@/src/components/ui/Loader';

interface IProps {
	id: number;
	isFollowing: boolean;
}

const FollowProfile: FC<IProps> = ({ id, isFollowing }) => {
	const t = useI18n();
	const [isModalOpen, setIsModalOpen] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);
	const [followingStatus, setFollowingStatus] = useState(isFollowing);
	const { user } = useSelector(selectAuthUserSlice);

	const [
		followUser,
		{ isLoading: isFollowingLoading, isSuccess: followSuccess },
	] = useFollowUserMutation();
	const [
		unfollowUser,
		{ isLoading: isUnfollowing, isSuccess: unfollowSuccess },
	] = useUnfollowUserMutation();

	const handleFollow = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!user?.id) {
			e.preventDefault();
			setIsModalOpen({
				statusChange: !isModalOpen.statusChange,
				value: true,
			});
			return;
		}
		followUser({ followingId: id });
	};

	const handleUnfollow = () => {
		unfollowUser({ followingId: id });
	};

	useEffect(() => {
		if (followSuccess) {
			setFollowingStatus(true);
		}
	}, [followSuccess]);

	useEffect(() => {
		if (unfollowSuccess) {
			setFollowingStatus(false);
		}
	}, [unfollowSuccess]);

	const items = [
		{
			key: 'unfollow',
			label: (
				<button
					className="f-12-600 cursor-pointer main flex items-center gap-x-2"
					onClick={handleUnfollow}
					disabled={isUnfollowing}
				>
					<UnFollowIcon />
					{t('unfollow')}
				</button>
			),
		},
	];

	return (
		<>
			<div>
				{isFollowingLoading || isUnfollowing ? (
					<Loader />
				) : (
					<>
						{followingStatus ? (
							<DropdownBase
								trigger={['click']}
								title={t('following')}
								items={items}
								className="drop-follow"
								overlayClassName="overlay-main"
							/>
						) : (
							<button
								onClick={handleFollow}
								disabled={isFollowingLoading}
								className="flex items-center gap-x-[5px]"
							>
								<span className="flex items-center gap-x-[5px] f-12-600 c_F47B3D">
									{t('follow')} <FollowIcon />
								</span>
							</button>
						)}{' '}
					</>
				)}
			</div>
			<NotAuthModal openModal={isModalOpen} />
		</>
	);
};

export default FollowProfile;
