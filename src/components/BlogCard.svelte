<script>
 export let title;
 export let snippet;
 export let route;
 export let imgSrc;
 export let imgAlt;
</script>

<div class ="blog-card">
<h3>{title}</h3>
<img src="{imgSrc}" alt="{imgAlt}" />
    <article>
        {snippet}
    </article>
    <a href="{route}">Read here</a>
</div>
