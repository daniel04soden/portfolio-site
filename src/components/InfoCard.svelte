<script>
const ageCalc = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
let age = ageCalc("2004-09-03") 
</script>

<main>

<div class="inner-container">
<h3>My Name is Daniel Soden!</h3>
<article class="para-border">
  <ul>
    <li>I am a {age} year old Software Development Student with a strong foundation in both hardware and operating systems, and I love diving into topics that interest me independently.</li>
    <li>My main experience is in Python, Java, and Go, and I am a dedicated fan of open-source software, running Linux on most of my machines and programming in Emacs.</li>
  </ul>
</article>
  <h3>Want to know a bit more about my professional experience?</h3>
      <article class="para-border">
    <p>Here's My Resume, take a look!</p>
    <embed src="/DanielSodenCV25.pdf" width="500" height="375">
    
      <a href="/DanielSodenCV25.pdf" download>Download Here</a>
      </article>
</div>
</main>
