import { Component, Input } from '@angular/core';
import { Skill } from '@models';

@Component({
  selector: 'glsf-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  standalone: false,
})
export class SkillComponent {
  @Input() skills: Skill[] = [] as Skill[];

  isUserLangPT = navigator.language === 'pt-BR';
}
