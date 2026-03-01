import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import type { Profile, GraphQLContext } from "./types.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = resolve(__dirname, "../data");

function loadYaml<T>(filename: string): T {
  const content = readFileSync(resolve(dataDir, filename), "utf-8");
  return yaml.load(content) as T;
}

export const resolvers = {
  Query: {
    profile: () => loadYaml<Profile>("profile.yml"),
  },
  Profile: {
    avatarUrl: (parent: Profile) => parent.avatar_url,
    realName: (parent: Profile, _args: unknown, context: GraphQLContext) =>
      context.authenticated ? parent.real_name : null,
    email: (parent: Profile, _args: unknown, context: GraphQLContext) =>
      context.authenticated ? parent.email : null,
  },
};
