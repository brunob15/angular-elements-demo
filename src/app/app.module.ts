import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxElementModule } from 'ngx-element';

const lazyConfig = [
  {
    selector: 'talk',
    loadChildren: () => import('./components/talk/talk.module').then(m => m.TalkModule)
  },
  {
    selector: 'sponsor',
    loadChildren: () => import('./components/sponsor/sponsor.module').then(m => m.SponsorModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgxElementModule.forRoot(lazyConfig)
  ]
})
export class AppModule {
  constructor() {}

  ngDoBootstrap() {}
}
