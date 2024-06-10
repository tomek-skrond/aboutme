/** @type {import('./$types').LayoutLoad} */
export function load() {
	return {
		sections: [
			{ 
				slug: 'command-center',
				githubName: 'tomek-skrond',
				title: 'Web API that provides command line snippets',
				tags: ["Docker", "Golang", "CLI", "Web API"]
			},
			{ 
				slug: 'mcserver-automated',
				githubName: 'tomek-skrond',
				title: 'Minecraft Server Automation',
				tags: ["Ansible", "Terraform", "GCP", "Docker", "Nginx"]
			},
			{ 
				slug: 'gcp-gke-infra',
				githubName: 'tomek-skrond',
				title: 'Infrastructure + CI/CD for Web App',
				tags: ["Terraform", "Github Actions", "GCP","Golang", "Kubernetes", "CI/CD", "PostgresQL"]
			},
			{ 
				slug: 'varmigrator',
				githubName: 'tomek-skrond',
				title: 'CLI Tool for Github Actions Secret Management',
				tags: ["Golang", "Github Actions", "Web API"]
			},
			{ 
				slug: 'k8s-audit',
				githubName: 'tomek-skrond',
				title: 'Audit of GKE Cluster with performance monitoring',
				tags: ["kube-bench", "ARMO Platform", "Google Kubernetes Engine", "Kubernetes", "CIS Kubernetes Benchmark", "Prometheus", "Grafana"]
			},
			{ 
				slug: 'nixconf',
				githubName: 'tomek-skrond',
				title: 'My NixOS configuration',
				tags: ["Linux", "NixOS", "Bash", "Sysadmin"]
			},
			{ 
				slug: 'snooper',
				githubName: 'tomek-skrond',
				title: 'Snooper - System for passive data and metadata acquisition from multimedia files',
				tags: ["Linux", "Bash", "exiftool", "SQLite"]
			},
			{ 
				slug: 'kube-provisioning-scripts',
				githubName: 'tomek-skrond',
				title: 'Bash tool for provisioning Kubernetes cluster on VirtualBox',
				tags: ["Bash", "Python", "Ansible", "Vagrant", "Kubernetes", "Oracle VirtualBox"]
			},
			{
				slug: 'aboutme',
				githubName: 'tomek-skrond',
				title: 'DevOps portfolio Web Page (page you are looking on right now ;p)',
				tags: ["JavaScript", "SvelteKit", "Docker", "CI/CD", "Github Actions"]
			},
			{ 
				slug: 'docker-runner-api',
				githubName: 'tomek-skrond',
				title: 'Go API for running docker containers',
				tags: ["Golang", "Web API", "Docker", "Github Actions"]
			},
			{ 
				slug: 'beerctl',
				githubName: 'tomek-skrond',
				title: 'Beerctl - Beer browsing tool with external API',
				tags: ["Golang", "CLI"]
			},
			{
				slug: 'CRAPI',
				githubName: 'issahar987',
				title: 'Exploit Automation for OWASP crAPI',
				tags: ["Golang", "OWASP", "Penetration Testing"]
			},
			{ 
				slug: 'message-queue-demo',
				githubName: 'tomek-skrond',
				title: 'Demonstration-purpose microservice for my master\'s thesis',
				tags: ["Golang", "Docker", "Microservice Architecture"]
			},
			{ 
				slug: 'service-discovery-demo',
				githubName: 'tomek-skrond',
				title: 'Demo service discovery with api gateway for my master\'s thesis',
				tags: ["Golang", "Docker", "Microservice Architecture"]
			},
			{ 
				slug: 'microservice-threat-modeling',
				githubName: 'tomek-skrond',
				title: 'Threat Modeling tools analysis for my master\'s thesis',
				tags: ["Python", "Jupyter Notebook", "Data Analysis", "Microservice Architecture", "IriusRisk", "Microsoft Threat Modeling Tool"]
			},
		],
		alltags : [
			"Ansible",
			"ARMO Platform",
			"Bash",
			"CI/CD",
			"CIS Kubernetes Benchmark",
			"CLI",
			"Data Analysis",
			"Docker",
			"exiftool",
			"GCP",
			"Github Actions",
			"Golang",
			"Google Kubernetes Engine",
			"Grafana",
			"IriusRisk",
			"JavaScript",
			"Jupyter Notebook",
			"kube-bench",
			"Kubernetes",
			"Linux",
			"Microservice Architecture",
			"Microsoft Threat Modeling Tool",
			"Nginx",
			"NixOS",
			"Oracle VirtualBox",
			"OWASP",
			"Penetration Testing",
			"PostgresQL",
			"Prometheus",
			"Python",
			"SQLite",
			"SvelteKit",
			"Sysadmin",
			"Terraform",
			"Vagrant",
			"Web API"
		]
	};
}