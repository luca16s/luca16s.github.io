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
      date_range: 'From 06/2018 - Present',
      location: 'Rio de Janeiro - Brazil',
      position: 'Software Developer',
      employee_name: 'Instituto Tecgraf/PUC-Rio',
      employee_website: 'https://www.tecgraf.puc-rio.br/',
      job_description: "Developing .NET Framework applications with WinForms.\nI've started using Subversion as the main code versioning tool, and later helped migrate codebase to git.\nMore precisely, I act as a developer in a decision support system for the Oil and Gas industry, where the main focus is to optimize the allocation of Offshore Drilling Rigs and PLSV (Pipe-laying ships) to deep water exploration camps.",
    },
    {
      date_range: 'From 10/2017 to 06/2018',
      location: 'Rio de Janeiro - Brazil',
      position: 'Trainee SAP - ABAP',
      employee_name: 'Indra Company',
      employee_website: 'https://www.indracompany.com/',
      job_description: 'Developing new solutions, bug fixes, and documentation at Petrobras.\nVerifying the process of transporting modifications from development environment to production environment.\nSAP NetWeaver Portal Management and ABAP application development.\nSAPUI5 application development with OData Service access.',
    },
    {
      date_range: 'From 12/2015 to 09/2017',
      location: 'Rio de Janeiro - Brazil',
      position: 'Jr. Support Analyst',
      employee_name: 'DLima Consultoria Contábil e Tributária LTDA - ME',
      employee_website: '',
      job_description: "User support, program guides creation.\nNetwork monitoring, computer maintaining, and backup routines.\nNASAJON Accounting systems support and monitoring.\nNF-e management, correcting and sending accessory obligations like SPED-ICMS, LEDF-DF, EDOC-PE.",
    },
    {
      date_range: 'From 12/2015 to 09/2017',
      location: 'Rio de Janeiro - Brazil',
      position: 'IT Intern',
      employee_name: 'DLima Consultoria Contábil e Tributária LTDA - ME',
      employee_website: '',
      job_description: "User support.\nNetwork monitoring, computer maintenance, and backup routines.",
    }
  ]
}
