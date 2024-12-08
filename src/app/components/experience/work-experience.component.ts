import { Component, Input } from '@angular/core';
import { Experience } from '@models';

@Component({
  selector: 'glsf-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  standalone: false,
})
export class WorkExperienceComponent {
  @Input() experiences: Experience[] = [] as Experience[];

  isUserLangPT = navigator.language === 'pt-BR';
}
