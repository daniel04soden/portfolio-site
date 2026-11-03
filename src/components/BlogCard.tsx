type BlogCardProps = {
  title: string;
  snippet: string;
  route: string;
  /*
  Images are entirely optional for this component,
  will be handled accordingly within logic
  */
  imgSrc?: string;
};

function BlogCard({ title, snippet, route, imgSrc }: BlogCardProps) {
  return (
    <div className="blog-card">
      <h3>{title}</h3>
      {imgSrc && <img src={imgSrc} alt={title} />}
      <p>{snippet}</p>
      <a href={route}>Read here</a>
    </div>
  );
}

export default BlogCard;
