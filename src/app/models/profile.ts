export interface Profile {
  skill: Skill[];
  social: Social[];
  personal: Personal;
  language: Language[];
  education: Education[];
  experience: Experience[];
}

export interface Personal {
  name: string;
  birth: string;
  phone: string;
  email: string;
  location: string;
  description: string;
}

export interface Education {
  end: number;
  type: string;
  name: string;
  start: number;
  state: string;
  course: string;
  website: string;
  location: string;
  description: string;
}

export interface Social {
  url: string;
  icon: string;
  name: string;
}

export interface Progress {
  name: string;
  progress: number;
}

export interface Language extends Progress {
  level: string;
}

export interface Skill {
  category: string;
  items: Progress[];
}

export interface Experience {
  end: string;
  start: string;
  name: string;
  website: string;
  location: string;
  position: string;
  description: string;
}
