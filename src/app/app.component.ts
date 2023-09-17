import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Profile } from './models/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);

  profile$!: Observable<Profile>;

  isPhonePortrait = false;

  constructor(private responsive: BreakpointObserver) {
    this.profile$ = this.http.get<Profile>('./../assets/data/profile.json');
  }

  ngOnInit() {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;

      if (result.matches) {
        console.log(1);
        this.isPhonePortrait = true;
      }
    });
  }
}
