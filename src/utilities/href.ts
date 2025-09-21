let baseUrl = '';
const donationBaseUrl = process.env.DONATION_DOMAIN_BASE_URL || '/';
if (typeof window !== 'undefined') {
	const currentHost = window.location.hostname;
	
	// Check if donationBaseUrl is a valid URL before creating URL object
	let donationHost = '';
	try {
		if (donationBaseUrl && donationBaseUrl !== '/') {
			donationHost = new URL(donationBaseUrl).hostname;
		}
	} catch (error) {
		// If URL is invalid, skip the comparison
		donationHost = '';
	}

	if (donationHost && currentHost === donationHost) {
		baseUrl = process.env.DOMAIN_BASE_URL || '/';
	}
}
export const HRef = {
	hash: '#',
	home: baseUrl ? baseUrl : '/',
	login: `${baseUrl}/auth/login`,
	register: `${baseUrl}/auth/register`,
	forgetPassword: `${baseUrl}/auth/forget-password`,
	resetPassword: `${baseUrl}/auth/reset-password`,
	complaintsAndSuggestions: `${baseUrl}/complaints-and-suggestions`,
	survey: `${baseUrl}/survey`,
	introductionToTheAssociation: `${baseUrl}/about-us/introduction-to-the-association`,
	strategicDirections: `${baseUrl}/about-us/strategic-directions`,
	founders: `${baseUrl}/about-us/founders`,
	boardOfDirectors: `${baseUrl}/about-us/board-of-directors`,
	membersOfTheGeneralAssembly: `${baseUrl}/about-us/members-of-the-general-assembly`,
	executiveManagement: `${baseUrl}/about-us/executive-management`,
	regulationsAndPolicies: `${baseUrl}/about-us/regulations-and-policies`,
	standingCommittees: `${baseUrl}/about-us/standing-committees`,
	financialReports: `${baseUrl}/about-us/financial-reports`,
	operationalPlans: `${baseUrl}/about-us/operational-plans`,
	councilMeetings: `${baseUrl}/about-us/council-meetings`,
	generalAssemblyMeetings: `${baseUrl}/about-us/general-assembly-meetings`,
	volunteering: `${baseUrl}/contribute/volunteering`,
	jobs: `${baseUrl}/contribute/jobs`,
	financialDonation: `${donationBaseUrl}/contribute/financial-donation`,
	inKindDonation: `${baseUrl}/contribute/in-kind-donation`,
	advantagesForSupportingEntities: `${baseUrl}/contribute/advantages-for-supporting-entities`,
	callUs: `${baseUrl}/contact-us/call-us`,
	typesOfMembershipAndConditionsOfJoining: `${baseUrl}/contact-us/types-of-membership-and-conditions-of-joining`,
	joinTheMembership: `${baseUrl}/contact-us/join-the-membership`,
	nominateAPath: `${baseUrl}/tracks/nominate-a-path`,
	reportTrackStatus: `${baseUrl}/tracks/report-track-status`,
	technicalSpecificationsForDirectionalSigns: `${baseUrl}/tracks/technical-specifications-for-directional-signs`,
	tracksDeveloped: `${baseUrl}/tracks/tracks-developed`,
	tracks: `${baseUrl}/tracks`,
	tracksStandards: `${baseUrl}/tracks/tracks-standards`,
	saudiTrackAccreditationStandards: `${baseUrl}/tracks/saudi-track-accreditation-standards`,
	chooseAPath: `${baseUrl}/walking-trips/choose-a-path`,
	preparingForTheTripAndWhatToDo: `${baseUrl}/walking-trips/preparing-for-the-trip-and-what-to-do`,
	tourOperators: `${baseUrl}/walking-trips/tour-operators`,
	personalAccount: `${baseUrl}/profile`,
	editProfile: `${baseUrl}/profile/edit`,
	yourPreviousOrders: `${baseUrl}/profile/previous-orders`,
	yourAddresses: `${baseUrl}/profile/addresses`,
	yourPayment: `${baseUrl}/profile/payment`,
	profile: `${baseUrl}/profile`,
	membership: `${baseUrl}/membership`,
	membershipCart: `${baseUrl}/membership/membership-cart`,
	membershipPay: `${baseUrl}/membership/membership-pay`,
	products: `${baseUrl}/store/products`,
	hiking: `${baseUrl}/hiking`,
	productDetails: `${baseUrl}/store/products/details`,
	productsFavorite: `${baseUrl}/store/products/favorite`,
	orderPay: `${baseUrl}/store/products/order-pay`,
	orderSummery: `${baseUrl}/store/products/order-summery`,
	orderTrack: `${baseUrl}/store/products/order-track`,
	productCart: `${baseUrl}/store/products/cart`,
	trackOrder: `${baseUrl}/store/products/track-order`,
	trackPath: `${baseUrl}/tracks/track-details`,
	news: `${baseUrl}/media-center/news`,
	picturesLibrary: `${baseUrl}/media-center/pictures-library`,
	videosLibrary: `${baseUrl}/media-center/videos-library`,
	mediaMaterials: `${baseUrl}/media-center/media-materials`,
	importanceOfTracks: `${baseUrl}/tracks/importance-of-tracks`,
	projectsCommittee: `${baseUrl}/about-us/standing-committees`,
	certification: `${baseUrl}/about-us/certification`,
	verifyEmail: `${baseUrl}/auth/verify-email`,
	resendVerifyEmail: `${baseUrl}/auth/resend-verify-email`,
	OrganizationStructure: `${baseUrl}/about-us/organizational-chart`,
	policy: `${baseUrl}/policy`,
	settings: `${baseUrl}/settings`,
};
