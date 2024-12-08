import { Component } from '@angular/core';

@Component({
  selector: 'glsf-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  standalone: false,
})
export class SocialComponent {
  isUserLangPT = navigator.language === 'pt-BR';
}
