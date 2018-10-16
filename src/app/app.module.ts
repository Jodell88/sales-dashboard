import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
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
import { PortForwardingComponent } from './port-forwarding/port-forwarding.component';
import { BillingComponent } from './billing/billing.component';
import { RetentionComponent } from './retention/retention.component';
import { UpgradeDowngradeComponent } from './upgrade-downgrade/upgrade-downgrade.component';
import { MobileFormComponent } from './mobile-form/mobile-form.component';
import { TtarpComponent } from './ttarp/ttarp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    HomeComponent,
    SecurityFormComponent,
    CspFormComponent,
    VoiceFeaturesComponent,
    PortForwardingComponent,
    BillingComponent,
    RetentionComponent,
    UpgradeDowngradeComponent,
    MobileFormComponent,
    TtarpComponent
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
      {
        path: 'portforwarding',
        component: PortForwardingComponent
      },
      {
        path: 'retention',
        component: RetentionComponent
      },
      {
        path: 'billing',
        component: BillingComponent
      },
      {
        path: 'upgradedowngrade',
        component: UpgradeDowngradeComponent
      },
      {
        path: 'mobile',
        component: MobileFormComponent
      },
      {
        path: 'ttarp',
        component: TtarpComponent
      },
    ]),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-GB'},
    {provide: DateAdapter, useClass: MyDateAdapter},
    BillingCycleService,
    PackageDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
