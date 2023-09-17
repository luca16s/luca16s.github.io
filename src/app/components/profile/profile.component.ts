import { Component, Input } from '@angular/core';
import { Personal } from 'src/app/models/profile';

@Component({
  selector: 'glsf-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() personal: Personal = {} as Personal;
}
