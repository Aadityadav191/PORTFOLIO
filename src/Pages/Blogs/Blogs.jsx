import React, { useState, useEffect } from "react";
import BlogCards from "../../Components/Blogs/BlogCards";
import "./Blogs.css";

export default function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const MEDIUM_USERNAME = "@yaaditya191";

  useEffect(() => {
    const fetchMediumBlogs = async () => {
      try {
        // We use the rss2json API converter to turn Medium's XML feed into clean JSON
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${MEDIUM_USERNAME}`,
        );
        const data = await response.json();

        if (data.status === "ok") {
          // Format Medium's layout data to fit your Card component properties perfectly
          const formattedBlogs = data.items.map((item, index) => {
            // Quick cleanup to extract a clean string from Medium's full HTML content
            const cleanDescription =
              item.content
                .replace(/<[^>]*>/g, "") // Strips HTML tags
                .substring(0, 140) + "...";

            return {
              id: index,
              title: item.title,
              description: cleanDescription,
              image:
                item.thumbnail ||
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
              tag: item.categories[0] || "Tech", // Pulls your first Medium tag
              date: new Date(item.pubDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
              readTime: "Read Article",
              link: item.link,
            };
          });

          setBlogData(formattedBlogs);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching Medium RSS feed:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMediumBlogs();
  }, [MEDIUM_USERNAME]);
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
        <h2 style={{ color: "#fff" }}>
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
                description={blog.description}
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
  );
}
