<template>


<div class = "presentation">

<div class="presentation-container">
  <div class="presentation-image">
    <img src="../assets/logo.png" alt="logo" />
  </div> 
  <div class="presentation-text">
      <h1 class="display-1"><span class="myname">Matthieu SEGUI - M2 Creative Technologist</span>
      </h1>
      <p class="text-muted"> Hi I'm Matthieu, a 21 years old french student in 
        M2 Creative Technologist at the <a class="links" href="https://dvic.devinci.fr/" >DVIC</a>.
      </p>
      <p class="text-muted">
        I'm currently working on the Internet of Plants.
        The Internet Of Plants (IOP) is a project that aims to redefine our interaction with plants.
        The plant is transformed into a living sensor that we can interact with.
      </p>
      <button class="btn btn-primary btn-lg iop-btn" type="submit" @click="redirectToProject">My Projects</button>
      <!-- <p class="lead">I'm a web developer</p> -->
  </div>
    </div>
  </div> 

</template>

<script>
    export default {
        name: 'MyHomepage',
        methods: {
          data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        redirectToProject() {
            window.location.href = "https://matthieu-sgi.github.io/IoP/";
        }
        },
        
    }


</script>

<style >

.presentation {
  /* change the police to something fancy */
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(100deg, #1a1818 0%, #1a1818 50%, rgba(233, 229, 229, 0.404) 50.0%,rgba(233, 229, 229, 0.404) 100%);
  z-index: -1;
  /* backdrop-filter: blur(30px); Adjust the blur intensity as needed */
}

.presentation-container{
  display: flex;
  height: calc(100vh - 60px); /* Adjust this value to account for the navbar height */
  align-items: center;
}

.presentation-image {
  flex: 1;
  padding: 20px;
  max-width: 100%;
  height: auto;
}

/* img {

} */

.presentation-text {
  flex: 1;
  padding: 20px;
  /* put the text size to 14 */

  font-size: 25px;
  margin-bottom: 20px;
}

.myname {
  color: #22201f;
  /* bold */
  font-weight: 700;
  /* add spacing before next element */
  margin-bottom: 30px;
}
.links {
  color: #22201f;
  text-decoration: none;
  /* add spacing before next element */
  margin-bottom: 30px;
}

.links:hover{
  color: #332f2d36;
  text-decoration: none;
  /* add spacing before next element */
  margin-bottom: 30px;
  /* add fading */
  transition: 0.3s;
}
.iop-btn{
  /* box color black */
  background-color: #1a1818 !important;
  /* color: #1a1818; */
  /* black border */
  border-color: #1a1818 !important;
}

.iop-btn:hover{
  /* box color black */
  background-color: #2c28289a !important;
  /* color: #1a1818; */
  /* add fading */
  transition: 0.3s;
}

</style>