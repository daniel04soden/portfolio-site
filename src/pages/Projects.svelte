<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import ProjectSample from "../components/ProjectSample.svelte";
  import projects from "../lib/assets/projects.json"

</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<main class="container">
<Header>
</Header>
<div class="inner-container">
  <ol>
    {#each projects as project}
      <li>
        <ProjectSample
          title={project.title}
          description={project.desc}
          url={project.url}
        />
      </li>
    {/each}
  </ol>
<Footer></Footer>
</div>
</main>
