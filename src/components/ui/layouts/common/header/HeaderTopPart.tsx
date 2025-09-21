import React, { FC } from 'react';
import Link from 'next/link';
import { useI18n } from '@/src/locales';
import TwitterIcon from '@/src/components/ui/icons/TwitterIcon';
import InstagramIcon from '@/src/components/ui/icons/InstagramIcon';
import { HRef } from '@/src/utilities/href';
import { IHeaderModel } from '@/src/models/page';

interface IProps {
	data: IHeaderModel;
}

const HeaderTopPart: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();

	return (
		<div className={'header-top-part bg-c_00313F z-5 relative py-[10px]'}>
			<div className="container">
				<div className="flex items-center gap-[20px] justify-end">
					<Link
						href={HRef.complaintsAndSuggestions}
						className="f-14-700 c_white" aria-label='complaints And Suggestions'
					>
						{t('reportAndSuggest')}
					</Link>
					<ul className={'flex items-center gap-[10px]'}>
						<li>
							<Link href={data.instagram} aria-label='instagram'>
								<InstagramIcon />
							</Link>
						</li>
						<li>
							<Link href={data.xTwitter} aria-label='xTwitter'>
								<TwitterIcon className={'fill-c_white'} />
							</Link>
						</li>
						{/* <li>
                            <Link href={'#'}>
                                <FacebookIcon/>
                            </Link>
                        </li>*/}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default HeaderTopPart;
