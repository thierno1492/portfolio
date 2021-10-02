<template>
	<div  class="container-fluid" id="app">
		<CardHeader />
		<div id="nav">
			<router-link class="root" to="/">About </router-link>
			<router-link class="root" to="/about">Projects</router-link>
				<router-link class="root" to="/deploy">production</router-link>
		</div>
		<router-view />
	</div>
</template>
<script>
	import CardHeader from "@/components/CardHeader.vue";

	export default {
		name: "Home",
		components: {
			CardHeader,
		},
	};
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	#app {
		background-image: url("./assets/home.gif");
		background-size: 100% 100%;
		font-family: 'Roboto', sans-serif;
		height: auto;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: white;
	}

	#nav {
		padding: 30px;
		background: yellow;
	}
	.root {
		font-size: 2rem;
		color: white;
		border: none;
		border-style: none;
		text-decoration: none;
		margin: 20px;
		font-family: "Koh Santepheap", cursive;
	}
@media  (max-width:664px){
.root {
		font-size: 1.3rem;
		color: white;
		border: none;
		border-style: none;
		text-decoration: none;
		margin: 20px;
	font-family: 'Roboto', sans-serif;
	}
  }

  @media  (max-width:490px){
.root {
		font-size: 1rem;
		color: white;
		border: none;
		border-style: none;
		text-decoration: none;
		margin: 20px;
		font-family: "Koh Santepheap", cursive;
	}
  }
</style>
