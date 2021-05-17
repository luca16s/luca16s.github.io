import { Component, OnInit } from '@angular/core';

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
  panelOpenState = false;

  SkillList: Skill[] = [
    {
      name: 'Portuguese',
      progress: 100,
    },
    {
      name: 'English',
      progress: 70,
    },
    {
      name: 'French',
      progress: 10,
    }
  ]
}
