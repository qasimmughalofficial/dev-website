import './globals.css';
import { Urbanist } from 'next/font/google';
import Header from './components/Header/page';
import Footer from './components/Footer/page';
import { SITE_URL } from '@/hooks/constants';

const urbanist = Urbanist({
	subsets: ['latin'],
	variable: '--font-urbanist',
});

export const metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: 'DevCritters — AI-Powered Web Design for Startups & SMEs',
		template: '%s | DevCritters',
	},
	description: 'Launch fast, mobile-friendly, AI-assisted websites that help startups & SMEs sell more. Free 15-min audit. Web development, digital strategy, and IT solutions worldwide.',
	keywords: ['web design', 'web development', 'AI websites', 'startup websites', 'SME web agency', 'Next.js development', 'WordPress development', 'digital agency', 'conversion-focused design', 'free website audit'],
	authors: [{ name: 'DevCritters', url: SITE_URL }],
	creator: 'DevCritters',
	publisher: 'DevCritters',
	icons: { icon: '/favicon.png' },
	openGraph: {
		title: 'DevCritters — AI-Powered Web Design for Startups & SMEs',
		description: 'Launch fast, mobile-friendly, AI-assisted websites that help startups & SMEs sell more. Free 15-min audit. Serving clients worldwide.',
		url: SITE_URL,
		siteName: 'DevCritters',
		images: [
			{ url: '/og-image.png', width: 1200, height: 630, alt: 'DevCritters AI-Powered Web Design & Development' },
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'DevCritters — AI-Powered Web Design for Startups & SMEs',
		description: 'Launch fast, mobile-friendly, AI-assisted websites. Free 15-min audit. Serving clients worldwide.',
		images: ['/og-image.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true },
	},
	alternates: { canonical: SITE_URL },
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				{/* SEO & AI discovery */}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#0066FF" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="referrer" content="origin-when-cross-origin" />
				{/* Allow search engines and AI crawlers to index and cite (helps GPT/AI suggest your site) */}
				<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
				<link rel="canonical" href={SITE_URL} />
				<link rel="alternate" href={SITE_URL} hrefLang="en" />

				{/* Favicons */}
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />

				{/* Structured Data: Organization + WebSite (helps search & AI suggest your site) */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@graph": [
								{
									"@type": "Organization",
									"name": "DevCritters",
									"url": SITE_URL,
									"logo": `${SITE_URL}/favicon.png`,
									"description": "AI-powered web design & development for startups & SMEs worldwide. Free 15-min audit.",
									"sameAs": [
										"https://www.linkedin.com/company/devcritters/",
										"https://www.facebook.com/devcritters",
										"https://x.com/devcritters"
									]
								},
								{
									"@type": "WebSite",
									"name": "DevCritters",
									"url": SITE_URL,
									"description": "AI-Powered Web Design for Startups & SMEs. Launch fast, sell more.",
									"publisher": { "@type": "Organization", "name": "DevCritters", "url": SITE_URL },
									"potentialAction": {
										"@type": "SearchAction",
										"target": { "@type": "EntryPoint", "urlTemplate": `${SITE_URL}/blog?q={search_term_string}` },
										"query-input": "required name=search_term_string"
									}
								}
							]
						})
					}}
				/>
			</head>
			<body className={urbanist.variable}>
				{children}
				<Footer />
			</body>
		</html>
	)
}