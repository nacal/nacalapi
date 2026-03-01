export interface Link {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  bio: string;
  avatar_url: string;
  links: Link[];
}

export interface WorkExperience {
  company: string;
  role: string;
  description: string;
  start_date: string;
  end_date: string | null;
  url: string | null;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Project {
  name: string;
  description: string;
  url: string | null;
  technologies: string[];
  image_url: string | null;
}
