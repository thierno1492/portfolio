<template>
	<div class="container-fluid ">
		<div class="contain-items">
			<div class="contain-img ">
				<img src="../assets/mood.png" alt="" />
			</div>
			<div class="contain-btn ">
				<a
					href="http://moods-nous-cims.herokuapp.com/"
					class="myButton"
					target="_blank"
					>Demo</a
				>
			</div>
		</div>

		<div class="contain-items">
			<div class="contain-img ">
				<img src="../assets/crypto.png" alt="" />
			</div>
			<div class="contain-btn ">
				<a
					href="https://thierno-cryrpto-exchange.netlify.app/"
					target="_blank"
					class="myButton"
					>Demo</a
				>
			</div>
		</div>

		<div class="contain-items">
			<div class="contain-img ">
				<img src="../assets/consultorio.png" alt="" />
			</div>
			<div class="contain-btn ">
				<a
					href="https://f5-appointment-app.herokuapp.com/"
					target="_blank"
					class="myButton"
					>Demo</a
				>
			</div>
		</div>
		<div class="contain-items">
			<div class="contain-img ">
				<img src="../assets/wheel.png" alt="" />
			</div>
			<div class="contain-btn ">
				<a
					href="https://armun4.github.io/Wheel-Of-Doom/"
					target="_blank"
					class="myButton"
					>Demo</a
				>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Deploy",
		components: {},
	};
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.container-fluid {
		width: 100%;
		height: auto;
		margin-top: 11vh;
	}

	.contain-items {
		background: rgb(238, 174, 202);
		background: radial-gradient(
			circle,
			rgba(238, 174, 202, 1) 0%,
			rgba(148, 187, 233, 1) 100%
		);
		display: flex;
		height: auto;
		width: 100%;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.contain-img {
		width: 19%;
		height: 47vh;
	}
	.contain-img img {
		width: 58%;
		margin-top: 21px;
	}

	.myButton {
		box-shadow: 3px 4px 0px 0px #899599;
		background: linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
		background-color: #ededed;
		border-radius: 15px;
		border: 1px solid #d6bcd6;
		display: inline-block;
		cursor: pointer;
		color: #3a8a9e;
		font-family: Arial;
		font-size: 17px;
		padding: 7px 25px;
		text-decoration: none;
		text-shadow: 0px 1px 0px #e1e2ed;
	}
	.myButton:hover {
		background: linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
		background-color: #bab1ba;
	}
	.myButton:active {
		position: relative;
		top: 1px;
	}

	@media (max-width: 704px) {
		.contain-img {
			width: 30%;
			height: 47vh;
		}
		.contain-img img {
			width: 58%;
			margin-top: 21px;
		}
	}
</style>
