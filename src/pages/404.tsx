import { NextPage } from 'next';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import { useI18n } from '@/src/locales';

const NotFoundPage: NextPage = () => {
    const t = useI18n();
    return (
        <MainLayout title={t('pageName', { name: t('notFoundPage') })}>
            <div className="container">
                <h2 className={'text-center f-36-700 mt-[60px]'}>
                    {t('notFoundPage')}
                </h2>
            </div>
        </MainLayout>
    );
};
export default NotFoundPage;
