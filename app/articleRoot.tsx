import { Outlet } from "react-router";

export default function Component() {

  return (
    <div className="p-10 prose">
      <Outlet />
    </div>
  );
}
