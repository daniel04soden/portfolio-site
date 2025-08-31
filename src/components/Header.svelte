<script>
import dan from '$lib/assets/dan.jpeg'
import Navigation from './navigation.svelte';
 export let title;
</script>


<header>
  <div>
    <h1>Who am I?</h1>
    <img src={dan} alt="Daniel Soden Smiling in a white shirt">
    <div class="typing">
    <h2>{title}</h2>
  </div>
</div>
</header>
  <Navigation>
  </Navigation>
