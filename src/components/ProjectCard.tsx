type ProjectCardProps = {
  title: string;
  description: string;
  projectUrl: string;
  imgUrl: string;
  imgAlt: string;
};

function ProjectCard({
  title,
  description,
  projectUrl,
  imgUrl,
  imgAlt,
}: ProjectCardProps) {
  return (
    <div className="project-element">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imgUrl} alt={imgAlt} loading="lazy" />
      <p>
        Please see the link to this Project on my personal Git Instance here:{" "}
        <a href={projectUrl} target="_blank" rel="noreferrer">
          {projectUrl}
        </a>
      </p>
    </div>
  );
}

export default ProjectCard;
