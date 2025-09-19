<script>
  export let title;
  export let description;
  export let url;
  export let img;
  export let imgAlt;
</script>


<h3>{title}</h3>
<div class="project-element">

    <p>
        {description}
    </p>
        <img class="project-image" src={img} alt={imgAlt} loading="lazy" />
    <p>
       Please see a link to this project on github here: <a href="{url}">{url}</a> 
    </p>
</div>
