<script>
const ageCalc = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
let age = ageCalc("2004-09-03") 
</script>

<main>

<h3>My Name is Daniel Soden!</h3>
  <article class="para-border">
    <ul>
    <li>Hi, I’m Daniel Soden. A {age} year old software development student and technology enthusiast with a strong foundation in both hardware and programming.</li>
    <li>My passion lies in developing full stack web and desktop applications in a large variety of languages like Ruby, Go and Java</li>
    <li>I love toying around with different languages,frameworks, technologies and tech in general</li>
    </ul>
  </article>
</main>
