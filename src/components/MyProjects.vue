<template>
  <section class="projects-section">
    <div class="title-box">
      <h2 class="section-title">Projects</h2>
    </div>
    <div class="projects-container">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <img :src="project.image" alt="Project Image" class="project-image">
        <div class="project-details">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <a :href="project.link" class="project-link" target="_blank">View Project</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyProjects",
  data() {
    return {
      projects: [
        {
          id: 0,
          title: "Internet of Plants",
          description: "The Internet Of Plants (IOP) is a project that aims to redefine our interaction with plants. The plant is transformed into a living sensor that we can interact with.",
          image: "https://github.com/matthieu-sgi/Internet-of-Plants/blob/main/media/3D_view_front.png?raw=true",
          link: "https://github.com/matthieu-sgi/Internet-of-Plants"
        },
        {
          id: 1,
          title: "DVIC demo monitoring",
          description: "A project of a micro-service architecture for monitoring the demo of my innovation center",
          image: "/projects/dvic_demo_monitoring.png",
          link: "https://github.com/matthieu-sgi/DVIC_Demo_Monitoring.png"
        },
        {
          id: 2,
          title: "Machine learning robot",
          description: "The project is an OpenSource machine learning robot that learns to race in a track",
          image: "https://github.com/matthieu-sgi/machine_learning_robot/raw/main/media/3D_view_back.png",
          link: "https://github.com/matthieu-sgi/machine_learning_robot"
        },
        // Add more projects as needed
      ]
    };
  }
};
</script>

<style scoped>
.projects-section {
  background-color: #1a1818; /* Black background */
  color: #fff; /* White text */
  padding: 40px;
  text-align: center;
  background-attachment: fixed;
  min-height: 100vh; /* Ensure the section takes up at least the full viewport height */
  display: flex;
  flex-direction: column; /* Ensure child elements stack vertically */
  align-items: center; /* Center content vertically */
}

.section-title {
  font-size: 40px;
  /* margin-bottom: 30px; */
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project-card {
  background-color: #fff; /* White project card */
  color: #000; /* Black text */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 20px;
  max-width: 300px;
  overflow: hidden;
}

.project-image {
  max-width: 100%;
  height: auto;
  /* width: 100%; Set a fixed width to ensure all images have the same size */
  /* max-height: 300px; Set a max height to prevent oversized images */
}

.project-details {
  padding: 20px;
}

.project-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.project-description {
  font-size: 14px;
  margin-bottom: 15px;
}

.project-link {
  display: block;
  font-size: 16px;
  color: #000; /* Black link text */
  text-decoration: none;
  transition: color 0.3s;
}

.project-link:hover {
  color: #555; /* Dark gray link text on hover */
}
</style>
