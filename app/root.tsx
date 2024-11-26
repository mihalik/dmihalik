import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { LinksFunction } from "react-router";

import "./app.css";

export const links: LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <link rel="alternate" type="application/atom+xml" title="dmihalik.com - Dustin Mihalik" href="atom.xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="px-10">
        <div>
          <header className="flex justify-between mt-2">
            <a href="/">
              <img
                alt="dmihalik avatar"
                className="ml-4 inline object-cover w-12 h-12 rounded-full"
                src="/images/avatar.png"
              />
            </a>
          </header>
          <main className="font-sans mt-8 prose lg:prose-xl">{children}</main>
          <footer className="mt-8 border-t">
            <div className="flex py-2">
              <a className="mr-4" href="/about/">
                about
              </a>
              <a className="mr-4" href="/archive/">
                blog archive
              </a>
              <a href="/contact/">contact</a>
            </div>
            <p className="text-gray-400">
              Copyright &#169; {new Date().getFullYear()}, Dustin Mihalik
            </p>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "e236b65936394d9bbcdd5cb1bf3c129e"}'
        ></script>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
