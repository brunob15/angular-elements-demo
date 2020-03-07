import { CommonModule } from '@angular/common';
import { NgModule, Type, Injector } from '@angular/core';

import { SponsorComponent } from './sponsor.component';
import { NgxElementService } from 'ngx-element';

@NgModule({
  declarations: [
    SponsorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SponsorComponent
  ],
  entryComponents: [
    SponsorComponent
  ]
})
export class SponsorModule {
  customElementComponent: Type<any> = SponsorComponent;

  constructor(private injector: Injector, private ngxElementService: NgxElementService) {
    this.ngxElementService.receiveContext(SponsorComponent, injector);
  }

  ngDoBootstrap() { }
}
