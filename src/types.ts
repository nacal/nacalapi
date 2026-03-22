export interface Link {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  bio: string;
  avatar_url: string;
  links: Link[];
  real_name: string;
  email: string;
}

