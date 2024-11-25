import { type RouteConfig, route } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";



export default [
    route("articles", "./articleRoot.tsx", [
        ...(await flatRoutes({ rootDirectory: "./articles" }))
    ]),
    ...(await flatRoutes()),
] satisfies RouteConfig;

// export const routes: RouteConfig = [index("routes/home.tsx")];
