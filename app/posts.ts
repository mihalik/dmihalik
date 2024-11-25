
export function getPosts() {
  const posts = import.meta.glob("./articles/*.mdx", { eager: true });
  const postsArray = Object.entries(posts).map(([key, value]) => ({
    ...value,
    key,
  }));
  // Sort posts by date string in descending order (newest first)
  postsArray.sort((a, b) => {
    const dateA = a.frontmatter?.date || '';
    const dateB = b.frontmatter?.date || '';
    return dateB > dateA ? 1 : -1;
  });
  // Add href property by converting file path to URL path
  postsArray.forEach(post => {
    post.href = post.key
      .replace('./articles/', '/articles/')
      .replace('.mdx', '')
      .replaceAll('.', '/')
  });

  return postsArray;
}
