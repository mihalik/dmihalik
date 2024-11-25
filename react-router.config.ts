import type { Config } from "@react-router/dev/config";

export default {
  // Unsure exactly why this works rather than having to list all the paths in a function
  prerender: true
} satisfies Config;