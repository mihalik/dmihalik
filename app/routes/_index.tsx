import type { MetaFunction } from "react-router";

const asciiBanner = [
  "██████╗  ██╗   ██╗  ██████╗ ████████╗ ██╗  ███╗   ██╗",
  "██╔══██╗ ██║   ██║ ██╔════╝ ╚══██╔══╝ ██║  █████╗ ██║",
  "██║  ██║ ██║   ██║ ██████╗     ██║    ██║  ██╔██╗ ██║",
  "██║  ██║ ██║   ██║ ╚════██╗    ██║    ██║  ██║╚██╗██║",
  "██████╔╝ ╚██████╔╝ ██████╔╝    ██║    ██║  ██║ ╚████║",
  "╚═════╝   ╚═════╝  ╚═════╝     ╚═╝    ╚═╝  ╚═╝  ╚═══╝",
].join("\n");

export const meta: MetaFunction = () => {
  return [
    { title: "Dustin Mihalik — Software Engineer" },
    {
      name: "description",
      content: "Dustin Mihalik — software engineer and AI platform leader based in Austin, TX.",
    },
  ];
};

export default function Index() {
  return (
    <div className="-mx-10 -mt-8 bg-white pb-16 pt-12 text-slate-700 sm:-mx-16 sm:pb-24 sm:pt-20">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 sm:px-10">
        <div className="overflow-x-auto">
          <pre className="bg-gradient-to-r from-sky-500 via-indigo-600 to-rose-500 bg-clip-text font-mono text-xs font-semibold uppercase leading-tight text-transparent sm:text-sm/5 md:text-base/5">
            {asciiBanner}
          </pre>
        </div>

        <section className="space-y-4">
          <p className="text-lg text-slate-700">
            I'm a software engineer in Austin, TX, building the next generation of AI platforms at{" "}
            <a
              className="font-semibold text-slate-900 underline decoration-sky-400/70 underline-offset-4 transition-colors hover:text-sky-600"
              href="http://indeed.com"
            >
              Indeed
            </a>
            . I care deeply about empowering teams to ship resilient systems, cultivating humane AI experiences, and
            helping engineers grow.
          </p>
          <p className="text-lg text-slate-700">
            Outside of work you'll find me iterating on side projects, swimming laps, or harvesting fresh tomatoes from my garden.
          </p>
        </section>

      </div>
    </div>
  );
}
