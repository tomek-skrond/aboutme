/** @type {import('./$types').LayoutLoad} */
export function load() {
	return {
		sections: [
			{ 
				slug: 'command-center',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'Web API that provides command line snippets',
				tags: ["Docker", "Golang", "CLI", "Web API", "Linux"]
			},
			{ 
				slug: 'mcserver-automated',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'Minecraft Server Automation',
				tags: ["Ansible", "Terraform", "GCP", "Docker", "Nginx", "Linux"]
			},
			{ 
				slug: 'gcp-gke-infra',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'Infrastructure + CI/CD for Recipes Web App',
				tags: ["Terraform", "Github Actions", "GCP", "Golang", "Kubernetes", "Google Kubernetes Engine", "CI/CD", "PostgresQL", "Linux"]
			},
			{ 
				slug: 'varmigrator',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'CLI Tool for Github Actions Secret Management',
				tags: ["Golang", "Github Actions", "Web API"]
			},
			{ 
				slug: 'k8s-audit',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'Audit of GKE Cluster with performance monitoring',
				tags: ["kube-bench", "ARMO Platform", "Google Kubernetes Engine", "Kubernetes", "CIS Kubernetes Benchmark", "Prometheus", "Grafana"]
			},
			{ 
				slug: 'nixconf',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'My NixOS configuration',
				tags: ["Linux", "NixOS", "Bash", "Sysadmin"]
			},
			{ 
				slug: 'snooper',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'Snooper - System for passive data and metadata acquisition from multimedia files',
				tags: ["Linux", "Bash", "exiftool", "SQLite"]
			},
			{ 
				slug: 'kube-provisioning-scripts',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'Bash tool for provisioning Kubernetes cluster on VirtualBox',
				tags: ["Linux", "Bash", "Python", "Ansible", "Vagrant", "Kubernetes", "Oracle VirtualBox"]
			},
			{
				slug: 'aboutme',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'DevOps portfolio Web Page (page you are looking on right now ;p)',
				tags: ["JavaScript", "SvelteKit", "Docker", "CI/CD", "Github Actions"]
			},
			{ 
				slug: 'docker-runner-api',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'Go API for running docker containers',
				tags: ["Golang", "Web API", "Docker", "Github Actions", "Linux"]
			},
			{ 
				slug: 'beerctl',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'Beerctl - Beer browsing tool with external API',
				tags: ["Golang", "CLI"]
			},
			{
				slug: 'CRAPI',
				platform: "github.com",
				githubName: 'issahar987',
				title: 'Exploit Automation for OWASP crAPI',
				tags: ["Golang", "OWASP", "Penetration Testing"]
			},
			{ 
				slug: 'message-queue-demo',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'Demonstration-purpose microservice for my master\'s thesis',
				tags: ["Golang", "Docker", "Microservice Architecture"]
			},
			{ 
				slug: 'service-discovery-demo',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'Demo service discovery with api gateway for my master\'s thesis',
				tags: ["Golang", "Docker", "Microservice Architecture"]
			},
			{ 
				slug: 'microservice-threat-modeling',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'Threat Modeling tools analysis for my master\'s thesis',
				tags: ["Python", "Jupyter Notebook", "Data Analysis", "Microservice Architecture", "IriusRisk", "Microsoft Threat Modeling Tool"]
			},
			{ 
				slug: 'recipe-app',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'A small web application for creating and storing food recipes',
				tags: ["Web API", "Golang", "Docker", "CI/CD", "Github Actions"]
			},
			{ 
				slug: 'recipe-app-manifests',
				platform: "github.com",
				githubName: 'tomek-skrond',
				title: 'Manifests for deploying recipe-app to GKE cluster',
				tags: ["Kubernetes", "Google Kubernetes Engine", "ArgoCD", "Terraform", "CI/CD", "Github Actions"]
			},
			{ 
				slug: 'zbi-infra',
				platform: "gitlab.com",
				githubName: 'bobak-corp',
				title: 'Infrastructure project for Flask App',
				tags: ["Terraform", "GCP", "Gitlab CI", "CI/CD"]
			},
			{ 
				slug: 'zbi',
				platform: "gitlab.com",
				githubName: 'bobak-corp',
				title: 'Demo Flask app for test deployments',
				tags: ["Python", "Flask", "Web API", "Docker", "Gitlab CI", "CI/CD"]
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
			"Web API",
			"Flask",
			"Gitlab CI"
		]
	};
}