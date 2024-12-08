import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkExperienceComponent } from './components/experience/work-experience.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LangsComponent } from './components/lang/lang.component';
import { SkillComponent } from './components/skill/skill.component';
import { EducationComponent } from './components/education/education.component';
import { SocialComponent } from './components/social/social.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        WorkExperienceComponent,
        ProfileComponent,
        LangsComponent,
        SkillComponent,
        EducationComponent,
        SocialComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000',
        }),
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        MatListModule,
        MatExpansionModule,
        MatButtonModule,
        MatSliderModule,
        MatInputModule,
        FormsModule,
        LayoutModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
