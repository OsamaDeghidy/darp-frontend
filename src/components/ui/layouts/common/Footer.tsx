import React, { FC } from 'react';
import logoWhiteImage from '@/public/images/logo-white.png';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import Image from 'next/image';
import { useI18n } from '@/src/locales';
import TwitterIcon from '@/src/components/ui/icons/TwitterIcon';
import InstagramIcon from '@/src/components/ui/icons/InstagramIcon';
import LinkedinIcon from '@/src/components/ui/icons/LinkedinIcon';
import YoutubeIcon from '@/src/components/ui/icons/YoutubeIcon';
import MMDIcon from '@/src/components/ui/icons/MMDIcon';
import { IFooterModel } from '@/src/models/page';

interface IProps {
	data: IFooterModel;
}

const currentYear = new Date().getFullYear();

const Footer: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();

	return (
		<footer>
			<div className="container">
				<div className="flex flex-col items-center">
					<div className="logo mb-[20px]">
						<Link href={HRef.home} aria-label='Darb'>
							<Image
								width={114}
								height={60}
								src={logoWhiteImage}
								alt="Darb"
							/>
						</Link>
					</div>
					<p
						className={
							'mb-[15px] f-16-400 c_white max-w-[600px] text-center'
						}
					>
						{data.description}
					</p>

					<nav className={'mb-[20px]'}>
						<ul
							className={
								'flex items-center gap-[25px] flex-wrap justify-center'
							}
						>
							{/*<li>*/}
							{/*	<Link href={HRef.home}>{t('home')}</Link>*/}
							{/*</li>*/}
							<li>
								<Link href={HRef.introductionToTheAssociation} aria-label='about Association'>
									{t('aboutAssociation')}
								</Link>
							</li>
							{/*<li>*/}
							{/*	<Link href={HRef.chooseAPath}>*/}
							{/*		{t('walkingTrips')}*/}
							{/*	</Link>*/}
							{/*</li>*/}
							{/*<li>*/}
							{/*	<Link href={HRef.tracksDeveloped}>*/}
							{/*		{t('tracks')}*/}
							{/*	</Link>*/}
							{/*</li>*/}
							{/*<li>*/}
							{/*	<Link href={'#'}>{t('news')}</Link>*/}
							{/*</li>*/}
							{/*<li>*/}
							{/*	<Link href={HRef.volunteering}>*/}
							{/*		{t('contributingToTheAssociation')}*/}
							{/*	</Link>*/}
							{/*</li>*/}
							<li>
								<Link href={HRef.callUs} aria-label='call Us'>{t('callUs')}</Link>
							</li>
							<li>
								<Link href={HRef.complaintsAndSuggestions} aria-label='complaints'>
									{t('complaints')}
								</Link>
							</li>
							<li>
								<Link href={HRef.policy} aria-label='privacy Policy'>
									{t('privacyPolicy')}
								</Link>
							</li>
						</ul>
					</nav>

					<ul
						className={
							'social flex items-center gap-[20px] flex-wrap justify-center mb-[30px]'
						}
					>
						{/*                        <li>
                            <Link href={'#'}>
                                <FacebookIcon />
                            </Link>
                        </li>*/}
						<li>
							<Link href={data.xTwitter} aria-label='xTwitter'>
								<TwitterIcon />
							</Link>
						</li>
						<li>
							<Link href={data.instagram} aria-label='instagram'>
								<InstagramIcon />
							</Link>
						</li>
						<li>
							<Link href={data.linkedin} aria-label='linkedin'>
								<LinkedinIcon />
							</Link>
						</li>
						<li>
							<Link href={data.youtube} aria-label='youtube'>
								<YoutubeIcon />
							</Link>
						</li>
						{/*			<li>
							<Link href={'#'}>
								<NotificationIcon />
							</Link>
						</li>*/}
					</ul>
				</div>
			</div>
			<div className="copyright py-[10px] bg-c_003949">
				<div className="container">
					<div className="flex items-center justify-center flex-wrap gap-[10px]">
						<p className={'text-center f-14-500 c_white'}>
							{t('copyright', { year: currentYear })}
						</p>
						<div className="develop-by flex items-center gap-[5px]">
							<p className={'f-14-500 c_white'}>
								{t('developBy')} :
							</p>
							<a href={'https://moselaymd.com'} target={'_blank'} aria-label={t('developBy')}>
								<MMDIcon height={15} width={50} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
