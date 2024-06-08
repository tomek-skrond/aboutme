<nav>
	 <div class="container">
		<h1 style="text-align:center;">Tomasz Skrond</h1>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			
			<li>
				<a href="/about">About</a>
			</li>
	
			<li>
				<a href="/skills">Skills</a>
			</li>
	
			<li>
				<a href="/projects">Projects</a>
			</li>
		</ul>
	 </div>

</nav>

<style>
	nav {
		display:flex;
		justify-content: center;
		background-color: rgb(27, 170, 170);
	}
	ul {
		display: flex;
		/* flex-direction: row; */
		margin: 0;
		font-size: 2em;
		list-style: none;
		justify-content: center;

		
	}
	li {
		margin-right: 20px;
	}
	li:hover{
		background-color:beige;
	}
	a {
		text-decoration: none;
	}
	h1 {
		margin: 0;
		font-size: 2em;
	}
	.container {
		display:flex;
		flex-direction: column;
		justify-content: center;
	}
</style>

<slot></slot>