<script>
const ageCalc = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
let age = ageCalc("2004-09-03") 
</script>

<main>

<div class="inner-container">
<h3>My Name is Daniel Soden!</h3>
  <article class="para-border">
    <ul>
    <li>I'm a {age} year old software development student and technology enthusiast with a strong foundation in both hardware and programming.</li>
    <li>I love toying around with different languages,frameworks, technologies and tech in general</li>
    <li>My main experience is in python, java and Golang with a bit of Svelte learned for this very project</li>
    <li>I am also a massive open source software fan, most of my machines run Linux and I do all my programming in Emacs</li>
    </ul>
  </article>
  <h3>Want to know a bit more about my professional experience?</h3>
      <article class="para-border">
    <p>Here's My Resume, take a look!</p>
    <embed src="./src/components/DanielSodenCV25.pdf#toolbar=0" width="500" height="375">
      <a href="./src/components/DanielSodenCV25.pdf" download>Download Here</a>
      </article>
</div>
</main>
