import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { IPolicyModel } from '@/src/models/policy';

interface IProps {
	data: IPolicyModel;
}

const Policy: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();

	return (
		<div>
			<section>
				<div className="container">
					<div className={'lg:max-w-[75%] w-full mx-auto'}>
						<h2 className={'f-32-700 c_004053 mb-[20px]'}>
							{data.title}
						</h2>
						<div
							className={
								'py-[30px] px-[25px] border rounded-[10px] border-color'
							}
						>
							<h3 className={'f-24-700 c_004053 mb-[25px]'}>
								{data.subtitle}
							</h3>
							<div
								dangerouslySetInnerHTML={{
									__html: data.content,
								}}
							></div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Policy;
