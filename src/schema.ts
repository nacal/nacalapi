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
  }

  type WorkExperience {
    company: String!
    role: String!
    description: String!
    startDate: String!
    endDate: String
    url: String
  }

  type Skill {
    name: String!
    category: String!
    level: Int!
  }

  type Project {
    name: String!
    description: String!
    url: String
    technologies: [String!]!
    imageUrl: String
  }

  type Query {
    profile: Profile!
    workExperiences: [WorkExperience!]!
    skills: [Skill!]!
    projects: [Project!]!
  }
`;

export const schema = createSchema({ typeDefs, resolvers });
