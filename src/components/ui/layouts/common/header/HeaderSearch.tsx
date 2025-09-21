import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { HRef } from '@/src/utilities/href';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';

interface IProps {}

const HeaderSearch: FC<IProps> = (props) => {
	const t = useI18n();
	const router = useRouter();

	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={(values) => {
				router.push(HRef.tracksDeveloped + '?title=' + values.search);
			}}
		>
			{({ values }) => (
				<Form>
					<div className="flex items-center gap-[24px]">
						<Field
							className={'custom-input'}
							type="text"
							name={'search'}
							placeholder={t('search') + '...'}
						/>
						<button className={'button button-orange'}>
							{t('search')}
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default HeaderSearch;
