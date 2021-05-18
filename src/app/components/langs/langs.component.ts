import { Component, OnInit } from '@angular/core';

export interface Languages {
  name: string;
  level: string;
  progress: number;
}

@Component({
  selector: 'app-langs',
  templateUrl: './langs.component.html',
  styleUrls: ['./langs.component.scss']
})
export class LangsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  langList: Languages[] = [
    {
      name: 'Portuguese',
      level: 'Native',
      progress: 100,
    },
    {
      name: 'English',
      level: 'B1',
      progress: 70,
    },
    {
      name: 'French',
      level: 'A1',
      progress: 10,
    }
  ]

}
