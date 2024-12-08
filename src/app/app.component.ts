import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '@models';
import { environment } from '@env';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'glsf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);

  profile$!: Observable<Profile>;

  isUserLangPT = navigator.language === 'pt-BR';

  constructor(private readonly iconRegistry: MatIconRegistry) {
    const defaultFontSetClasses = iconRegistry.getDefaultFontSetClass();
    const outlinedFontSetClasses = defaultFontSetClasses
      .filter((fontSetClass) => fontSetClass !== 'material-icons')
      .concat(['material-symbols-outlined']);
    iconRegistry.setDefaultFontSetClass(...outlinedFontSetClasses);
  }

  ngOnInit() {
    this.profile$ = this.http.get<Profile>(
      this.isUserLangPT ? environment.ptUrl : environment.enUrl
    );
  }
}
