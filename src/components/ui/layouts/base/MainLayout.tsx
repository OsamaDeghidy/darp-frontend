import React, { FC, ReactNode } from 'react';
import Header from '@/src/components/ui/layouts/common/header/Header';
import Footer from '@/src/components/ui/layouts/common/Footer';
import Head from 'next/head';
import { IFooterModel, IHeaderModel } from '@/src/models/page';
import PageHeroSection from '@/src/components/ui/layouts/common/PageHeroSection';
import { INextImageType } from '@/src/models/image';
import { ISeoModel } from '@/src/models/seo';
import { useFullUrl } from '@/src/hooks/useFullUrl';
import { useI18n } from '@/src/locales';

interface IProps {
	children: ReactNode;
	width?: string;
	title?: string;
	footer?: IFooterModel;
	header?: IHeaderModel;
	name?: string;
	mainImage?: INextImageType;
	seo?: ISeoModel;

}

const MainLayout: FC<IProps> = (props) => {
	const { children, width, title, mainImage, name, header, footer ,seo} = props;
	const fullUrl = useFullUrl()
	const t = useI18n()


	return (
		<>
			 <Head>
                {seo ? (
                    <>
                        <title>
                            {t('darb')} 
                        </title>
                        <meta
                            name="description"
                            content={seo.content.metaDescription}
                        />

                        <meta name="keywords" content={seo.content.keywords} />

                        <meta
                            property="og:title"
                            content={seo.content.ogTitle}
                        />
                        <meta
                            property="og:description"
                            content={seo.content.metaDescription}
                        />
                        <meta
                            property="og:image"
                            content={seo.content.ogImage}
                        />
                        <meta name="robots" content="index, follow" />
                        <link rel="canonical" href={fullUrl} />
                        <link rel="alternate" href={fullUrl} hrefLang="en" />
                        <link rel="alternate" href={fullUrl} hrefLang="ar" />
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(
                                    seo.content.organizationSchema
                                ),
                            }}
                        />
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(
                                    seo.content.articleSchema
                                ),
                            }}
                        />
                    </>
                ) : (
                    <>
                        <title>
                            {t('darb')} | {title}
                        </title>
                        <meta name="robots" content="index, follow" />
                        <link rel="canonical" href={fullUrl} />
                        <link rel="alternate" href={fullUrl} hrefLang="en" />
                        <link rel="alternate" href={fullUrl} hrefLang="ar" />
                    </>
                )}
            </Head>
			{header && <Header data={header} />}
			<main>
				<div className={'main-layout  bg-c_FAFDFC min-h-[100vh]'}>
					{mainImage && (
						<PageHeroSection pageName={name} image={mainImage} />
					)}
					{children}
				</div>
			</main>
			{footer && <Footer data={footer} />}
		</>
	);
};
export default MainLayout;
