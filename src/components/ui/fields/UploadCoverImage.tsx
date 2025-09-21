import React, { useState } from 'react';
import { message, Upload, UploadFile } from 'antd/lib';
import { CookieEnum, getCookie } from '@/src/utilities/cookie';
import Camera2Icon from '@/src/components/ui/icons/Camera2Icon';
import { useI18n } from '@/src/locales';

interface IProps {
	onUpload: (url: string) => void;
}

const fileType = ['image/jpeg', 'image/png', 'image/jpg'];
const UploadCoverImage: React.FC<IProps> = (props) => {
	const { onUpload } = props;
	const [loading, setLoading] = useState(false);
	const [file, setFile] = useState<UploadFile>();
	const t = useI18n();
	return (
		<div>
			<Upload
				multiple={false}
				className={'!block hide-show-item'}
				beforeUpload={(file) => {
					const isSupportFileType = fileType.includes(file.type);
					if (!isSupportFileType) {
						message.error(`Please choose the correct file.`);
					}
					return isSupportFileType || Upload.LIST_IGNORE;
				}}
				action={process.env.BASE_URL + '/api/file/upload-image'}
				headers={{
					authorization: `Bearer ${getCookie(CookieEnum.token)}`,
				}}
				method={'POST'}
				fileList={file ? [file] : []}
				onChange={(info) => {
					setFile(undefined);
					if (info.file.status === 'uploading') {
						setFile(info.fileList[0]);
					} else {
						onUpload(info.file.response?.data);
					}
				}}
			>
				<div className="bg-c_white flex items-center gap-[10px] rounded-[5px] py-[10px] px-[25px]">
					<Camera2Icon />
					<span className={'f-16-600 c_F47B3D'}>
						{t('editTheCover')}
					</span>
				</div>
			</Upload>
		</div>
	);
};

export default UploadCoverImage;
