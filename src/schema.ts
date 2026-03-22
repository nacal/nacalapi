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
    realName: String!
    email: String!
    location: Location!
  }

  type Location {
    city: String!
    country: String!
    hometown: String!
    timezone: String!
  }

  type Role {
    department: String!
    title: String!
    startDate: String!
    endDate: String
    description: String!
  }

  type Career {
    company: String!
    employmentType: String!
    startDate: String!
    endDate: String
    roles: [Role!]!
  }

  type Education {
    school: String!
    faculty: String!
    startDate: String!
    endDate: String!
  }

  type Query {
    profile: Profile!
    careers: [Career!]!
    education: [Education!]!
  }
`;

export const schema = createSchema({ typeDefs, resolvers });
