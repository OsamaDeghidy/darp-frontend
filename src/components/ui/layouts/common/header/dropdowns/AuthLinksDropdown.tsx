import { FC } from 'react';
import { MenuProps } from 'antd';
import { useI18n } from '@/src/locales';
import DropdownBase from '@/src/components/ui/dropdowns/DropdownBase';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import UserIcon from '@/src/components/ui/icons/UserIcon';
import { DropdownTriggerType } from '@/src/models/dropdown';

interface IProps {
    trigger?: DropdownTriggerType;
}

const AuthLinksDropdown: FC<IProps> = (props) => {
    const {trigger} = props;
    const t = useI18n();
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <Link href={HRef.login} aria-label={t('login')}>{t('login')}</Link>,
        },
        {
            key: '2',
            label: <Link href={HRef.register} aria-label={t('createAccount')}>{t('createAccount')}</Link>,
        },
    ];
    return (
        <DropdownBase
            trigger={trigger}
            title={
                <button
                    type='button'
                    className="button-icon"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="userMenu" 
                >
                    <UserIcon aria-hidden="true" />
                </button>
            }
            showArrow={false}
            items={items}
        />
    );
};
export default AuthLinksDropdown;
