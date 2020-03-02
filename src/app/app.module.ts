import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxElementModule, NgxElementComponent } from 'ngx-element';

const lazyConfig = [
  {
    selector: 'talk',
    loadChildren: () => import('./components/talk/talk.module')
  },
  {
    selector: 'sponsor',
    loadChildren: () => import('./components/sponsor/sponsor.module')
  }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgxElementModule.forRoot(lazyConfig)
  ],
  entryComponents: [
    NgxElementComponent
  ]
})
export class AppModule {
  constructor() {}

  ngDoBootstrap() {}
}
