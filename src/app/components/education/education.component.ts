import { Component, Input } from '@angular/core';
import { Education } from '@models';

@Component({
  selector: 'glsf-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  @Input() educations: Education[] = [] as Education[];
}
