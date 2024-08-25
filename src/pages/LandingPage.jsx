import { useState, useEffect } from "react";
import axios from "axios";
import useUserStore from '@/store';
import BlogCard from '@/components/custom/BlogCard'

function LandingPage() {
  const [blogs, setBlogs] = useState([]);
  const {user} = useUserStore()
  console.log(blogs)
  useEffect(() => {
    if (user) {
      axios
        .get("https://zupay-assignent-complete.onrender.com/posts")
        .then((response) => setBlogs(response.data))
        .catch((error) => console.error("Error fetching blogs:", error));
    }
  }, [user]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`https://zupay-assignent-complete.onrender.com/posts/${id}`)
        .then(() => {
          setBlogs(blogs.filter((blog) => blog._id !== id));
        })
        .catch((error) => console.error("Error deleting blog:", error));
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Please sign in to view the blogs.
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        All Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
