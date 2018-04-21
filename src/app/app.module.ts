import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { AppComponent } from './app.component';
import { SurveyComponent } from './components/survey/survey.component';
import { DetailsComponent } from './components/survey/details/details.component';

import { SurveysService } from './services/surveys.service';
import { CreateComponent } from './components/survey/create/create.component';


const appRoutes: Routes =[
  {path: '' , component: SurveyComponent},
  {path: 'surveys' , component: SurveyComponent},
  {path: 'survey-details/:id' , component: DetailsComponent},
  {path: 'surveys/new' , component: CreateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SurveysService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
