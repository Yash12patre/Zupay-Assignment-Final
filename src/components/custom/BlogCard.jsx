import { Link } from "react-router-dom";

const truncateDescription = (description) => {
  return description.length > 70
    ? description.slice(0, 70) + "..."
    : description;
};

const BlogCard = ({ blog, handleDelete }) => {
  return (
    <div
      key={blog._id}
      className="relative border border-purple-300 bg-purple-100 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-purple-800">{blog.title}</h2>
        <hr className="border-t-2 border-purple-200 mb-4" />
        <p
          className="text-purple-700 mb-6"
          style={{ height: "3rem", overflow: "hidden" }}
        >
          {truncateDescription(blog.discription)}
        </p>
        <div className="flex justify-between items-center">
          <Link
            to={`/blog/${blog._id}`}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
          >
            Read More
          </Link>
          <div className="flex space-x-2">
            <Link
              to={`/edit/${blog._id}`}
              className="bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(blog._id)}
              className="bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
