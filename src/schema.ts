import { createSchema } from "graphql-yoga";
import { resolvers } from "./resolvers.js";

const typeDefs = /* GraphQL */ `
  type Link {
    label: String!
    url: String!
  }

  type Profile {
    name: String!
    bio: String!
    avatarUrl: String!
    links: [Link!]!
    realName: String
    email: String
  }

  type Query {
    profile: Profile!
  }
`;

export const schema = createSchema({ typeDefs, resolvers });
