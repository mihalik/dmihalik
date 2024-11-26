import React from "react";
import ReactDom from "react-dom/server";
import { getPosts } from "../posts";
import { Feed } from "feed";
import { evaluateSync } from "@mdx-js/mdx";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import * as runtime from "react/jsx-runtime";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export async function loader() {
  const posts = getPosts();
  const postsTop = posts.slice(0, 10);

  const author = {
    name: "Dustin Mihalik",
    link: "https://dmihalik.com",
  };

  const feed = new Feed({
    title: "dmihalik.com - Dustin Mihalik",
    id: "https://dmihalik.com",
    link: "https://dmihalik.com",
    copyright: `Copyright ©️ ${new Date().getFullYear()}, Dustin Mihalik`,
    feedLinks: {
      atom: "https://dmihalik.com/atom.xml",
    },
    author,
  });

  postsTop.forEach((post) => {
    feed.addItem({
      title: post.frontmatter.title,
      id: post.key,
      link: `https://dmihalik.com/${post.href}`,
      content: ReactDom.renderToStaticMarkup(
        <div xmlns="http://www.w3.org/1999/xhtml">
          {React.createElement(
            evaluateSync(readFileSync(resolve(`./app/${post.key}`)), {
              ...runtime,
              remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
            }).default
          )}
        </div>
      ),
      author: [author],
      date: new Date(post.frontmatter.date),
    });
  });

  return new Response(feed.atom1(), {
    status: 200,
    headers: { "Content-Type": "atom+xml; charset=utf-8" },
  });
}
