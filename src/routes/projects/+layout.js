/** @type {import('./$types').LayoutLoad} */
export function load() {
	return {
		sections: [
			{ 
				slug: 'command-center',
				githubName: 'tomek-skrond',
				title: 'Web API that provides command line snippets',
				tags: ["Docker","Golang","CLI","Web API"]
			},
			{ 
				slug: 'mcserver-automated',
				githubName: 'tomek-skrond',
				title: 'Minecraft Server Automation',
				tags: ["Ansible","Terraform","GCP","Docker","Nginx"]
			},
			{ 
				slug: 'gcp-gke-infra',
				githubName: 'tomek-skrond',
				title: 'Infrastructure + CI/CD for Web App',
				tags: ["Terraform","Github Actions","GCP","Golang","Kubernetes","CI/CD"]
			},
			{ 
				slug: 'varmigrator',
				githubName: 'tomek-skrond',
				title: 'CLI Tool for Github Actions Secret Management',
				tags: ["Golang","Github Actions","Web API"]
			},
			{ 
				slug: 'k8s-audit',
				githubName: 'tomek-skrond',
				title: 'Audit of GKE Cluster with performance monitoring',
				tags: ["Prometheus","Grafana","kube-bench","Google Kubernetes Engine","Kubernetes","CIS Kubernetes Benchmark"]
			},
			{ 
				slug: 'nixconf',
				githubName: 'tomek-skrond',
				title: 'My NixOS configuration',
				tags: ["Linux","NixOS","Bash","Sysadmin"]
			},
			{ 
				slug: 'snooper',
				githubName: 'tomek-skrond',
				title: 'Snooper - System for passive data and metadata acquisition from multimedia files',
				tags: ["Linux","Bash","exiftool"]
			},
			{ 
				slug: 'kube-provisioning-scripts',
				githubName: 'tomek-skrond',
				title: 'Bash tool for provisioning Kubernetes cluster on VirtualBox',
				tags: ["Bash","Python","Ansible","Vagrant","Kubernetes","Oracle VirtualBox"]
			},
			{
				slug: 'aboutme',
				githubName: 'tomek-skrond',
				title: 'DevOps portfolio Web Page (page you are looking on right now ;p)',
				tags: ["JavaScript","SvelteKit","Docker"]
			},
			{ 
				slug: 'docker-runner-api',
				githubName: 'tomek-skrond',
				title: 'Go API for running docker containers',
				tags: ["Golang","Web API","Docker","Github Actions"]
			},
			{ 
				slug: 'beerctl',
				githubName: 'tomek-skrond',
				title: 'Beerctl - Beer browsing tool with external API',
				tags: ["Golang","CLI"]
			},
			{
				slug: 'CRAPI',
				githubName: 'issahar987',
				title: 'Exploit Automation for OWASP crAPI',
				tags: ["Golang","OWASP","Penetration Testing"]
			},

		]
	};
}