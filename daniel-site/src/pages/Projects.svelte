<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import ProjectSample from "../components/ProjectSample.svelte";
        import projects from "../lib/projects.json";
</script>
<main class="container">
    <Header />
    <ol>
        {#each projects as project}
        <li>
    <ProjectSample title={project.title} url={project.url} description = {project.desc}></ProjectSample>
        </li>
        {/each}
    </ol>
    <Footer />
</main>