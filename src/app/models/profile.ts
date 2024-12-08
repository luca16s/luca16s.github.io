import { Skill } from './skill';
import { Social } from './social';
import { Language } from './language';
import { Personal } from './personal';
import { Education } from './education';
import { Experience } from './experience';

export interface Profile {
  skill: Skill[];
  social: Social[];
  personal: Personal;
  language: Language[];
  education: Education[];
  experience: Experience[];
}
