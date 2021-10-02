<template>
    <div class="container-fluid">
        <h1>Featured Projects</h1>
 
        <Cards class="mb-5" />


        <div class="card">

</div>
    </div>
</template>
<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	h1{
	
		font-family: 'Roboto', sans-serif;
	
	}

	h1:hover{
font-family: 'Roboto', sans-serif;
color: #FFFFFF;
background: #FFFFFF;
text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;
color: #FFFFFF;
background: #FFFFFF;
	}

</style>


<script>

import Cards from "@/components/Cards.vue";

	export default {
		name: "Home",
		components: {
			Cards,
		},
	};
</script>


