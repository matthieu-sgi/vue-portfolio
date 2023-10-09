<template>
    <div class="about-me">
      <div class="hero">
        <!-- Top Image -->
        <img src="/me/banner.jpeg" alt="Raspberry pi image" class="top-image" />
      </div>
      <div class="content">
        <div class="container">
          <h1>About Me</h1>
          <p>
            Hi I'm Matthieu, a 21 years old french student in M2 Creative Technologist at the
            <a class="link" href="https://dvic.devinci.fr/">DVIC</a>. 
          </p>
          <p>
            I'm currently working on the <a class="link" href="https://github.com/matthieu-sgi/Internet-of-Plants">Internet of Plants</a>. 
            The Internet Of Plants (IOP) is a project that aims to redefine our interaction with plants. 
            The plant is transformed into a living sensor that we can interact with.
             The data retrieved from the plant is sonificated and broadcasted on speakers.
          </p>

          <p>
            The IOP is composed of a stand alone electronic device embedding a micro-controller, a speaker and an electronic filter. 
            The electronic filter is used to capture the touch interaction with the plant. 
            The micro-controller generates a simple sound signal that is outputted on the speaker.
          </p>

          <p>
            <b><strong>Why Internet ?</strong></b> The micro-controller chose is an ESP32 that has wireless capabilities. 
            Stand alone devices spread around a room can be connected to a master server. 
            The devices send their data and using a sonification software such as <a class = "link" href="https://cycling74.com/products/max">MAX</a>, we can produce a high quality sound. 
            The output of this architecture is a distributed, interconnected and interactive musical instrument.

          </p>

          <p>Outside of this project, on a personal level, I'm interested in network, embedded system and IT.</p>


        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMe',
  };
  </script>
  
  <style scoped>
  .about-me {
    background: linear-gradient(rgba(26, 24, 24, 0.9), rgba(26, 24, 24, 0.9));
    color: white;
    padding: 0;
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    flex-direction: column; /* Center content vertically */
  }
  
  .hero {
    position: relative;
    overflow: hidden;
  }
  
  .top-image {
    width: 50%;
    max-height: 300px; /* Adjust the height as needed */
    object-fit: cover;
    object-position: center;
    padding: 20px 0px 0px 0px;
    border-radius: 40px 40px 40px 40px; /* Add rounded corners only to the top */
  }
  
  .content {
    flex-grow: 1; /* Fill available vertical space */
    padding: 20px 0; /* Adjust the padding for better spacing */
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  .project {
    margin-bottom: 20px;
  }
  
  .project h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .link {
  color: #fff; /* Bright white text color */
  text-decoration: underline; /* Add underline to the link */
  font-weight: 600; /* Make the text a bit bold */
  transition: color 0.3s ease; /* Add a smooth color transition on hover */
}

.link:hover {
  color: #f0f0f0; /* Slightly brighter white on hover */
}

.link:visited {
  color: #ccc; /* Define a color for visited links */
}

.link:focus {
  outline: none; /* Remove focus outline for accessibility */
}

.link:active {
  color: #ff0000; /* Change the text color when the link is active (clicked) */
}

  </style>
  