<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5 ">
  <div class="container-fluid">
    <router-link to="./">
<img alt="logo" src="../assets/logo.png" />

    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse px-5" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Thierno</a>
        </li>
        <li class="nav-item px-5">
          <a class="nav-link" href="https://github.com/thierno1492" target="_blank"> <img src="../assets/git.png" alt=""></a>
        </li>
          <li class="nav-item">
          <a class="nav-link" href="https://github.com/thierno1492" target="_blank"> <img src="../assets/linkedin.png" alt=""></a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-5" href="#">Email: sadialioukadi@gmail.com</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>

.nav-link:hover{
  color: #FFFFFF;
background: #333333;
text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px;
color: #FFFFFF;
background: #333333;
}
img{
    width: 55px;
}
li a img{
    width: 31px;
}
.navbar{
    display: flex;
}
</style>