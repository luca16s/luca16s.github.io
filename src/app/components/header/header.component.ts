import { Component, Input } from '@angular/core';
import { Personal } from '@models';

@Component({
  selector: 'glsf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() personal: Personal = {} as Personal;
}
