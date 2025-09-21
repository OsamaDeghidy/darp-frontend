import { useChangeLocale, useCurrentLocale, useI18n } from '@/src/locales';
import { FC, useEffect } from 'react';
import DropdownBase from '@/src/components/ui/dropdowns/DropdownBase';
import { MenuProps } from 'antd';
import LanguageIcon from '@/src/components/ui/icons/LanguageIcon';
import { DropdownTriggerType } from '@/src/models/dropdown';
import World2Icon from '@/src/components/ui/icons/World2Icon';
import { useDispatch } from 'react-redux';
import { setLang } from '@/src/store/reducers/utilitiesSlice';
import { useRouter } from 'next/router';

interface IProps {
	trigger?: DropdownTriggerType;
	isButton?: boolean;
}

const LanguageChanger: FC<IProps> = (props) => {
	const { trigger, isButton = true } = props;
	const locale = useCurrentLocale();
	const changeLocale = useChangeLocale();
	const t = useI18n();
	const router = useRouter();
	const dispatch = useDispatch();
	useEffect(() => {
		if (locale == 'ar') {
			dispatch(setLang('ar-SA'));
		} else {
			dispatch(setLang('en-US'));
		}
		router.replace(router.asPath, router.asPath, {
			scroll: false,
		});
	}, [locale]);
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<button
					type='button'
					onClick={() => {
						locale != 'en' && changeLocale('en');
					}}
				>
					English
				</button>
			),
		},
		{
			key: '2',
			label: (
				<button
					type='button'
					onClick={() => {
						locale != 'ar' && changeLocale('ar');
					}}
				>
					عربي
				</button>
			),
		},
	];

	return (
		<DropdownBase
			trigger={trigger}
			title={
				isButton ? (
					<div className={'button-icon'}>
						<LanguageIcon />
					</div>
				) : (
					<World2Icon className={'w-[25px] h-[25px]'} />
				)
			}
			showArrow={false}
			items={items}
		/>
	);
};
export default LanguageChanger;
