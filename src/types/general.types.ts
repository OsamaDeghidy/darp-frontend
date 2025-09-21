export interface HomePageProps {
	total: number;
	items: HomePage;
}
interface Page {
	contentType: string;
	name: string;
	createDate: string;
	updateDate: string;
	route: Route;
	id: string;
	cultures: Cultures;
}
export interface HomePage extends Page{
	properties: HomePageProperties;
}
export interface AboutPage extends Page{
	properties: AboutUsProperties;
}
export interface ExecutivePage extends Page{
	properties: ExecutiveManagerProperties;
}
interface Cultures {
	'en-us': Route;
	'ar-sa': Route;
}
interface HomePageProperties {
	footerContent: string;
	footerSocialLinks: FooterSocialLink[];
	headerSocialLinks: FooterSocialLink[];
	heroMainTitle: string;
	heroImage: Image[];
	whyWalkingTracksTitle: string;
	psychologicalHealthBenefits: string;
	physicalHealth: string;
	economicBenefits: string;
	benefitsForNationalTourism: string;
	walkingTracksMapTitle: string;
	tracksSummaries: string[];
	mainTargetTitle: string;
	achievementComponent: AchievementComponent;
	video: FooterSocialLink[];
	latestNews: LatestNews;
	tweetsTitleSection: string;
	tweets: FooterSocialLink[];
	whyWalkingTracksCards: IWhyCardItems;
	title: string;
	content: string;
	appImage: IImage[];
	appUrl: IUrl[];
}
interface LatestNews {
	items: Item2[];
}
interface Item2 {
	content: Content2;
	settings?: any;
}
interface Content2 {
	contentType: string;
	id: string;
	properties: Properties3;
}
interface Properties3 {
	newsElement: NewsElement;
}
interface NewsElement {
	contentType: string;
	name: string;
	createDate: string;
	updateDate: string;
	route: Route;
	id: string;
	properties: HomePageProperties;
}
export interface AchievementComponent {
	items: AchievementItem[];
}
export interface AchievementItem {
	content: AchievementItemContent;
	settings?: any;
}
interface AchievementItemContent {
	contentType: string;
	id: string;
	properties: AchievementItemCard;
}
export interface AchievementItemCard {
	targetTitle: string;
	targetNumber: string;
}
interface Image {
	focalPoint?: any;
	crops: any[];
	id: string;
	name: string;
	mediaType: string;
	url: string;
	extension: string;
	width: number;
	height: number;
	bytes: number;
	properties: HomePageProperties;
}
interface FooterSocialLink {
	network: string;
	name: string;
	url: string;
}
export interface IUrl {
	destinationId:null;
	destinationType:null;
	linkType: string;
	queryString:null;
	route:null;
	target:null;
	title: string;
	url: string;
}
interface Route {
	path: string;
	startItem: StartItem;
}
interface StartItem {
	id: string;
	path: string;
}

export interface IImage {
	bytes: number;
	crops: any[];
	extension: string;
	focalPoint: null;
	height: null;
	id: string;
	name: string;
	mediaType: string;
	url: string;
	width: null;
	properties: {};
}

export interface IWhyCardProperties {
	title: string;
	content: string;
	svg: IImage[];
}

interface IWhyCardContent {
	contentType: string;
	id: string;
	properties: IWhyCardProperties;
}

export interface IWhyCardItem {
	content: IWhyCardContent;
	settings: null;
}

interface IWhyCardItems {
	items: IWhyCardItem[];
}


export interface ITracks {
	tracks: ITrack[]
}
export interface ITrack {
	description: string,
	icon: string,
	name: string,
	0: {
		value: ITrackMarker[];
	}
}
interface ITrackMarker {
	Latitude: string,
	Longitude: string,
	Elevation: string,
	Time: string
}
export interface AboutUsProperties {
	messageImage: Image[];
	messageContent: string;
	heroMainImage: Image[];
	visionImage: Image[];
	visionContent: string;
	title: string;
	introductionImagesList: Image[];
	content: string;
	valuesImage: Image[];
	valuesContent: string;
	valuesPointsContent: string;
}
export interface ExecutiveManagerProperties {
	executiveManagerName: string;
	executiveManagerImage: Image[];
	executiveManagerEmail: string;
	executiveManagerDescription: string;
}