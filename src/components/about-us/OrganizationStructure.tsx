import { FC } from 'react';
import { useI18n } from '@/src/locales';
import { IOrganizationStructureModel } from '@/src/models/about-us';

interface IProps {
	data: IOrganizationStructureModel | null;
	isMobile?: boolean;
}

const OrganizationStructure: FC<IProps> = ({ data, isMobile = false }) => {
	const t = useI18n();
	
	// Add null check for data
	if (!data || !data.organizationStructureItems) {
		return (
			<section>
				{!isMobile && (
					<h1 className={'mb-[20px] c_004053 f-32-700'}>
						{t('organizationalChart')}
					</h1>
				)}
				<div className="text-center py-8">
					<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
						<p className="text-yellow-800 font-medium mb-2">⚠️ البيانات غير متاحة حالياً</p>
						<p className="text-yellow-700 text-sm">
							يبدو أن هناك مشكلة في الخادم. يرجى المحاولة مرة أخرى لاحقاً أو التواصل مع فريق الدعم الفني.
						</p>
					</div>
				</div>
			</section>
		);
	}
	
	return (
		<section>
			{!isMobile && (
				<h1 className={'mb-[20px] c_004053 f-32-700'}>
					{data.mainTitle || t('organizationalChart')}
				</h1>
			)}
			{data.organizationStructureItems[0] && (
				<div className="border rounded-[10px] bg-c_white p-[10px] md:p-[50px] b-c_F1F2EC relative">
					<h2 className="org-title">
						{data.organizationStructureItems[0].title}
					</h2>
					<div className="org-structure text-center mt-[30px]">
						<div className="structure-title text-center inline-block rounded-[10px]">
							{data.organizationStructureItems[0].subtitle}
						</div>
						<div className="structure-details w-full mt-[30px]">
							<div className="level-container flex justify-center">
								{data.organizationStructureItems[0].level1.map(
									(item, index, array) => (
										<div className="level-col" key={index}>
											<div
												className={`level level-1 inline-block rounded-[10px] connector ${index !== data.organizationStructureItems[0].level1.length - 1 ? 'connector-left' : 'no-connector'} ${index === Math.floor(array.length / 2) ? 'connector-bottom' : ' '}`}
											>
												{item}
											</div>
										</div>
									),
								)}
							</div>
						</div>
						<div className="structure-details w-full mt-[30px]">
							<div className="level-container flex justify-center">
								{data.organizationStructureItems[0].level2.map(
									(item, index) => (
										<div
											className="level level-2 rounded-[10px] connector-bottom"
											key={index}
										>
											{item}
										</div>
									),
								)}
							</div>
						</div>
						<div className="structure-details w-full mt-[60px]">
							<div className="level-container flex justify-center">
								{data.organizationStructureItems[0].level3.map(
									(item, index, array) => (
										<div
											className={`level-col  level-connector connector-${index}`}
											key={index}
										>
											<div
												className={`level level-3 inline-block rounded-[10px] connector connector-top no-connector`}
											>
												{item}
											</div>
										</div>
									),
								)}
							</div>
						</div>
						<div className="structure-details w-full mt-[30px]">
							<div className="level-container flex justify-start">
								{data.organizationStructureItems[0].level4.map(
									(item, index, array) => (
										<div className="level-col" key={index}>
											<div
												className={`level level-alt level-4 inline-block rounded-[10px] connector connector-top-dotted no-connector`}
											>
												{item}
											</div>
										</div>
									),
								)}
							</div>
						</div>
						<div className="structure-details w-full mt-[30px]">
							<div className="level-container flex justify-start">
								{data.organizationStructureItems[0].level5.map(
									(item, index, array) => (
										<div className="level-col" key={index}>
											<div
												className={`level level-alt level-5 inline-block rounded-[10px] connector connector-top-dotted no-connector`}
											>
												{item}
											</div>
										</div>
									),
								)}
							</div>
						</div>
					</div>
				</div>
			)}
			{data.organizationStructureItems[1] && (
				<div className="border rounded-[10px] bg-c_white p-[20px] md:p-[50px] mt-[30px] b-c_F1F2EC relative">
					<h2 className="org-title">
						{data.organizationStructureItems[1].title}
					</h2>
					<div className="org-structure text-center mt-[30px]">
						<div className="structure-title text-center inline-block rounded-[10px]">
							{data.organizationStructureItems[1].subtitle}
						</div>
						<div className="structure-details w-full mt-[30px]">
							<div className="level-container flex justify-center">
								{data.organizationStructureItems[1].level1.map(
									(item, index, array) => (
										<div className="level-col" key={index}>
											<div
												className={`level level-1 inline-block rounded-[10px] connector no-connector ${index === Math.floor(array.length / 2) ? 'connector-bottom' : ' '}`}
											>
												{item}
											</div>
										</div>
									),
								)}
							</div>
						</div>
						<div className="structure-details w-full mt-[30px]">
							<div className="level-container flex justify-center">
								{data.organizationStructureItems[1].level2.map(
									(item, index) => (
										<div
											className="level level-1 rounded-[10px] connector-bottom"
											key={index}
										>
											{item}
										</div>
									),
								)}
							</div>
						</div>
						<div className="structure-details w-full mt-[30px]">
							<div className="level-container flex justify-center">
								{data.organizationStructureItems[1].level3.map(
									(item, index, array) => (
										<div className="level-col" key={index}>
											<div
												className={`level level-1 inline-block rounded-[10px] connector connector-top no-connector`}
											>
												{item}
											</div>
										</div>
									),
								)}
							</div>
						</div>
						<div className="structure-details w-full mt-[30px]">
							<div className="level-container flex justify-center">
								{data.organizationStructureItems[1].level4.map(
									(item, index, array) => (
										<div className="level-col" key={index}>
											<div
												className={`level level-alt level-1 inline-block rounded-[10px] connector connector-top-dotted no-connector`}
											>
												{item}
											</div>
										</div>
									),
								)}
							</div>
						</div>
						<div className="structure-details w-full mt-[30px]">
							<div className="level-container flex justify-center">
								{data.organizationStructureItems[1].level5.map(
									(item, index, array) => (
										<div className="level-col" key={index}>
											<div
												className={`level level-alt level-1 inline-block rounded-[10px] connector connector-top-dotted no-connector`}
											>
												{item}
											</div>
										</div>
									),
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};
export default OrganizationStructure;
