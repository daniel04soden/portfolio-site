<script>
 const ageCalc = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
 let age = ageCalc("2004-09-03")
</script>

<main>

  <div class="inner-container">
    <article class="para-border">
      <h3>My Name is Daniel Soden!</h3>
      <ul>
        <li>
          My name is Daniel Soden! I'm a {age} year old passionate software development student in my third year at Munster Technological University, Cork. I love all things tech and software and have a strong foundation in both hardware and operating systems. I work well both as part of a team and independently when delving into a topic that interests me.
        </li>
        <li>
          To date, I have achieved First Class Honours in all of my college semesters , with my most recent GPA being 73.58%. Through previous experience in sales and logistics, I've developed great communication and interpersonal skills
        </li>
      </ul>
    </article>
    <article class="para-border">
      <div id="skills-container">
        <div>
          <h4>Experienced In</h4>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>SQL</li>
            <li>Javascript</li>
            <li>Vim</li>
            <li>Linux</li>
          </ul>
        </div>
        <div>
          <h4>Interested In</h4>
          <ul>
            <li>C++</li>
            <li>Golang</li>
            <li>Ruby</li>
            <li>Svelte</li>
            <li>Emacs</li>
            <li>BSD</li>
          </ul>
        </div>
      </div>
    </article>
  </div>
  <article>
    <h3>Want to know a bit more about my professional experience?</h3>
    <p>Here's My Resume, take a look!</p>
    <embed src="/Black and White Clean Professional A4 Resume.pdf" width="500" height="375">

    <a href="/DanielSodenCV25.pdf" download>Download Here</a>
  </article>
</main>
