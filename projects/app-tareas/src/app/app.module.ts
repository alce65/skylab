import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import LocaleES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { reducers } from './reducers';
import { environment } from '../environments/environment';

registerLocaleData(LocaleES, 'es')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	CoreModule,
 	NgbModule,
	StoreModule.forRoot(reducers, {}),
	StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
	EffectsModule.forRoot([])
  ],
  providers: [
	{provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
