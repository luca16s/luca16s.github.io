import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/profile';

@Component({
  selector: 'glsf-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  @Input() experiences: Experience[] = [] as Experience[];

  userLang = navigator.language === 'pt-BR';
}
