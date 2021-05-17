import { Component, OnInit } from '@angular/core';

export interface SkillsList {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  progress: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  panelOpenState = true;

  SkillList: SkillsList[] = [
    {
      category: 'Programing Languages',
      skills: [] = [
        {
          name: 'C#',
          progress: 80,
        },
        {
          name: 'Java',
          progress: 50,
        },
        {
          name: 'Python',
          progress: 40,
        },
        {
          name: 'ABAP',
          progress: 50,
        },
        {
          name: 'Javascript/Typescript',
          progress: 30,
        }
      ]
    },
    {
      category: 'FrameWorks',
      skills: [] = [
        {
          name: '.NET Core',
          progress: 70,
        },
        {
          name: '.NET Framework',
          progress: 80,
        },
        {
          name: 'Angular',
          progress: 30,
        },
        {
          name: 'VueJS',
          progress: 30,
        },
      ]
    },
    {
      category: 'Databases',
      skills: [] = [
        {
          name: 'SQL Server',
          progress: 60,
        },
        {
          name: 'Oracle Database',
          progress: 80,
        },
        {
          name: 'MongoDB',
          progress: 40,
        },
      ]
    },
  ]
}
