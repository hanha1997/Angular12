import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {TemplateDrivenFormComponent} from "./templates/template-driven-form/template-driven-form.component";
import {ReactiveFormComponent} from "./ReactiveForm/reactive-form/reactive-form.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'templateForm', component: TemplateDrivenFormComponent },
  { path: 'reactiveFrom', component: ReactiveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
