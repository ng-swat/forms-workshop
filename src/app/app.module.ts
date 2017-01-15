import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {WikiSearchService} from "./services/wiki-search.service";
import {InstantSearchComponent} from "./components/instant-search.component";
import { ModelDrivenFormComponent } from './components/model-driven-form.component';
import { CustomControlComponent } from './components/custom-control.component';
import {GroupedFormComponent} from "./components/forms-groups-arrays.component";
import { AutoFocusDirective } from './directives/auto-focus.directive';
import {FormValidators} from "./components/forms-validation";


@NgModule({
  declarations: [
    AppComponent,
    InstantSearchComponent,
    ModelDrivenFormComponent,
    GroupedFormComponent,
    FormValidators,
    CustomControlComponent,
    AutoFocusDirective
  ],
  imports     : [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers   : [WikiSearchService],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
