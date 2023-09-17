export interface Profile {
  skills: Skills[];
  social: Social[];
  personal: Personal;
  language: Language[];
  education: Education[];
  workExperience: WorkExperience[];
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
  start: number;
  course: string;
  location: string;
  collegeName: string;
  description: string;
  collegeWebsite: string;
}

export interface Social {
  name: string;
  url: string;
}

export interface Language {
  name: string;
  level: string;
  progress: number;
}

export interface Skill {
  name: string;
  progress: number;
}

export interface Skills {
  skills: Skill[];
  category: string;
}

export interface WorkExperience {
  start: string;
  end: string;
  location: string;
  position: string;
  employerName: string;
  jobDescription: string;
  employerWebsite: string;
}
