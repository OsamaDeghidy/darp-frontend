import React, { ReactNode, useState } from 'react';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';
import NotAuthModal from '../ui/modals/NotAuthModal';

interface IProps {
	isAuthenticated: boolean;
	noAuthContent?: ReactNode;
	authContent?: ReactNode;
}

const NotAuth: React.FC<IProps> = ({
	isAuthenticated,
	noAuthContent,
	authContent,
}) => {
	const [isModalOpen, setIsModalOpen] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);

	return (
		<div>
			<NotAuthModal openModal={isModalOpen} />
		</div>
	);
};

export default NotAuth;
