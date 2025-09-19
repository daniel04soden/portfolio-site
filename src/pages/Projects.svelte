<script>
 import Header from "../components/Header.svelte";
 import Footer from "../components/Footer.svelte";
 import ProjectSample from "../components/ProjectSample.svelte";
 import {projects} from "../lib/assets/projects.js"
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<main class="container">
  <Header title="Take a look at some of my Projects!"/>
  <div class="inner-container">
    <ol>
      {#each projects as project}
        <li>
          <ProjectSample
            title={project.title}
            description={project.desc}
            url={project.url}
            img={project.img}
            imgAlt={project.imgAlt}/>
        </li>
      {/each}
    </ol>
  </div>
</main>
<Footer/>
