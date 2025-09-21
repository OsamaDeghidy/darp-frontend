import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import { Field, Form, Formik } from 'formik';
import SelectField from '@/src/components/ui/fields/SelectField';
import ResetIcon from '@/src/components/ui/icons/ResetIcon';
import SortIcon from '@/src/components/ui/icons/SortIcon';
import FilterIcon from '@/src/components/ui/icons/FilterIcon';

interface IProps {}

const TracksDeveloped: FC<IProps> = (props) => {
	const t = useI18n();
	const [showFilter, setShowFilter] = useState<boolean>(false);
	return (
		<section>
			<h2 className={'mb-[20px] c_004053 f-32-700'}>{t('tracks')}</h2>
			<p className={'mb-[20px] f-16-700 c_2D2D2D'}>
				{t('tracksDescription')}
			</p>
			<div className="flex items-center gap-[24px]  mb-[20px]">
				<input
					className={'custom-input'}
					type="text"
					placeholder={t('search') + '...'}
				/>
				<button className={'button button-orange lg:min-w-[170px]'}>
					{t('search')}
				</button>
			</div>
			<div className="flex items-center justify-between gap-[20px] mb-[20px]">
				<p className={'f-20-700 c_004053'}>213 {t('track')}</p>
				<div className="flex items-center gap-[15px]">
					<button
						className={'button button-small button-orange-outline'}
						onClick={() => {
							setShowFilter(!showFilter);
						}}
					>
						<FilterIcon />
					</button>
					<button
						className={'button button-small button-orange-outline'}
					>
						<SortIcon />
					</button>
				</div>
			</div>
			{showFilter && (
				<Formik initialValues={{}} onSubmit={(values) => {}}>
					{({ values }) => (
						<Form>
							<div
								className={
									'border rounded-[10px] py-[20px] px-[30px] b-c_F1F2EC mb-[15px]'
								}
							>
								<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
									<Field
										className={
											'2xl:col-span-5 xl:col-span-4 lg:col-span-6 col-span-12'
										}
										label={t('theProvince')}
										placeholder={t('pleaseEnterYour', {
											fieldName: t('theProvince'),
										})}
										name={'theProvince'}
										component={SelectField}
									/>
									<Field
										className={
											'2xl:col-span-5 xl:col-span-4 lg:col-span-6 col-span-12'
										}
										label={t('howDifficultItIs')}
										placeholder={t('pleaseEnterYour', {
											fieldName: t('howDifficultItIs'),
										})}
										name={'howDifficultItIs'}
										component={SelectField}
									/>
									<div
										className={
											'2xl:col-span-2 xl:col-span-4 col-span-12'
										}
									>
										<div className="flex items-end gap-[15px] h-full">
											<button
												type={'reset'}
												className={
													'button button-orange-outline'
												}
											>
												<ResetIcon
													className={'fill-c_F47B3D'}
												/>
											</button>
											<button
												type={'submit'}
												className={
													'button button-orange'
												}
											>
												{t('search')}
											</button>
										</div>
									</div>
								</div>
							</div>
						</Form>
					)}
				</Formik>
			)}
		</section>
	);
};
export default TracksDeveloped;
