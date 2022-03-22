import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Features, { FeaturesProps } from '@site/src/components/Home/Features';
import AdditionalFeatures from '@site/src/components/Home/AdditionalFeatures';
import {
	faFingerprint,
	faCloudArrowUp,
	faMicrochip,
	faToolbox,
	faDiagramProject,
	faRectangleBarcode,
	faGridHorizontal,
	faGridDividers,
	faSitemap,
	faMerge,
	faDiagramSankey,
	faShieldHalved,
	faArrowUpRightDots,
	faMessageCode,
	faBellOn,
	faUserSecret,
	faAperture,
	faChartTreeMap,
	faSlidersUp,
	faCircleBolt,
	faBoxAlt,
} from '@fortawesome/pro-duotone-svg-icons';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const managementFeatures: FeaturesProps['features'] = [
	{
		title: 'Smart hashing',
		icon: faFingerprint,
		description:
			'Collects inputs from multiple sources to ensure builds are deterministic and reproducible.',
		status: 'in-development',
	},
	{
		title: 'Remote caching',
		icon: faCloudArrowUp,
		description: 'Persists builds, hashes, and caches between teammates and CI/CD environments.',
		status: 'coming-soon',
	},
	{
		title: 'Integrated toolchain',
		icon: faToolbox,
		description:
			'Automatically downloads and installs explicit versions of Node.js and other tools for consistency.',
	},
	{
		title: 'Multi-platform',
		icon: faMicrochip,
		description: 'Runs on common development platforms: Linux, MacOS, and Windows.',
	},
];

const organizationFeatures: FeaturesProps['features'] = [
	{
		title: 'Project graph',
		icon: faDiagramProject,
		description: 'Generates a project graph for dependency and dependent relationships.',
	},
	{
		title: 'Project boundaries',
		icon: faGridHorizontal,
		description: 'Enforces boundaries to eliminate cycles and reduce indirection.',
	},
	{
		title: 'Dependency workspaces',
		icon: faGridDividers,
		description:
			'Works alongside package manager workspaces so that projects have distinct dependency trees.',
	},
	{
		title: 'Ownership metadata',
		icon: faRectangleBarcode,
		description:
			'Declare an owner, maintainers, support channels, and more, via LDAP or another integration.',
	},
];

const orchestrationFeatures: FeaturesProps['features'] = [
	{
		title: 'Dependency graph',
		icon: faSitemap,
		description: 'Generates a dependency graph to increase performance and reduce workloads.',
	},
	{
		title: 'Task runner',
		icon: faMerge,
		description:
			'Executes tasks in parallel and in order using a thread pool and our dependency graph.',
	},
	{
		title: 'Task distribution',
		icon: faDiagramSankey,
		description: 'Distributes tasks across multiple machines to increase throughput.',
		status: 'coming-soon',
	},
	{
		title: 'Incremental builds',
		icon: faArrowUpRightDots,
		description:
			'With our smart hashing, only rebuild projects that have been touched since the last build.',
		status: 'in-development',
	},
];

const notificationFeatures: FeaturesProps['features'] = [
	{
		title: 'Flakiness detection',
		icon: faShieldHalved,
		description: 'Reduce flaky builds with automatic retries and passthrough settings.',
		status: 'experimental',
	},
	{
		title: 'Webhook events',
		icon: faMessageCode,
		description: 'Receive a webhook for every event in the pipeline. Useful for metrics gathering.',
		status: 'coming-soon',
	},
	{
		title: 'Terminal notifications',
		icon: faBellOn,
		description:
			'Receives notifications in your chosen terminal when builds are successful... or not.',
		status: 'coming-soon',
	},
];

const additionalFeatures: FeaturesProps['features'] = [
	{
		title: 'Configuration, not convention',
		icon: faSlidersUp,
		description: 'Use Moon the way you and your company want.',
	},
	{
		title: 'Scalability aware',
		icon: faCircleBolt,
		description: 'Engineered to scale and grow for codebases of any size.',
	},
	{
		title: 'Integrated packages',
		icon: faBoxAlt,
		description: (
			<>
				Enhance your pipeline with our{' '}
				<Link href="https://www.npmjs.com/org/moonrepo">@moonrepo</Link> npm packages.
			</>
		),
		status: 'in-development',
	},
	{
		title: 'Node.js inspection',
		icon: faUserSecret,
		description: 'Inspect and debug failing Node.js processes.',
		status: 'coming-soon',
	},
	{
		title: 'Build profiles',
		icon: faAperture,
		description: 'Generate build profiles that can be reviewed in Chrome.',
		status: 'coming-soon',
	},
	{
		title: 'Editor extensions',
		icon: faChartTreeMap,
		description: 'Utilize Moon extensions in your favorite editor.',
		status: 'coming-soon',
	},
];

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/intro">
						Docusaurus Tutorial - 5min ⏱️
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<HomepageHeader />

			<main>
				<Features
					header="Management"
					description="Work more, manage and debug less"
					features={managementFeatures}
				/>

				<Features
					header="Organization"
					description="Architect a repository to scale"
					features={organizationFeatures}
				/>

				<Features
					header="Orchestration"
					description="Offload your heavy tasks"
					features={orchestrationFeatures}
				/>

				<Features
					header="Notification"
					description="Be notified of pipeline health"
					features={notificationFeatures}
					columns={3}
				/>

				<AdditionalFeatures
					header="And many more features"
					description="To provide an amazing developer and maintainer experience!"
					features={additionalFeatures}
				/>
			</main>
		</Layout>
	);
}
