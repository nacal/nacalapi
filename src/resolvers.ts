import { profile } from "../data/profile.js";
import { careers } from "../data/careers.js";
import { education } from "../data/education.js";
import { interests } from "../data/interests.js";
import type { Profile, Career, Role, Education } from "./types.js";

export const resolvers = {
  Query: {
    profile: () => profile,
    careers: () => careers,
    education: () => education,
    interests: () => interests,
  },
  Profile: {
    avatarUrl: (parent: Profile) => parent.avatar_url,
    realName: (parent: Profile) => parent.real_name,
    email: (parent: Profile) => parent.email,
  },
  Career: {
    employmentType: (parent: Career) => parent.employment_type,
    startDate: (parent: Career) => parent.start_date,
    endDate: (parent: Career) => parent.end_date,
  },
  Role: {
    startDate: (parent: Role) => parent.start_date,
    endDate: (parent: Role) => parent.end_date,
  },
  Education: {
    startDate: (parent: Education) => parent.start_date,
    endDate: (parent: Education) => parent.end_date,
  },
};
