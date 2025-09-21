import React, { ReactNode, useState } from 'react';
import { Upload, UploadFile } from 'antd/lib';
import { useI18n } from '@/src/locales';
import { getString } from '@/src/utilities/string';

interface IProps {
	className?: string;
	fileType?: string[];
	text?: string;
	icon?: ReactNode;
}

const CustomUploadFile: React.FC<IProps> = (props) => {
	const {
		className,
		text,
		icon,
		//fileType = ['image/jpeg', 'image/png', 'image/jpg'],
	} = props;
	const t = useI18n();
	const [fileList, setFileList] = useState<UploadFile[]>([]);

	return (
		<div className={'custom-upload ' + getString(className)}>
			<Upload
				multiple={false}
				className={'!block hide-show-item'}
				beforeUpload={(file) => {
					/* const isSupportFileType = fileType.includes(file.type);
					 if (!isSupportFileType) {
						 message.error(`Please choose the correct file.`);
					 }
					 return isSupportFileType || Upload.LIST_IGNORE;*/
				}}
				//action={process.env.BASE_URL + '/api/' + Endpoint.uploadFile}
				/*                headers={
									{
										authorization: `Bearer ${getCookie(CookieEnum.token)}`,
									}
								}*/
				//method={'POST'}
				fileList={[]}
				onChange={(info) => {
					setFileList(info.fileList);
				}}
			>
				<div className="bg-c_white flex items-center gap-[10px] rounded-[5px] py-[10px] px-[25px]">
					{icon && icon}
					<span className={'f-16-600 c_F47B3D'}>{text}</span>
				</div>
			</Upload>
		</div>
	);
};
export default CustomUploadFile;
