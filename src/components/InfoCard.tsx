function calculateAge(dob: string) {
  return Math.floor((Date.now() - new Date(dob).getTime()) / 3.15576e10);
}

function InfoCard() {
  let age = calculateAge("2004-09-03");
  return (
    <>
      <div>
        <article>
          <h3>My name is Daniel Soden!</h3>
          <p className="bio">
            I'm a {age} year old passionate software development student in my
            third year at Munster Technological University, Cork. I love all
            things tech and software and have a strong foundation in both
            hardware and operating systems. I work well both as part of a team
            and independently when delving into a topic that interests me.
          </p>
        </article>
        <article className="skill-row">
          <div>
            <h4>Experienced In</h4>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
            </ul>
          </div>
          <div>
            <h4>Currently Interested In</h4>
            <ul>
              <li>Rust</li>
              <li>Nix</li>
              <li>React</li>
            </ul>
          </div>
        </article>
        <article className="experience">
          <h4>Previous Experience</h4>
          <ul>
            <li>Warehouse Operative - PFH Technology Group (2022-2025)</li>
            <li>DevOps Engineering Intern - Comcast Ireland Ltd. (2022-2025)</li>
            <li>IT Service Desk - Munster Technological University (2026-2027)</li>
            <li>Sales Operative - DID (2025-2026)</li>
          </ul>
        </article>
      </div>
    </>
  );
}

export default InfoCard;
