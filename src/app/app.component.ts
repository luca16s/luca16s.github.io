import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Profile } from './models/profile';
import { environment } from '@env';

@Component({
  selector: 'glsf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);

  isPhonePortrait = false;

  profile$!: Observable<Profile>;

  isUserLangPT = navigator.language === 'pt-BR';

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.profile$ = this.http.get<Profile>(
      this.isUserLangPT ? environment.ptUrl : environment.enUrl
    );
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;

      if (result.matches) {
        console.log(1);
        this.isPhonePortrait = true;
      }
    });
  }
}
