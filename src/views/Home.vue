<template>
	<div class="container-fluid">
		<h1>THIERNO SADIALIOU DIALLO</h1>

		<div class=" mb-5">
			<vue-swimlane
				class="text my-5"
				:words="[
					'<h3>fullstack developer</h3>',
					'<h3>Design<h3>',
					'<h3>Content creator</h3>',
					'<h3> clean code</h3>',
				]"
			></vue-swimlane>

			<div class=" foto-con">
				<img src="../assets/thierno.jpg" alt="thierno" />
			</div>
		</div>
		<div class="mystory px-1">
			<h3 class="px-5">My STORY</h3>
			<br /><br />
			<p class="p-5">
				My name is THIERNO, and in September I finished my full-stack training
				In My case after finishing my training I have a great learning in php
				and laravel framework.I also have a understanding of TDD during the
				projects we have always been working on agile methodologies.We have also
				learn OOP, Node.js, Vue.js and docker.From what refers in my experience
				in front-end before my full-stack training I did a training focused on
				front-end development that allowed me to have great knowledge in html,
				javascript and css.Right now I am doing a training focused on python and
				data structures.I have been creating an application with vue, javascript
				and laravel which has given me very in depth knowledge about javascript
				and how to use back end with front end.Right now I would be interested
				in someone giving me an opportunity to develop my career.
			</p>
		</div>
		<h3>Skils</h3>
		<div class="contain-items">
			<div class="item">
				<div>
					<img src="../assets/ski1.png" alt="" />
				</div>
				<div>
					<img src="../assets/ski2.png" alt="" />
				</div>
				<div>
					<img src="../assets/ski3.png" alt="" />
				</div>
				<div>
					<img src="../assets/ski14.png" alt="" />
				</div>
			</div>

			<div class="item">
				<div>
					<img src="../assets/ski5.png" alt="" />
				</div>
				<div>
					<img src="../assets/ski6.png" alt="" />
				</div>
				<div>
					<img src="../assets/ski7.png" alt="" />
				</div>
				<div>
					<img src="../assets/ski8.png" alt="" />
				</div>
			</div>

			<div class="item">
				<div>
					<img src="../assets/ski9.png" alt="" />
				</div>
				<div>
					<img src="../assets/ski10.png" alt="" />
				</div>
				<div>
					<img src="../assets/ski1.png" alt="" />
				</div>
				<div>
					<img src="../assets/ski12.png" alt="" />
				</div>
			</div>
			<div class="item">
				<div>
					<img src="../assets/ski13.png" alt="" />
				</div>
				<div>
					<img src="../assets/ski14.png" alt="" />
				</div>
				<div>
					<img src="../assets/ski15.png" alt="" />
				</div>
				<div>
					<img src="../assets/ski16.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	// @ is an alias to /src

	export default {
		name: "Home",
		components: {},
	};
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.contain-items {
		display: grid;
		margin-top: 10px;
		grid-template-columns: repeat(4, 1fr);
	}
	.item div img {
		margin-top: 15px;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-wrap: wrap;
		height: 81vh;
		width: 100%;
		border: 1px solid;
		margin-top: 10vh;
		justify-content: space-around;
	}
  .p-5{
    font-family: 'Roboto', sans-serif;
  }
	.text {
		color: red;
    font-family: 'Roboto', sans-serif;
	}
	h3 {
		font-size: 4rem;
    font-family: 'Roboto', sans-serif;
	}
	.foto-con {
		border-radius: 100% 100%;
	}
	img {
		height: 28vh;
		overflow: hidden;
		border-radius: 100% 100%;
		opacity: 1;
	}
	@media (max-width: 827px) {
		.contain-items {
			display: grid;
			margin-top: 10px;
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 561px) {
		.item div img {
			width: 50px;
      height: 50px;
			margin-top: 15px;
		}
	}
</style>
