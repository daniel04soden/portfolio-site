<script>
  import Header from "../components/Header.svelte";
 import BlogCard from "../components/BlogCard.svelte"
  import Footer from "../components/Footer.svelte";
 import {blogs} from "../lib/assets/blogs.js";
</script>

 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <main class="container">
     <Header title="Welcome to my blog! Have a read :)"/>
<div class="inner-container">
  <ul id="blog-list">
    {#each blogs as blog}
      <li>
     <BlogCard
         title="{blog.title}"
         snippet="{blog.snippet}"
         route="{blog.route}"
         imgSrc="{blog.imSrc}"
         imgAlt="{blog.imgAlt}"/>
      </li>
    {/each}
  </ul>
</div>
 </main>

<Footer />
