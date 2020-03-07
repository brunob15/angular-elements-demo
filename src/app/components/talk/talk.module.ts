import { CommonModule } from '@angular/common';
import { NgModule, Type, Injector } from '@angular/core';

import { TalkComponent } from './talk.component';
import { NgxElementService } from 'ngx-element';

@NgModule({
  declarations: [
    TalkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TalkComponent
  ],
  entryComponents: [
    TalkComponent
  ]
})
export class TalkModule {
  customElementComponent: Type<any> = TalkComponent;

  constructor(private injector: Injector, private ngxElementService: NgxElementService) {
    this.ngxElementService.receiveContext(TalkComponent, injector);
  }

  ngDoBootstrap() { }
}
