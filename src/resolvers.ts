import { profile } from "../data/profile.js";
import type { Profile } from "./types.js";

export const resolvers = {
  Query: {
    profile: () => profile,
  },
  Profile: {
    avatarUrl: (parent: Profile) => parent.avatar_url,
    realName: (parent: Profile) => parent.real_name,
    email: (parent: Profile) => parent.email,
  },
};
