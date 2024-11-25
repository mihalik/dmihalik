import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-row">
      <div className="prose">
        <h3>Hi, I'm Dustin Mihalik</h3>
        <p>
          I am a software engineer at{" "}
          <a className="bold" href="http://indeed.com">
            Indeed
          </a>{" "}
          in Austin, TX.
        </p>
      </div>
      <div className="ml-6">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
    </div>
  );
}
