const MEDIUM_USERNAME = "@aadityadav_";

export async function fetchMediumBlogs() {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${MEDIUM_USERNAME}`
  );

  const data = await response.json();

  if (data.status !== "ok") {
    throw new Error("Failed to fetch blogs");
  }

  return data.items.map((item, index) => {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = item.content.match(imgRegex);
    const extractedImage = match ? match[1] : null;

    const cleanDescription =
      item.content.replace(/<[^>]*>/g, "").substring(0, 140) + "...";

    return {
      id: index,
      title: item.title,
      description: cleanDescription,
      image:
        extractedImage ||
        item.thumbnail ||
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
      tag: item.categories[0] || "Tech",
      date: new Date(item.pubDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      readTime: "Read Article",
      link: item.link,
    };
  });
}