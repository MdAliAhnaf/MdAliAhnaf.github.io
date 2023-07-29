import {
	FaDribbble,
	FaGithub,
	FaLinkedin,
	FaRegEnvelope,
} from 'react-icons/fa';

export const GITHUB_API_URL = 'https://api.github.com';

export const GITHUB_USERNAME = 'MdAliAhnaf';

export const Companies = [
	{
		id: 1,
		institution: 'Looking for Internships',
		logo: '/assets/images/companies/intern.png',
		degree: 'Junior Software Engineer - Intern',
		startDate: 'Aug 2023',
		endDate: 'Nov 2023',
	},
];

export const Institutions = [
	{
		id: 1,
		institution: 'American International University-Bangladesh (AIUB)',
		logo: '/assets/images/institutions/aiub.svg.png',
		degree: 'Bachelor of Science, Computer Science & Engineering (CSE)',
		startDate: '2020',
		// grade: 'CGPA: 3.80 scale out of 4.00',
		endDate: 'Present',
	},
	{
		id: 2,
		institution: 'Dhaka City College (DCC)',
		logo: '/assets/images/institutions/dcc.svg.png',
		degree: 'Higher Secondary Certificate, Science',
		startDate: '2017',
		endDate: '2019',
	},
	{
		id: 3,
		institution: 'Milestone School and College',
		logo: '/assets/images/institutions/milestone_college.png',
		degree: 'Secondary School Certificate, Science',
		startDate: '2015',
		endDate: '2017',
	},
];

export const SocialMedia = [
	{
		id: 1,
		label: 'Github',
		icon: <FaGithub />,
		url: 'https://github.com/MdAliAhnaf',
	},
	{
		id: 2,
		label: 'Linkedin',
		icon: <FaLinkedin />,
		url: 'https://www.linkedin.com/in/MdAliAhnaf/',
	},
	{
		id: 3,
		label: 'Mail to Ahnaf',
		icon: <FaRegEnvelope />,
		url: 'mailto:connect.aliahnaf2012@gmail.com',
	},
];
