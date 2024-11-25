import { Link } from "react-router";
import { getPosts } from "../posts";

export async function loader() {
  const posts = getPosts();

  return { posts };
}

export default function MyRoute({ loaderData }) {
  return (
    <>
      <h1>Archived posts</h1>

      <ul className="list-none">
      {loaderData.posts.map((post) => (
        <li key={post.key}>
          <Link to={post.href}>
            {post.frontmatter.title}
          </Link>
          <span className="text-gray-500 ml-2">
            {post.frontmatter.date}
          </span>
        </li>
      ))}
      </ul>
      <pre>{JSON.stringify(loaderData, null, 4)}</pre>
    </>
  );
}
