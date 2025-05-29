<script>
	import "../app.css";
	import { onMount } from 'svelte'; // Import onMount from svelte
	import { page } from '$app/stores';
	
	let currentRoute = '';

	onMount(() => {
		$page.subscribe(({ url }) => {
			currentRoute = url.pathname;
		});
	});
</script>

<div class="pb-16 sm:pb-48">
	<nav style="margin:0;" class="shadow-2xl w-100 px-8 md:px-auto">
		<div class="sm:h-28 h-36 mx-auto flex items-center justify-center sm:justify-between flex-wrap gap-4">

			<div class="self-center text-2xl box-decoration-clone bg-gradient-to-r from-slate-800 bg-indigo-600 text-white px-2 sm:px-4">
				<a href="/">Tomasz Skrond</a>
			</div>
			<div class="self-center text-gray-300 order-3 w-full md:w-auto md:order-2">
				<ul class="flex font-semibold justify-between">
					<!-- Active Link = text-indigo-500
					Inactive Link = hover:text-indigo-500 -->
					<li class="md:px-4 hover:text-indigo-400">
						<a href="/" class="nav-link {currentRoute === '/' ? 'active' : ''}">Home</a>
					</li>
					<li class="md:px-4 hover:text-indigo-400">
						<a href="/about" class="nav-link {currentRoute === '/about' ? 'active' : ''}">About</a>
					</li>
					<li class="md:px-4 hover:text-indigo-400">
						<a href="/projects" class="nav-link {currentRoute === '/projects' ? 'active' : ''}">Projects</a>
					</li>
					<li class="md:px-4 hover:text-indigo-400">
						<a href="/hobby" class="nav-link {currentRoute === '/hobby' ? 'active' : ''}">Hobby</a>
					</li>
					<!-- <li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li> -->
				</ul>
			</div>
			<div class="self-center order-2 md:order-3">
				<form method="POST" action="mailto: tomek.skrond@gmail.com" enctype="text/plain">
					<button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
						<!-- Heroicons - Login Solid -->
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
						<span>Let's connect!</span>
					</button>
				</form>
			</div>
		</div>
	</nav>
</div>


<slot></slot>



<footer style="box-shadow: 0 -10px 20px -5px rgb(0 0 0 / 0.25);" class="fixed bottom-0 left-0 z-20 w-full p-4">
    <div class="flex flex-row items-center justify-center p-3 mx-auto space-y-4 sm:space-y-0">
		<p>Check out my socials:</p>
		<a href="https://github.com/tomek-skrond" class="container flex flex-col items-center justify-center">
			<p>GitHub</p>
			<img  src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="">
		</a>
		<a href="https://www.linkedin.com/in/tomasz-skrond-4116261b6/" class="container flex flex-col items-center justify-center">
			<p>LinkedIn</p>
			<img  src="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" alt="">
		</a>
		<a href="https://on.soundcloud.com/pJWH1xnLHY1KMswX7" class="container flex flex-col items-center justify-center">
			<p>Soundcloud</p>
			<img id="sd" src="https://imgs.search.brave.com/R2UtTSNkivtaZ1IQi7zMg9ZZrZ352WMvBFcGOKbzge4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mzcu/cG5n" alt="">
		</a>
    </div>
</footer>

<style>
	img{
		width: 30px;
		height: 30px;
	}
	p {
		font-size: 10px;
	}
	img#sd {
		width:50px;
	}
</style>
