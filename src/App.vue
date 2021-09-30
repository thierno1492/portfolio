<template>
	<div  class="container-fluid" id="app">
		<CardHeader />
		<div id="nav">
			<router-link class="root" to="/">About Me</router-link>
			<router-link class="root" to="/about">Projects</router-link>
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
	@import url("https://fonts.googleapis.com/css2?family=Koh+Santepheap&display=swap");
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	#app {
		background-image: url("./assets/home.gif");
		background-size: 100% 100%;
		height: auto;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: white;
	}

	#nav {
		padding: 30px;
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
	/* router-link{
  background: rebeccapurple;
} */
</style>
