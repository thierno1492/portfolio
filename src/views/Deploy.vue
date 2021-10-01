<template>
	<div class="container-fluid ">
		<div class="contain-items">
			<div class="contain-img ">
				<img src="../assets/mood.png" alt="" />
			</div>
			<div class="contain-btn "><a href="#" class="myButton">Demo</a></div>
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
.container-fluid{
    width: 100%;
    height: 100vh;
    margin-top: 11vh;
}

.contain-items{
    background: #c2b8c2;
        display: flex;
        height: auto;
        width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.contain-img{
   width: 19%;
height: 45vh;
}
.contain-img img{
       width: 87%;
    margin-top: 16px;
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
</style>
