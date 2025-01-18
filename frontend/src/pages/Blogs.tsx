import { BlogCard } from "../components/BlogCard";
import { useBlog } from "../hooks/Blogs";

const Blogs = () => {
  const { loading, blogs } = useBlog();

  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <div>
        <div>
          {blogs?.map((blog) => (
            <div key={blog.id}><BlogCard blog = {blog} /></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
