import { Component, Input } from '@angular/core';
import { Language } from 'src/app/models/profile';

export interface Languages {
  name: string;
  level: string;
  progress: number;
}

@Component({
  selector: 'glsf-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
})
export class LangsComponent {
  @Input() langs: Language[] = [] as Language[];
}
