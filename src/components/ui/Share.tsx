import { FC } from 'react';
import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from 'next-share';
import { useI18n } from '@/src/locales';

interface IProps {
	shareUrl: string;
	shareTitle: string;
}

const Share: FC<IProps> = (props) => {
	const { shareUrl, shareTitle } = props;
	const t = useI18n();
	return (
		<div className="content">
			<h2 className={'mb-[10px] f-16-700 c_004053'}>{t('share')}</h2>
			<div className="share-icons flex items-center gap-[10px]">
				<div className="share-icon-wrapper">
					<FacebookShareButton
						aria-label={shareTitle}
						url={shareUrl}
						quote={shareTitle}
						title={shareTitle}
						// hashtag={`#${shareTitle}`}
						className="share-button"
					>
						<FacebookIcon size={30} round />
					</FacebookShareButton>
				</div>
				<div className="share-icon-wrapper">
					<LinkedinShareButton
					aria-label={shareTitle}
						url={shareUrl}
						title={shareTitle}
						className="share-button"
					>
						<LinkedinIcon size={30} round />
					</LinkedinShareButton>
				</div>
				<div className="share-icon-wrapper">
					<TwitterShareButton
					aria-label={shareTitle}
						url={shareUrl}
						title={shareTitle}
						className="share-button"
					>
						<TwitterIcon size={30} round />
					</TwitterShareButton>
				</div>
				<div className="share-icon-wrapper">
					<WhatsappShareButton
					aria-label={shareTitle}
						url={shareUrl}
						title={`${shareTitle}`}
						separator=" -- "
						className="share-button"
					>
						<WhatsappIcon size={30} round />
					</WhatsappShareButton>
				</div>
			</div>
		</div>
	);
};
export default Share;
