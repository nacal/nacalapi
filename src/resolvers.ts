import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import type { Profile } from "./types.js";

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
  },
};
