import { GraphQLError } from "graphql";
import { profile } from "../data/profile.js";
import type { Profile, GraphQLContext } from "./types.js";

function requireAuth(context: GraphQLContext): void {
  if (!context.authenticated) {
    throw new GraphQLError("Authentication required", {
      extensions: { code: "UNAUTHENTICATED" },
    });
  }
}

export const resolvers = {
  Query: {
    profile: () => profile,
  },
  Profile: {
    avatarUrl: (parent: Profile) => parent.avatar_url,
    realName: (parent: Profile, _args: unknown, context: GraphQLContext) => {
      requireAuth(context);
      return parent.real_name;
    },
    email: (parent: Profile, _args: unknown, context: GraphQLContext) => {
      requireAuth(context);
      return parent.email;
    },
  },
};
