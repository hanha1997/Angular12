import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OnSalePipe } from './on-sale.pipe';
import { HighlightDirective } from './Directives/highlight.directive';
import { TemplateDrivenFormComponent } from './templates/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './ReactiveForm/reactive-form/reactive-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { GetDataComponent } from './get-data/get-data.component';
import {HttpClientModule} from "@angular/common/http";
import { PostDataComponent } from './post-data/post-data.component';
import { ParentsComponent } from './parents/parents.component';
import { ChillComponent } from './chill/chill.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OnSalePipe,
    HighlightDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    GetDataComponent,
    PostDataComponent,
    ParentsComponent,
    ChillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
