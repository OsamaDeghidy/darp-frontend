import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { IJobsPageModel } from '@/src/models/contact-us';
import { HRef } from '@/src/utilities/href';
import Link from 'next/link';

interface IProps {
	data: IJobsPageModel;
}

const Jobs: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();

	return (
		<section>
			<h1 className={'mb-[20px] c_004053 f-32-700'}>{data.title}</h1>

			<div dangerouslySetInnerHTML={{ __html: data.content }}></div>
			<div className={'flex'}>
				<Link
					className={'button button-outline'}
					href={HRef.callUs}
					aria-label={t('contactUs')}
				>
					{t('contactUs')}
				</Link>
			</div>
		</section>
	);
};
export default Jobs;
