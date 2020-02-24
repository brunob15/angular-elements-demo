import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { TalkComponent } from './components/talk/talk.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';

@NgModule({
  declarations: [
    TalkComponent,
    SponsorComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    TalkComponent,
    SponsorComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const talkElement = createCustomElement(TalkComponent, { injector: this.injector });
    customElements.define('talk-element', talkElement);

    const sponsorElement = createCustomElement(SponsorComponent, { injector: this.injector });
    customElements.define('sponsor-element', sponsorElement);
  }
}
