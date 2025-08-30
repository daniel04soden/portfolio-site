<script>
function toggle(){
  window.document.body.classList.toggle('light-mode')
}
</script>
<div class="navigation-home">
  <nav>
    <a href="/">Home</a>
    <a href="/projects">Projects</a>
    <a href="/blog">Blogs/Updates</a>
    <button class="toggle-button"on:click={toggle}>Dark/Light Mode</button>
  </nav>
</div>
