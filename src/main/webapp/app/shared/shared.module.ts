import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { KeurkhaleyiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [KeurkhaleyiSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [KeurkhaleyiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KeurkhaleyiSharedModule {
  static forRoot() {
    return {
      ngModule: KeurkhaleyiSharedModule
    };
  }
}
