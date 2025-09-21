import React, { useEffect, useState } from 'react';
import { message, Upload, UploadFile } from 'antd/lib';
import { CookieEnum, getCookie } from '@/src/utilities/cookie';

interface IProps {
	url?: string;
	onUpload: (url: string) => void;
}

const fileType = ['image/jpeg', 'image/png', 'image/jpg'];
const UploadImage: React.FC<IProps> = (props) => {
	const { url, onUpload } = props;
	const [loading, setLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState<string>();
	const [file, setFile] = useState<UploadFile>();
	const [currentUrl, setCurrentUrl] = useState<string | undefined>(url);
	useEffect(() => {
		if (currentUrl) {
			setFile({
				uid: '1',
				name: currentUrl.substring(currentUrl.lastIndexOf('/') + 1),
				status: 'done',
				url: currentUrl,
			});
		}
	}, []);
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
				listType="picture-card"
				fileList={file ? [file] : []}
				onRemove={(file) => {
					setCurrentUrl(undefined);
					setFile(undefined);
				}}
				onChange={(info) => {
					setFile(info.fileList[0]);
					if (info.file.status === 'uploading') {
					} else {
						onUpload(info.file.response?.data);
					}
				}}
			>
				{!file && (
					<div className={'flex items-center gap-[5px]'}>+</div>
				)}
			</Upload>
		</div>
	);
};

export default UploadImage;
