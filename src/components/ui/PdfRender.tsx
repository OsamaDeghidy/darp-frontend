import { FC } from 'react';

interface IProps {
	url: string;
}

const PdfRender: FC<IProps> = (props) => {
	const { url } = props;
	return <iframe src={url} className={'h-[1200px] w-full '}></iframe>;
};
export default PdfRender;
