import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {TemplateDrivenFormComponent} from "./templates/template-driven-form/template-driven-form.component";
import {ReactiveFormComponent} from "./ReactiveForm/reactive-form/reactive-form.component";
import {GetDataComponent} from "./get-data/get-data.component";
import {PostDataComponent} from "./post-data/post-data.component";
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'templateForm', component: TemplateDrivenFormComponent },
  { path: 'reactiveFrom', component: ReactiveFormComponent },
  { path: 'getDataFrom', component: GetDataComponent },
  { path: 'postDataFrom', component: PostDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
