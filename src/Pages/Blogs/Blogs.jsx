import React, { useState, useEffect } from "react";
import BlogCards from "../../Components/Cards/Blogs/BlogCards";
import "./Blogs.css";
import { fetchMediumBlogs } from "../../services/blogService";

export default function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
  const loadBlogs = async () => {
    try {
      const blogs = await fetchMediumBlogs();
      setBlogData(blogs);
    } catch (err) {
      console.error("Error fetching Medium RSS feed:", err);
      setError(true);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  loadBlogs();
}, []);

  const visibleBlogs = isExpanded ? blogData : blogData.slice(0, 4);

  if (isLoading) {
    return (
      <div
        className="blogs-page-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#d18700" }}>
          Fetching latest articles from Medium...
        </h2>
      </div>
    );
  }

  if (error || blogData.length === 0) {
    return (
      <div
        className="blogs-page-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#ef4444" }}>
          Could not load articles. Check back later!
        </h2>
      </div>
    );
  }

  return (
    <main id="Blogs" className="BlogsPage">
      <div className="blogs-page-wrapper">
        <div className="blogs-container">
          <header className="blogs-header">
            <h1 className="Protitle">
              Blogs / <u style={{ textDecorationColor: "#d18700" }}>Articles</u>
            </h1>
          </header>

          <div
            className={`grid-wrapper-container ${!isExpanded ? "is-collapsed" : ""}`}
          >
            <main className="blogs-grid">
              {visibleBlogs.map((blog) => (
                <BlogCards
                  key={blog.id}
                  title={blog.title}
                  description={
                    blog.description.length > 50
                      ? blog.description.slice(0, 50) + "..."
                      : blog.description
                  }
                  image={blog.image}
                  tag={blog.tag}
                  date={blog.date}
                  readTime={blog.readTime}
                  link={blog.link}
                />
              ))}
            </main>

            {!isExpanded && blogData.length > 4 && (
              <div className="blogs-fade-overlay">
                <button
                  className="see-more-btn"
                  onClick={() => setIsExpanded(true)}
                >
                  See More Articles
                </button>
              </div>
            )}
          </div>

          {isExpanded && (
            <div className="show-less-wrapper">
              <button
                className="see-more-btn show-less-variant"
                onClick={() => setIsExpanded(false)}
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
