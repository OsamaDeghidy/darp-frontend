import { FC } from 'react';
import { useI18n } from '@/src/locales';
import { range } from 'lodash';
import ReportCard from '@/src/components/ui/cards/ReportCard';
import darbImage from '@/public/images/darb.png';
import { HRef } from '@/src/utilities/href';

interface IProps {}

const GeneralAssemblyReports: FC<IProps> = (props) => {
	const t = useI18n();

	return (
		<section>
			<h2 className={'mb-[20px] c_004053 f-32-700'}>
				{t('generalAssemblyReports')}
			</h2>
			<div className="grid grid-cols-12 gap-[24px]">
				{range(0, 6).map((item, index) => (
					<ReportCard
						href={HRef.hash}
						className={'xl:col-span-4 lg:col-span-6 col-span-12'}
						key={index}
						image={darbImage}
						date={new Date()}
						title={'محضر اجتماع مجلس الادارة رقم 3 لعام 2021'}
					/>
				))}
			</div>
		</section>
	);
};
export default GeneralAssemblyReports;
