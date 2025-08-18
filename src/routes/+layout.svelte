<script>
import favicon from '$lib/assets/favicon.svg';
import '../styles.css'; 

</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
  <link rel="icon" href={favicon} />

</svelte:head>

<slot />

