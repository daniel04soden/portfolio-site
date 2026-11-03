import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { blogs } from "@/lib/assets/blogs";

function BlogPage() {
  return (
    <main className="container">
      <Header title="Welcome to my blog, come have a read!" />
      <ul className="stack">
        {blogs.map((blog, index) => (
          <li key={index}>
            <BlogCard {...blog} />
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
}

export default BlogPage;
