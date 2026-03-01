import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import type { Profile, WorkExperience, Skill, Project } from "./types.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = resolve(__dirname, "../data");

function loadYaml<T>(filename: string): T {
  const content = readFileSync(resolve(dataDir, filename), "utf-8");
  return yaml.load(content) as T;
}

export const resolvers = {
  Query: {
    profile: () => loadYaml<Profile>("profile.yml"),
    workExperiences: () => loadYaml<WorkExperience[]>("work_experiences.yml"),
    skills: () => loadYaml<Skill[]>("skills.yml"),
    projects: () => loadYaml<Project[]>("projects.yml"),
  },
  Profile: {
    avatarUrl: (parent: Profile) => parent.avatar_url,
  },
  WorkExperience: {
    startDate: (parent: WorkExperience) => parent.start_date,
    endDate: (parent: WorkExperience) => parent.end_date,
  },
  Project: {
    imageUrl: (parent: Project) => parent.image_url,
  },
};
