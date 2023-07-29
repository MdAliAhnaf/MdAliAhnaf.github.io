import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta = ({
	name,
	image,
	siteUrl,
	keywords,
	description,
	twitterHandle,
	googleVerification,
}) => {
	const routerPath =
		useRouter().pathname.replaceAll('/', '').charAt(0).toUpperCase() +
		useRouter().pathname.replaceAll('/', '').slice(1);
	const pageTitle =
		routerPath === ''
			? 'Md. Ali Ahnaf | Back-End Developer'
			: routerPath + ' | Md. Ali Ahnaf';
	return (
		<Head>
			{/* Settings */}
			{/* <meta charset='utf-8' /> */}
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='referrer' content='origin' />
			<link href='/manifest.json' rel='manifest' />
			<meta name='page-type' content='Portfolio' />
			<meta name='audience' content='Everyone' />
			<meta name='color-scheme' content='only dark' />
			<meta name='theme-color' content='#1A1F2A' />

			{/* Search Engine */}
			<meta name='robots' content='index, follow' />
			<meta name='googlebot' content='index, follow' />
			<meta name='google-site-verification' content={googleVerification} />

			{/* Page Information */}
			<title>{pageTitle}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
			<meta name='copyright' content={name} />
			<meta name='author' content={name} />
			<meta name='publisher' content={name} />

			{/* Schema.org Microdata */}
			<meta itemProp='name' content={pageTitle} />
			<meta itemProp='description' content={description} />
			<meta itemProp='image' content={image} />

			{/* Facebook / OpenGraph  */}
			<meta property='og:title' content={pageTitle} />
			<meta property='og:type' content='website' />
			<meta property='og:url' content={siteUrl} />
			<meta property='og:site_name' content={name} />
			<meta property='og:image' content={image} />
			<meta property='og:description' content={description} />

			{/* Twitter */}
			<meta property='twitter:card' content='summary' />
			<meta property='twitter:site' content={twitterHandle} />
			<meta name='twitter:creator' content={twitterHandle} />
			<meta property='twitter:url' content={siteUrl} />
			<meta name='twitter:title' value={pageTitle} />
			<meta name='twitter:description' value={description} />
			<meta name='twitter:image' value={image} />
		</Head>
	);
};

Meta.defaultProps = {
	keywords:
		'ahnaf, ahnaf aiub, Md. Ali Ahnaf, Ahnaf website, Ahnaf bd, Ahnaf portfolio',
	description:
		'Md. Ali Ahnaf is a Computer Vision Engineer & Back-End web developer based in Dhaka, Bangladesh',
	image: 'https://mdaliahnaf.github.io/assets/images/icons/icon-565x565.png/assets/images/icons/icon-565x565.png',
	twitterHandle: '@twilightggwp',
	siteUrl: 'https://mdaliahnaf.github.io/',
	name: 'Md. Ali Ahnaf',
	// googleVerification: 'uomAFBUP56GraXFbmGjgWuKXOQUGdMpUqPDt3YreMYE',
};
export default Meta;
