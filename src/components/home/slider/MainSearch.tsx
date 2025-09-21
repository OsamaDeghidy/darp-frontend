import React, { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useI18n } from '@/src/locales';
import SearchIcon from '@/src/components/ui/icons/SearchIcon';
import Arrow2Icon from '@/src/components/ui/icons/Arrow2Icon';
import { useRouter } from 'next/router';
import { HRef } from '@/src/utilities/href';

const MainSearch = ({ title }: any) => {
	const t = useI18n();
	const [sectionTitle, setSectionTitle] = useState('');
	const router = useRouter();
	useEffect(() => {
		setSectionTitle(title);
	}, [title]);

	return (
		<div className="form-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 z-[1]">
			<h1 className="from-title text-[40px] font-bold leading-[62px] text-center mb-[30px]">
				{sectionTitle}
			</h1>
			<Formik
				initialValues={{ search: '' }}
				onSubmit={(values) => {
					router.push(
						HRef.tracksDeveloped + '?title=' + values.search,
					);
				}}
			>
				<Form>
					<div className={'search-container m-auto relative '}>
						<SearchIcon className="fill-c_004053 absolute top-1/2 -translate-y-1/2 z-[1] rtl:right-[20px] ltr:left-[20px]" />
						<Field
							className="text-16px rtl:!pr-[50px] ltr:!pl-[50px] font-medium leading-[22px] w-full"
							type="text"
							id="search"
							placeholder={t('searchPlaceholder')}
							name="search"
						/>
						<ErrorMessage name="search" component="div" />
						<button
							aria-label="Submit"
							type="submit"
							className="w-[30px] h-[30px] absolute top-1/2 -translate-y-1/2 z-[1] rtl:left-[15px] ltr:right-[15px] flex items-center justify-center"
						>
							<Arrow2Icon className="fill-c_white" />
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default MainSearch;
