import { Component, OnInit } from '@angular/core';

export interface Education {
  collegeName: string;
  college_website: string;
  location: string;
  date_range: string;
  type: string;
  course: string;
  description: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  panelOpenState = false;

  educationList: Education[] = [
    {
      collegeName: 'PUC-Rio',
      college_website: 'https://www.puc-rio.br/index.html',
      location: 'Rio de Janeiro - Brazil',
      date_range: 'From 2020 - Present',
      type: 'Bachelor of Science',
      course: 'Computer Science',
      description: 'Software development with Lua, python. Algorithm optimization.',
    },
    {
      collegeName: 'Instituto Infnet',
      college_website: 'https://www.infnet.edu.br/esti/',
      location: 'Rio de Janeiro - Brazil',
      date_range: 'From 2017 to 2019',
      type: 'Graduate',
      course: 'Software engineering with .NET',
      description: 'Developing, and managing software lifecycle.\nRUP, XP and SCRUM Methodologies.\nObject-oriented programming and modelling on UML.\nProject patterns such as SOLID, GRASP and Domain Driven Design.\nSpecialization focused on .NET technologies, such as C#, Xamarin, Azure, and more.',
    },
    {
      collegeName: 'FAETERJ',
      college_website: 'http://faeterj-paracambi.com.br/',
      location: 'Rio de Janeiro - Brazil',
      date_range: 'From 2013 to 2016',
      type: 'Undergraduate degree',
      course: 'Informations Systems',
      description: 'Software development with Java, PHP.\nObject oriented programming.',
    },
  ]
}
