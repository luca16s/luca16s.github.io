import { Component, Input } from '@angular/core';
import { Personal } from 'src/app/models/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isPhonePortrait: boolean = false;
  @Input() personal: Personal = {} as Personal;
}
