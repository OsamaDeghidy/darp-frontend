import React, { FC } from 'react';
import {
	BodyText20SB,
	SectionTitle,
} from '@/src/components/ui/typography/typography';
import { useI18n } from '@/src/locales';
import Image from 'next/image';
import Link from 'next/link';
import PlayIcon from '@/src/components/ui/icons/PlayIcon';
import { IDownloadAppModel } from '@/src/models/home';
import AppStoreIcon from '@/src/components/ui/icons/AppStoreIcon';

interface IProps {
	data: IDownloadAppModel;
}

const DownloadApp: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();

	return (
		<section className="section download-section">
			<div className="container">
				<div className="grid grid-cols-12 justify-center items-center">
					<div className="md:col-span-6 col-span-12">
						<div className="download-content">
							<SectionTitle
								text={data.title}
								className="section-title !text-right"
							/>
							<BodyText20SB
								text={data.description}
								className="mb-[20px]"
							/>
							<div className="flex items-center gap-[24px]">
								<Link
									aria-label="download it now"
									href={data.link}
									target="_blank"
									className={
										'btn btn-primary !rounded-[10px] !flex items-center gap-[5px]'
									}
								>
									<PlayIcon className="inline-block" />
									{data.downloadButtonText}
								</Link>
								<Link
									aria-label="download it now"
									href={data.linkAppStore}
									target="_blank"
									className={
										'btn btn-primary !rounded-[10px] !flex items-center gap-[5px]'
									}
								>
									<AppStoreIcon className="inline-block h-[20px] w-[20px]" />
									{data.downloadButtonTextAppStore}
								</Link>
							</div>
						</div>
					</div>
					<figure className="relative md:col-span-6 col-span-12">
						<Image
							className="m-auto mt-5 md:mt-0"
							alt="Download the mobile app"
							src={data.image.url}
							width={429}
							height={526}
						/>
						<figcaption className="sr-only">
							{data.title}
						</figcaption>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default DownloadApp;
