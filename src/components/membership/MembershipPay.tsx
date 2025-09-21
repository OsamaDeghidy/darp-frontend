import React, { FC, useEffect, useState } from 'react';
import { useI18n } from '@/src/locales';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import { useSearchParams } from 'next/navigation';
import { useSubscriptionMutation } from '@/src/store/RTKQuery/payment/paymentApi';
import { useGetPaymentStatusMutation } from '@/src/store/RTKQuery/payment/paymentStatus';
import Spinner from '@/src/components/ui/Spinner';
import SuccessIcon from '@/src/components/ui/icons/SuccessIcon';
import Close2Icon from '@/src/components/ui/icons/Close2Icon';
import { useRouter } from 'next/router';
import { PaymentStatusEnum } from '@/src/enums/payment-status-enum';

interface IProps {}

const fieldCol3Class = 'lg:col-span-4 md:col-span-6 col-span-12';

const MembershipPay: FC<IProps> = (props) => {
	const t = useI18n();
	const router = useRouter();
	const searchParams = useSearchParams();
	const memberShipId = searchParams.get('id');
	const [subscription, subscriptionResult] = useSubscriptionMutation();
	const [paymentStatus, paymentStatusResult] = useGetPaymentStatusMutation();
	const [paymentId, setPaymentId] = useState<number>();

	const [status, setStatus] = useState('');

	const [memberId, setMemberId] = useState<number>();
	const [subscriptionUrl, setSubscriptionUrl] = useState<string>();
	useEffect(() => {
		if (memberShipId) {
			setMemberId(Number(memberShipId));
		}
	}, [memberShipId]);

	useEffect(() => {
		if (subscriptionResult.isSuccess && subscriptionResult.data.data) {
			setSubscriptionUrl(subscriptionResult.data.data.url);
			setPaymentId(subscriptionResult.data.data.id);
		}
	}, [subscriptionResult.data]);

	const handleContinuePayment = () => {
		if (memberId) {
			subscription({
				contentID: memberId,
			});
		}
	};
	useEffect(() => {
		handleContinuePayment();
	}, [memberShipId, memberId]);

	useEffect(() => {
		if (paymentStatusResult.data?.isSuccess) {
			setStatus(paymentStatusResult.data.data.status);
		}
	}, [paymentStatusResult.data]);

	useEffect(() => {
		if (subscriptionResult.data?.isSuccess === false) {
			router.push(HRef.membership);
		}
	}, [subscriptionResult.data]);

	const getTransactionStatus = async () => {
		// Call the Backend API to get the transaction status
		paymentStatus({ payment_id: paymentId });
	};

	const onload = () => {
		setTimeout(() => {
			getTransactionStatus();
		}, 2000);
	};
	return (
		<div>
			<div className="container">
				<CustomBreadcrumb
					className={'mb-[20px] mt-[20px]'}
					data={[
						{
							title: <Link href={HRef.home}>{t('home')}</Link>,
						},
						{
							title: (
								<Link href={HRef.membership + '/' + memberId}>
									{t('membershipDetails')}
								</Link>
							),
						},
						{
							title: (
								<Link
									href={
										HRef.membership +
										'/' +
										memberId +
										'/cart'
									}
								>
									{t('cart')}
								</Link>
							),
						},
						{
							title: t('payment'),
						},
					]}
				/>
				{!subscriptionUrl && (
					<div
						className={
							'p-[60px] h-[600px] flex flex-col items-center justify-center border b-c_F1F2EC rounded-[10px] mt-[40px]'
						}
					>
						<div>
							<Spinner />
						</div>
					</div>
				)}

				{subscriptionUrl &&
					status != PaymentStatusEnum.Captured &&
					status != PaymentStatusEnum.Failed && (
						<>
							<iframe
								className={'rounded-[10px] mt-[40px]'}
								id="paymentIframe"
								width="100%"
								height="600px"
								src={subscriptionUrl}
								onLoad={(e) => onload()}
								allow="payment"
							/>
						</>
					)}
				{status === PaymentStatusEnum.Captured && (
					<div
						className={
							'flex flex-col items-center justify-center  p-[40px] border rounded-[10px] gap-[30px] mt-[30px] bg-c_white box-shadow'
						}
					>
						<SuccessIcon className={'mb-[20px]'} />

						<p className="f-24-700 c_004053 text-center mb-[30px]">
							{t('paymentHasBeenCompletedSuccessfully')}
						</p>
						<Link
							href={HRef.home}
							className={'button button-orange'}
						>
							{t('goToTheHomePage')}
						</Link>
					</div>
				)}
				{status === PaymentStatusEnum.Failed && (
					<div
						className={
							'h-full flex flex-col items-center justify-center p-[40px] border rounded-[10px] gap-[30px] mt-[30px] bg-c_white'
						}
					>
						<Close2Icon className={'mb-[20px]'} />

						<p className="f-24-700 c_EB0000 text-center mb-[10px]">
							{t('paymentFailed')}
						</p>

						<Link href={HRef.membership + '/' + memberId + '/cart'}>
							<button
								className={'button button-orange'}
								onClick={() => {
									setStatus('');
									// window.location.reload();
									setSubscriptionUrl('');
								}}
							>
								{t('tryAgain')}
							</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};
export default MembershipPay;
