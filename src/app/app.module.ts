import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgSelectOption } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClipboardModule } from 'ngx-clipboard';
import { RouterModule,  RouteReuseStrategy } from '@angular/router';
import { MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatSidenav,
         MatListModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, DateAdapter,
         MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatRadioModule} from '@angular/material';


import { AppComponent } from './app.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { HomeComponent } from './home/home.component';
import { SecurityFormComponent } from './security-form/security-form.component';
import { BillingCycleService} from './billing-cycle.service';
import { PackageDataService } from './package-data.service';
import { MyDateAdapter } from './customdateadapter';
import { CspFormComponent } from './csp-form/csp-form.component';
import { VoiceFeaturesComponent } from './voice-features/voice-features.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    HomeComponent,
    SecurityFormComponent,
    CspFormComponent,
    VoiceFeaturesComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ClipboardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatRadioModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'security',
        component: SecurityFormComponent
      },
      {
        path: 'technical',
        component: CspFormComponent
      },
      {
        path: 'voicefeatures',
        component: VoiceFeaturesComponent
      },
    ]),
  ],
  providers: [
    {provide: DateAdapter, useClass: MyDateAdapter},
    BillingCycleService,
    PackageDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
