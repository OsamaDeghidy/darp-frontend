import React, { useEffect, useState } from 'react';
import { FieldProps } from 'formik';
import { Upload, UploadFile } from 'antd/lib';
import { isEmpty } from 'lodash';
import { useI18n } from '@/src/locales';
import { getString } from '@/src/utilities/string';
import UploadIcon from '@/src/components/ui/icons/UploadIcon';
import CameraIcon from '@/src/components/ui/icons/CameraIcon';

interface IProps extends FieldProps {
	label: string;
	name: string;
	className?: string;
	data?: string[];
	multiple?: boolean;
	fileType?: string[];
	styleType?: 'button' | 'dnd';
}

const UploadFileField: React.FC<IProps> = (props) => {
	const {
		field,
		data = [],
		className,
		multiple = false,
		styleType = 'button',
		//fileType = ['image/jpeg', 'image/png', 'image/jpg'],
		name,
		label,
		form: { setFieldValue, errors, touched },
	} = props;
	const t = useI18n();
	const [fileList, setFileList] = useState<UploadFile[]>([]);

	useEffect(() => {
		setFieldValue(field.name, fileList);
	}, [fileList, setFieldValue, field.name]);
	useEffect(() => {
		if (!isEmpty(data)) {
			const arr: UploadFile[] = [];
			data.map((item, index) => {
				arr.push({
					uid: index.toString(),
					name: item.substring(item.lastIndexOf('/') + 1),
					status: 'done',
					url: item,
				});
			});
			setFileList(arr);
		}
	}, [data]);
	return (
		<div
			className={
				'custom-upload ' + 'style-' + styleType + getString(className)
			}
		>
			{label && (
				<span
					className={'field-label f-16-600 c_2D2D2D mb-[10px] block'}
				>
					{label}
				</span>
			)}
			<Upload
				multiple={multiple}
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
				listType="text"
				fileList={fileList}
				onChange={(info) => {
					setFileList(info.fileList);
				}}
			>
				{(multiple || (!multiple && isEmpty(fileList))) && (
					<>
						{styleType == 'button' ? (
							<div
								className={
									'flex items-center gap-[10px] py-[10px] px-[25px] border rounded-[10px] b-c_004053'
								}
							>
								<UploadIcon />
								<span className={'f-14-500 c_004053'}>
									{t('chooseAFile')}
								</span>
							</div>
						) : (
							<div
								className={
									'border border-dashed rounded-[5px] b-c_E5E5E5 flex flex-col gap-[5px] w-full justify-center items-center p-[40px]'
								}
							>
								<CameraIcon />
								<p className={'text-center f-16-500 c_ADADAD'}>
									{t('dragAndDropHere')}
								</p>
								<p className={'text-center f-16-500 c_ADADAD'}>
									{t('or')}
								</p>
								<p className={'text-center f-16-500 c_004053'}>
									{t('browseFiles')}
								</p>
							</div>
						)}
					</>
				)}
			</Upload>
		</div>
	);
};
export default UploadFileField;
