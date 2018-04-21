import { Component, OnInit } from '@angular/core';
import { SurveysService } from '../../services/surveys.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveys=[];
  survey: Survey;
  constructor(private surveysservice: SurveysService) {
    
   }

  ngOnInit() {
    this.surveysservice.getSurveyList().subscribe((posts)=> this.surveys = posts)
  }

}

export interface Survey {
  userId: number;
  id: number;
  title: string;
  body: string;
}
