import { Component, OnInit } from '@angular/core';

export interface WorkExperienceModel {
  date_range: string;
  location: string;
  position: string;
  employee_website: string;
  employee_name: string;
  job_description: string;
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  panelOpenState = false;

  WorkExperienceList: WorkExperienceModel[] = [
    {
      date_range: '06/2018 - Present',
      location: 'Rio de Janeiro, Rio de Janeiro - Brazil',
      position: 'Software Developer',
      employee_name: 'Instituto Tecgraf/PUC-Rio',
      employee_website: '',
      job_description: "Developing .NET Framework applications with WinForms.\nI've started using Subversion as the main code versioning tool, and later helped migrate codebase to git.\nMore precisely, I act as a developer in a decision support system for the Oil and Gas industry, where the main focus is to optimize the allocation of Offshore Drilling Rigs and PLSV (Pipe-laying ships) to deep water exploration camps.",
    }
  ]
}
