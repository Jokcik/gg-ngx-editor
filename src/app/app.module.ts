import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {GGSpoilerComponent} from './gg-spoiler';
import {GGNgxEditorModule} from 'gg-ngx-editor';

@NgModule({
  declarations: [
    AppComponent,
    GGSpoilerComponent
  ],
  imports: [
    BrowserModule,
    GGNgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private injector: Injector) {
    // const customSpoiler = createCustomElement(GGSpoilerComponent, { injector: this.injector });
    // customElements.define('gg-spoiler', customSpoiler);
  // }
}
