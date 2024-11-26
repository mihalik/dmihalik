import { type RouteConfig, route } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";



export default [
    // Render /articles pages from /app/articles with the articles container
    route("articles", "./articleRoot.tsx", [
        ...(await flatRoutes({ rootDirectory: "./articles" }))
    ]),
    // Everything else from the /app/routes directory
    ...(await flatRoutes()),
] satisfies RouteConfig;

