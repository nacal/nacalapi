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
  location: Location;
}

export interface Location {
  city: string;
  country: string;
  hometown: string;
  timezone: string;
}

export interface Role {
  department: string;
  title: string;
  start_date: string;
  end_date: string | null;
}

export interface Career {
  company: string;
  employment_type: string;
  start_date: string;
  end_date: string | null;
  roles: Role[];
}

export interface Education {
  school: string;
  faculty: string;
  start_date: string;
  end_date: string;
}

