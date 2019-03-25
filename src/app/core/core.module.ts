import {NgModule} from "@angular/core";
import {CommonService} from "./common.service";
import {LayoutService} from "./layout.service";

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CommonService,
    LayoutService
  ]
})
export class CoreModule {
}
